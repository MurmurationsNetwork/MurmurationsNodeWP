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
						array(
							'methods'  => 'PUT',
							'callback' => array( $this, 'edit_profile' ),
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
							'methods'  => 'DELETE',
							'callback' => array( $this, 'delete_profile' ),
						),
					)
				);

				register_rest_route(
					'murmurations-node/v1',
					'/profile-detail/(?P<cuid>[\w]+)',
					array(
						array(
							'method'   => 'GET',
							'callback' => array( $this, 'get_profile_detail' ),
						),
					)
				);
			} );
		}

		public function get_profiles() {
//			// todo: we might need to set the permission, it's not working now.
//			if ( ! current_user_can( 'read') ) {
//				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
//			}

			$profiles = $this->wpdb->get_results( "SELECT * FROM $this->table_name", ARRAY_A );

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

			if ( empty( $profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			// Prepare the data to be returned in the API response
			$data = json_decode( $profile['profile'], true );

			return rest_ensure_response( $data );
		}

		public function get_profile_detail( $request ) {
			$cuid = $request['cuid'];

			$profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $cuid ),
				ARRAY_A
			);

			if ( empty( $profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			// Prepare the data to be returned in the API response
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
			$data = $request->get_json_params();

			// validate the data
			if (
				! isset( $data['cuid'] ) ||
				! isset( $data['linked_schemas'] ) ||
				! isset( $data['profile'] )
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
			$data = $request->get_json_params();

			if ( ! isset( $data['cuid'] ) ) {
				return new WP_Error( 'invalid_cuid', esc_html__( 'Invalid cuid in the request.', 'text-domain' ), array( 'status' => 400 ) );
			}

			$existing_profile = $this->wpdb->get_row(
				$this->wpdb->prepare( "SELECT * FROM $this->table_name WHERE cuid = %s", $data['cuid'] ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$update_data = array(
				'title'      => sanitize_text_field( $data['title'] ),
				'profile'    => wp_json_encode( $data['profile'] ),
				'updated_at' => current_time( 'mysql' ),
			);

			$update_result = $this->wpdb->update(
				$this->table_name,
				$update_data,
				array( 'cuid' => $data['cuid'] )
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
			global $wpdb;
			$table_name = $wpdb->prefix . 'murmurations_profiles';

			$cuid = $request['cuid'];

			$existing_profile = $wpdb->get_row(
				$wpdb->prepare( "SELECT * FROM $table_name WHERE cuid = %s", $cuid ),
				ARRAY_A
			);

			if ( empty( $existing_profile ) ) {
				return new WP_Error( 'profile_not_found', esc_html__( 'Profile not found.', 'text-domain' ), array( 'status' => 404 ) );
			}

			$delete_result = $wpdb->delete(
				$table_name,
				array( 'cuid' => $cuid )
			);

			if ( $delete_result === false ) {
				return new WP_Error( 'delete_failed', esc_html__( 'Failed to delete the profile.', 'text-domain' ), array( 'status' => 500 ) );
			}

			$response = array(
				'message' => esc_html__( 'Profile deleted successfully.', 'text-domain' ),
			);

			return rest_ensure_response( $response );
		}
	}
}
