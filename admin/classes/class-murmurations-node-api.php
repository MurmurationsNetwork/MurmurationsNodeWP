<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
    class Murmurations_Node_API {
        public function __construct() {
            add_action( 'rest_api_init', function () {
				// get all profiles
				register_rest_route(
					'murmurations-node/v1',
					'/profile',
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_profiles' ),
					)
				);

				// get a profile
				register_rest_route(
					'murmurations-node/v1',
					'/profile/(?P<cuid>[\w]+)',
	                array(
						'method'    => 'GET',
                        'callback'  => array( $this, 'get_profile' ),
	                )
				);

	            // post a profile
	            register_rest_route(
					'murmurations-node/v1',
					'/profile',
                    array(
						'methods'  => 'POST',
						'callback' => array( $this, 'post_profile' ),
                    )
	            );

	            // edit a profile
	            register_rest_route(
					'murmurations-node/v1',
		            '/profile',
		            array(
						'methods'  => 'PUT',
                        'callback' => array( $this, 'edit_profile' ),
					)
	            );

	            // delete a profile
            });
        }

        public function get_profiles( ) {
//			// todo: we might need to set the permission, it's not working now.
//			if ( ! current_user_can( 'read') ) {
//				return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the profiles.' ), array( 'status' => 401 ) );
//			}

	        global $wpdb;
	        $table_name = $wpdb->prefix . 'murmurations_profiles';

	        $profiles = $wpdb->get_results( "SELECT * FROM $table_name", ARRAY_A );

	        if ( empty( $profiles ) ) {
		        return new WP_Error( 'no_profiles_found', esc_html__( 'No profiles found.', 'text-domain' ), array( 'status' => 404 ) );
	        }

	        $data = array();
	        foreach ( $profiles as $profile ) {
		        $data[] = array(
			        'id'                => $profile['id'],
			        'cuid'              => $profile['cuid'],
			        'node_id'           => $profile['node_id'],
			        'linked_schemas'    => json_decode( $profile['linked_schemas'], true ),
			        'profile'           => json_decode( $profile['profile'], true ),
			        'created_at'        => $profile['created_at'],
			        'updated_at'        => $profile['updated_at'],
		        );
	        }

            return rest_ensure_response( $data );
        }

		public function get_profile( $request ) {
			global $wpdb;
			$table_name = $wpdb->prefix . 'murmurations_profiles';

			$cuid = $request['cuid'];

			$profile = $wpdb->get_row(
				$wpdb->prepare("SELECT * FROM $table_name WHERE cuid = %s", $cuid),
				ARRAY_A
			);

			if (empty($profile)) {
				return new WP_Error('profile_not_found', esc_html__('Profile not found.', 'text-domain'), array('status' => 404));
			}

			// Prepare the data to be returned in the API response
			$data = array(
				'id' => $profile['id'],
				'cuid' => $profile['cuid'],
				'node_id' => $profile['node_id'],
				'linked_schemas' => json_decode($profile['linked_schemas'], true),
				'profile' => json_decode($profile['profile'], true),
				'created_at' => $profile['created_at'],
				'updated_at' => $profile['updated_at'],
			);

			return rest_ensure_response($data);
		}

		public function post_profile( $request ) {
			global $wpdb;
			$table_name = $wpdb->prefix . 'murmurations_profiles';

			$data = $request->get_json_params();

			// validate the data
			if (
				!isset($data['cuid']) ||
				!isset($data['linked_schemas']) ||
				!isset($data['profile'])
			) {
				return new WP_Error('invalid_data', esc_html__('Invalid data. All fields are required.', 'text-domain'), array('status' => 400));
			}

			// check if the profile already exists
			$profile = $wpdb->get_row(
				$wpdb->prepare("SELECT * FROM $table_name WHERE cuid = %s", $data['cuid']),
				ARRAY_A
			);

			if (!empty($profile)) {
				return new WP_Error('profile_already_exists', esc_html__('Profile already exists.', 'text-domain'), array('status' => 400));
			}

			$insert_data = array(
				'cuid' => sanitize_text_field($data['cuid']),
				'node_id' => sanitize_text_field($data['node_id']),
				'linked_schemas' => wp_json_encode($data['linked_schemas']),
				'profile' => wp_json_encode($data['profile']),
			);

			$insert_result = $wpdb->insert($table_name, $insert_data);

			if ($insert_result === false) {
				return new WP_Error('insert_failed', esc_html__('Failed to insert the profile into the database.', 'text-domain'), array('status' => 500));
			}

			$response = array(
				'message' => esc_html__('Profile inserted successfully.', 'text-domain'),
			);

			return rest_ensure_response($response);
		}

		public function edit_profile( $request ) {
			global $wpdb;
			$table_name = $wpdb->prefix . 'murmurations_profiles';

			$data = $request->get_json_params();

			if (!isset($data['cuid'])) {
				return new WP_Error('invalid_cuid', esc_html__('Invalid cuid in the request.', 'text-domain'), array('status' => 400));
			}

			$existing_profile = $wpdb->get_row(
				$wpdb->prepare("SELECT * FROM $table_name WHERE cuid = %s", $data['cuid']),
				ARRAY_A
			);

			if (empty($existing_profile)) {
				return new WP_Error('profile_not_found', esc_html__('Profile not found.', 'text-domain'), array('status' => 404));
			}

			$update_data = array(
				'profile' => wp_json_encode($data['profile']),
				'updated_at' => current_time('mysql'),
			);

			$update_result = $wpdb->update(
				$table_name,
				$update_data,
				array('cuid' => $data['cuid'])
			);

			if ($update_result === false) {
				return new WP_Error('update_failed', esc_html__('Failed to update the profile.', 'text-domain'), array('status' => 500));
			}

			$response = array(
				'message' => esc_html__('Profile updated successfully.', 'text-domain'),
			);

			return rest_ensure_response($response);
		}
    }
}
