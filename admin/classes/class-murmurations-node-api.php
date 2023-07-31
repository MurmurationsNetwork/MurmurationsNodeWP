<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
	class Murmurations_Node_API {
		private $wpdb;
		private $table_name;

		public function __construct() {
			add_action( 'rest_api_init', function () {
				global $wpdb;
				$this->wpdb       = $wpdb;
				$this->table_name = $wpdb->prefix . MURMURATIONS_NODE_TABLE;

				// routes without cuid
				register_rest_route(
					'murmurations-node/v1',
					'/profile',
					array(
						array(
							'methods'  => 'GET',
							'callback' => array( $this, 'get_profiles' ),
						),
						array(
							'methods'  => 'POST',
							'callback' => array( $this, 'post_profile' ),
						),
					)
				);

				// routes with cuid
				register_rest_route(
					'murmurations-node/v1',
					'/profile/(?P<cuid>[\w]+)',
					array(
						array(
							'method'   => 'GET',
							'callback' => array( $this, 'get_profile' ),
						),
						array(
							'methods'  => 'PUT',
							'callback' => array( $this, 'edit_profile' ),
						),
						array(
							'methods'  => 'DELETE',
							'callback' => array( $this, 'delete_profile' ),
						),
					)
				);

				register_rest_route(
					'murmurations-node/v1',
					'/profile-detail/(?P<cuid>[\w]+)',
					array(
						'methods'   => 'GET',
						'callback' => array( $this, 'get_profile_detail' ),
					),
				);

				register_rest_route(
					'murmurations-node/v1',
					'/profile/update-node-id/(?P<cuid>[\w]+)',
					array(
						'methods'   => 'PUT',
						'callback' => array( $this, 'update_node_id' ),
					),
				);

				register_rest_route(
					'murmurations-node/v1',
					'/profile/update-deleted-at/(?P<cuid>[\w]+)',
					array(
						'methods'   => 'PUT',
						'callback' => array( $this, 'update_deleted_at' ),
					),
				);
			} );
		}

		public function get_profiles( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

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
					'id'             => $profile['id'],
					'cuid'           => $profile['cuid'],
					'node_id'        => $profile['node_id'],
					'linked_schemas' => json_decode( $profile['linked_schemas'], true ),
					'title'          => $profile['title'],
					'profile'        => json_decode( $profile['profile'], true ),
					'created_at'     => $profile['created_at'],
					'updated_at'     => $profile['updated_at'],
				);
			}

			return rest_ensure_response( $data );
		}

		public function get_profile( $request ) {
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

		public function get_profile_detail( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

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

		public function post_profile( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

			$data = $request->get_json_params();

			// validate the data
			if (
				! isset( $data['cuid'] ) ||
				! isset( $data['linked_schemas'] ) ||
				! isset( $data['profile'] ) ||
				! isset( $data['env'] )
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
				'node_id'        => sanitize_text_field( $data['node_id'] ),
				'linked_schemas' => wp_json_encode( $data['linked_schemas'] ),
				'title'          => sanitize_text_field( $data['title'] ),
				'profile'        => wp_json_encode( $data['profile'] ),
				'env'            => sanitize_text_field( $data['env'] )
			);

			$insert_result = $this->wpdb->insert( $this->table_name, $insert_data );

			if ( $insert_result === false ) {
				return new WP_Error( 'insert_failed', esc_html__( 'Failed to insert the profile into the database.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Profile inserted successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}

		public function edit_profile( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

			$data = $request->get_json_params();

			if ( ! isset( $request['cuid'] ) ) {
				return new WP_Error( 'invalid_cuid', esc_html__( 'Invalid cuid in the request.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$existing_profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $request['cuid'] ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$update_data = array(
				'title'      => sanitize_text_field( $data['title'] ),
				'profile'    => wp_json_encode( $data['profile'] ),
				'updated_at' => current_time('mysql'),
			);

			$update_result = $this->wpdb->update(
				$this->table_name,
				$update_data,
				array( 'cuid' => $request['cuid'] )
			);

			if ( $update_result === false ) {
				return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Profile updated successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}

		public function delete_profile( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

			if ( ! isset( $request['cuid'] ) ) {
				return new WP_Error( 'invalid_cuid', esc_html__( 'Invalid cuid in the request.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$existing_profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $request['cuid'] ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$delete_result = $this->wpdb->delete(
				$this->table_name,
				array( 'cuid' => $request['cuid'] )
			);

			if ( $delete_result === false ) {
				return new WP_Error( 'delete_failed', esc_html__( 'Failed to delete the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Profile deleted successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}

		public function update_node_id( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

			$data = $request->get_json_params();

			if ( ! isset( $data['node_id'] ) ) {
				return new WP_Error( 'invalid_data', esc_html__( $data, 'text-domain' ), array( 'status' => 400 ) );
			}

			$update_result = $this->wpdb->update(
				$this->table_name,
				array( 'node_id' => sanitize_text_field( $data['node_id'] ) ),
				array( 'cuid' => $request['cuid'] )
			);

			if ( $update_result === false ) {
				return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Node ID updated successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}

		public function update_deleted_at( $request ) {
			$nonce = $request['_wpnonce'] ?? '';

			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
			}

			if ( ! isset( $request['cuid'] ) ) {
				return new WP_Error( 'invalid_cuid', esc_html__( 'Invalid cuid in the request.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$update_result = $this->wpdb->update(
				$this->table_name,
				array( 'deleted_at' => current_time('mysql') ),
				array( 'cuid' => $request['cuid'] )
			);

			if ( $update_result === false ) {
				return new WP_Error( 'update_failed', esc_html__( 'Failed to update the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Deleted at updated successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}
	}
}
