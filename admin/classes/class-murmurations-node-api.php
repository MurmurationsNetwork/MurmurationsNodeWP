<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
    class Murmurations_Node_API {
        public function __construct() {
            add_action( 'rest_api_init', function () {
				register_rest_route(
					'murmurations-node/v1',
					'/get_profiles',
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_profiles' ),
					)
				);
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
			        'id'            => $profile['id'],
			        'cuid'          => $profile['cuid'],
			        'node_id'       => $profile['node_id'],
			        'linked_schemas' => json_decode( $profile['linked_schemas'], true ),
			        'profile'       => json_decode( $profile['profile'], true ),
			        'created_at'    => $profile['created_at'],
			        'updated_at'    => $profile['updated_at'],
		        );
	        }

            return rest_ensure_response( $data );
        }
    }
}
