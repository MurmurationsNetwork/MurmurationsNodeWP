<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
	class Murmurations_Node_API {
		private QM_DB|wpdb $wpdb;
		private string $table_name;
		private bool $is_local;

		public function __construct() {
			global $wpdb;
			$this->wpdb       = $wpdb;
			$this->table_name = $wpdb->prefix . MURMURATIONS_NODE_TABLE;
			$this->is_local   = str_contains( get_site_url(), 'localhost' ) || str_contains( get_site_url(), '127.0.0.1' ) || str_contains( get_site_url(), '.test' );

			add_action( 'rest_api_init', array( $this, 'register_api_routes' ) );
		}

		public function register_api_routes(): void {
			$namespace = 'murmurations-node/v1';

			// routes without cuid
			register_rest_route(
				$namespace,
				'/profile',
				array(
					array(
						'methods'             => 'GET',
						'callback'            => array( $this, 'get_profiles' ),
						'permission_callback' => function () {
							return current_user_can( 'activate_plugins' );
						},
					),
					array(
						'methods'             => 'POST',
						'callback'            => array( $this, 'post_profile' ),
						'permission_callback' => function () {
							return current_user_can( 'activate_plugins' );
						},
					),
				)
			);

			// routes with cuid
			register_rest_route(
				$namespace,
				'/profile/(?P<cuid>[\w]+)',
				array(
					array(
						'method'              => 'GET',
						'callback'            => array( $this, 'get_profile' ),
						'permission_callback' => '__return_true',
					),
					array(
						'methods'             => 'PUT',
						'callback'            => array( $this, 'edit_profile' ),
						'permission_callback' => function () {
							return current_user_can( 'activate_plugins' );
						},
					),
					array(
						'methods'             => 'DELETE',
						'callback'            => array( $this, 'delete_profile' ),
						'permission_callback' => function () {
							return current_user_can( 'activate_plugins' );
						},
					),
				)
			);

			register_rest_route(
				$namespace,
				'/profile-detail/(?P<cuid>[\w]+)',
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_profile_detail' ),
					'permission_callback' => function () {
						return current_user_can( 'activate_plugins' );
					},
				),
			);

			register_rest_route(
				$namespace,
				'/profile/resend/(?P<cuid>[\w]+)',
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'resend_profile' ),
					'permission_callback' => function () {
						return current_user_can( 'activate_plugins' );
					},
				),
			);

			register_rest_route(
				$namespace,
				'/profile/update-node-id/(?P<cuid>[\w]+)',
				array(
					'methods'             => 'PUT',
					'callback'            => array( $this, 'update_node_id' ),
					'permission_callback' => function () {
						return current_user_can( 'activate_plugins' );
					},
				),
			);

			register_rest_route(
				$namespace,
				'/profile/update-deleted-at/(?P<cuid>[\w]+)',
				array(
					'methods'             => 'PUT',
					'callback'            => array( $this, 'update_deleted_at' ),
					'permission_callback' => function () {
						return current_user_can( 'activate_plugins' );
					},
				),
			);
		}

		public function get_profiles( $request ): WP_Error|WP_REST_Response {
			$env = $request->get_param( 'env' );

			if ( $env !== 'production' && $env !== 'test' ) {
				return new WP_Error( 'invalid_env', esc_html__( 'Invalid environment specified.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$profiles = $this->wpdb->get_results( "SELECT * FROM $this->table_name WHERE env = '$env'", ARRAY_A );

			if ( empty( $profiles ) ) {
				return new WP_Error( 'no_profiles_found', esc_html__( 'No profiles found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$data = array();
			foreach ( $profiles as $profile ) {
				$data[] = array(
					'cuid'           => $profile['cuid'],
					'node_id'        => $profile['node_id'],
					'linked_schemas' => $profile['linked_schemas'] ? json_decode( $profile['linked_schemas'], true ) : null,
					'title'          => $profile['title'],
					'profile'        => $profile['profile'] ? json_decode( $profile['profile'], true ) : null,
					'index_errors'   => $profile['index_errors'] ? json_decode( $profile['index_errors'], true ) : null,
					'created_at'     => $profile['created_at'],
					'updated_at'     => $profile['updated_at'],
				);
			}

			return rest_ensure_response( $data );
		}

		public function post_profile( $request ): WP_Error|WP_REST_Response {
			$data = $request->get_json_params();

			// validate the data
			if (
				! isset( $data['cuid'] ) ||
				! isset( $data['linked_schemas'] ) ||
				! isset( $data['title'] ) ||
				! isset( $data['profile'] ) ||
				! isset( $data['env'] ) ||
				! isset( $data['index_url'] )
			) {
				return new WP_Error( 'invalid_data', esc_html__( 'Invalid data. All fields are required.', 'text-domain' ), array( 'status' => 400 ) );
			}

			// check if the profile already exists
			$profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $data['cuid'] ),
				ARRAY_A
			);

			if ( ! empty( $profile ) ) {
				return new WP_Error( 'profile_already_exists', esc_html__( 'Profile already exists.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$insert_data = array(
				'cuid'           => sanitize_text_field( $data['cuid'] ),
				'linked_schemas' => wp_json_encode( $data['linked_schemas'] ),
				'title'          => sanitize_text_field( $data['title'] ),
				'profile'        => wp_json_encode( $data['profile'] ),
				'env'            => sanitize_text_field( $data['env'] ),
			);

			$result = $this->wpdb->insert( $this->table_name, $insert_data );

			if ( $result === false ) {
				return new WP_Error( 'insert_failed', esc_html__( 'Failed to create a profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			if ( ! $this->is_local ) {
				$index_url        = $data['index_url'] . '/nodes-sync';
				$indexUpdateError = $this->updateProfileIndex( $data['cuid'], $index_url );
				if ( $indexUpdateError !== null ) {
					return $indexUpdateError;
				}
			}

			$response = $this->handle_response( $result, 'Profile created successfully.', 'Failed to create a profile.' );

			return rest_ensure_response( $response );
		}

		public function get_profile( $request ): WP_Error|WP_REST_Response {
			$cuid = $request['cuid'];

			$profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $cuid ),
				ARRAY_A
			);

			if ( empty( $profile ) || $profile['deleted_at'] !== null ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$data = json_decode( $profile['profile'], true );

			return rest_ensure_response( $data );
		}

		public function edit_profile( $request ): WP_Error|WP_REST_Response {
			$data = $request->get_json_params();
			$this->checkProfile( $request, $data );

			$update_data = array(
				'title'      => sanitize_text_field( $data['title'] ),
				'profile'    => wp_json_encode( $data['profile'] ),
				'updated_at' => current_time( 'mysql' ),
			);

			$result = $this->wpdb->update(
				$this->table_name,
				$update_data,
				array( 'cuid' => $request['cuid'] )
			);

			if ( $result === false ) {
				return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			if ( ! $this->is_local ) {
				$index_url        = $data['index_url'] . '/nodes-sync';
				$indexUpdateError = $this->updateProfileIndex( $request['cuid'], $index_url );
				if ( $indexUpdateError !== null ) {
					return $indexUpdateError;
				}
			}

			$response = $this->handle_response( $result, 'Profile updated successfully.', 'Failed to update the profile.' );

			return rest_ensure_response( $response );
		}

		public function delete_profile( $request ): WP_Error|WP_REST_Response {
			$data             = $request->get_json_params();
			$existing_profile = $this->checkProfile( $request, $data );

			// update deleted_at field
			$update_data = array(
				'deleted_at' => current_time( 'mysql' ),
			);

			$result = $this->wpdb->update(
				$this->table_name,
				$update_data,
				array( 'cuid' => $request['cuid'] )
			);

			if ( $result === false ) {
				return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			// delete the profile from index
			if ( ! $this->is_local && ! empty( $existing_profile['node_id'] ) ) {
				$index_url = $data['index_url'] . '/nodes/' . $existing_profile['node_id'];
				$ch        = curl_init();
				curl_setopt( $ch, CURLOPT_URL, $index_url );
				curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'DELETE' );
				curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
				$result = curl_exec( $ch );
				curl_close( $ch );

				if ( $result === false ) {
					// update index_errors
					$update_data = array(
						'index_errors' => wp_json_encode(
							array(
								'status' => $ch['http_code'] ?? '',
								'errors' => curl_error( $ch ),
							)
						),
					);

					$result = $this->wpdb->update(
						$this->table_name,
						$update_data,
						array( 'cuid' => $request['cuid'] )
					);

					if ( $result === false ) {
						return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
					}

					return new WP_Error( 'index_delete_failed', esc_html__( 'Failed to delete the profile from the index.', 'text-domain' ), array( 'status' => 500 ) );
				}
			}

			// delete the profile from the database
			$result = $this->wpdb->delete(
				$this->table_name,
				array( 'cuid' => $request['cuid'] )
			);

			if ( $result === false ) {
				return new WP_Error( 'delete_failed', esc_html__( 'Failed to delete the profile from the database.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = $this->handle_response( $result, 'Profile deleted successfully.', 'Failed to delete the profile.' );

			return rest_ensure_response( $response );
		}

		public function get_profile_detail( $request ): WP_Error|WP_REST_Response {
			$cuid = $request['cuid'];

			$profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $cuid ),
				ARRAY_A
			);

			if ( empty( $profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$data = array(
				'id'             => $profile['id'],
				'cuid'           => $profile['cuid'],
				'node_id'        => $profile['node_id'],
				'linked_schemas' => json_decode( $profile['linked_schemas'], true ),
				'title'          => $profile['title'],
				'profile'        => json_decode( $profile['profile'], true ),
				'created_at'     => $profile['created_at'],
				'updated_at'     => $profile['updated_at'],
			);

			return rest_ensure_response( $data );
		}

		public function resend_profile( $request ): WP_Error|WP_REST_Response {
			$data = $request->get_json_params();

			if ( ! isset( $request['cuid'] ) || ! isset( $data['index_url'] ) ) {
				return new WP_Error( 'invalid_data', esc_html__( 'Invalid data. All fields are required.', 'text-domain' ), array( 'status' => 400 ) );
			}

			if ( $this->is_local ) {
				return new WP_Error( 'invalid_env', esc_html__( 'Unable to resend profile from localhost', 'text-domain' ), array( 'status' => 400 ) );
			}

			$existing_profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $request['cuid'] ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$index_url        = $data['index_url'] . '/nodes-sync';
			$indexUpdateError = $this->updateProfileIndex( $request['cuid'], $index_url );
			if ( $indexUpdateError !== null ) {
				return $indexUpdateError;
			}

			return rest_ensure_response( array( 'message' => esc_html__( 'Profile resent successfully.' ) ) );
		}

		public function update_node_id( $request ): WP_Error|WP_REST_Response {
			$data = $request->get_json_params();

			if ( ! isset( $data['node_id'] ) ) {
				return new WP_Error( 'invalid_data', esc_html__( $data, 'text-domain' ), array( 'status' => 400 ) );
			}

			$result = $this->wpdb->update(
				$this->table_name,
				array( 'node_id' => sanitize_text_field( $data['node_id'] ) ),
				array( 'cuid' => $request['cuid'] )
			);

			$response = $this->handle_response( $result, 'Node ID updated successfully.', 'Failed to update Node ID.' );

			return rest_ensure_response( $response );
		}

		public function update_deleted_at( $request ): WP_Error|WP_REST_Response {
			if ( ! isset( $request['cuid'] ) ) {
				return new WP_Error( 'invalid_cuid', esc_html__( 'Invalid cuid in the request.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$result = $this->wpdb->update(
				$this->table_name,
				array( 'deleted_at' => current_time( 'mysql' ) ),
				array( 'cuid' => $request['cuid'] )
			);

			$response = $this->handle_response( $result, 'deleted_at field updated successfully.', 'Failed to update deleted_at field.' );

			return rest_ensure_response( $response );
		}

		private function checkProfile( $request, $data ): WP_Error|array {
			if ( ! isset( $request['cuid'] ) || ! isset( $data['index_url'] ) ) {
				return new WP_Error( 'invalid_data', esc_html__( 'Invalid data. All fields are required.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$existing_profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $request['cuid'] ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			return $existing_profile;
		}

		private function updateProfileIndex( $cuid, $indexUrl ): WP_Error|null {
			$profileUrl = get_site_url() . '/wp-json/murmurations-node/v1/profile/' . $cuid;
			$ch         = curl_init();
			curl_setopt( $ch, CURLOPT_URL, $indexUrl );
			curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
			curl_setopt( $ch, CURLOPT_POSTFIELDS, wp_json_encode( array( 'profile_url' => $profileUrl ) ) );
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
			$result = curl_exec( $ch );
			curl_close( $ch );

			if ( $result === false ) {
				// update index_errors
				$updateData = array(
					'index_errors' => wp_json_encode(
						array(
							'status' => $ch['http_code'] ?? '',
							'errors' => curl_error( $ch ),
						)
					),
				);

				$updateResult = $this->wpdb->update(
					$this->table_name,
					$updateData,
					array( 'cuid' => $cuid )
				);

				if ( $updateResult === false ) {
					return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
				}

				return new WP_Error( 'index_update_failed', esc_html__( 'Failed to update the profile in the index.', 'text-domain' ), array( 'status' => 500 ) );
			}

			// update node_id
			$responseData = json_decode( $result, true );

			if ( ! $responseData || ! isset( $responseData['data'] ) || ! isset( $responseData['data']['node_id'] ) ) {
				return new WP_Error( 'node_id_not_found', esc_html__( 'Node ID not found in the response.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$updateData = array(
				'node_id' => sanitize_text_field( $responseData['data']['node_id'] ),
			);

			$updateResult = $this->wpdb->update(
				$this->table_name,
				$updateData,
				array( 'cuid' => $cuid )
			);

			if ( $updateResult === false ) {
				return new WP_Error( 'node_id_update_failed', esc_html__( 'Failed to update the node id.', 'text-domain' ), array( 'status' => 500 ) );
			}

			return null;
		}

		private function handle_response( $update_result, $message, $error_message ): WP_Error|array {
			if ( $update_result === false ) {
				return new WP_Error( 'update_failed', esc_html__( $error_message, 'text-domain' ), array( 'status' => 500 ) );
			}

			return array(
				'message' => esc_html__( $message, 'text-domain' ),
			);
		}
	}
}
