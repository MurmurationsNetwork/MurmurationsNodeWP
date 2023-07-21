<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
    class Murmurations_Node_API {
        public function __construct() {
            add_action( 'rest_api_init', function () {
				// get all profiles
				register_rest_route(
					'murmurations-node/v1',
					'/get_profiles',
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_profiles' ),
					)
				);

				// get a profile
				register_rest_route(
					'murmurations-node/v1',
					'/get_profile/(?P<cuid>[\w]+)',
	                array(
						'method'    => 'GET',
                        'callback'  => array( $this, 'get_profile' ),
	                )
				);

	            // post a profile

	            // edit a profile

	            // delete a profile
            });
        }

        public function get_profiles( $request ) {
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
    }
}
