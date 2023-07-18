<?php

if ( ! class_exists( 'Murmurations_Node_API' ) ) {
    class Murmurations_Node_API {
        public function __construct() {
            add_action( 'wp_ajax_react-wp-admin-ajax', array( $this, 'handle_ajax' ) );
        }

        public function handle_ajax() {
            header( 'Content-Type: application/json' );

            $user = wp_get_current_user();

            echo json_encode( array(
                'name'    => $user ? $user->data->display_name : 'there',
                'message' => 'API call works!',
            ) );

            exit;
        }
    }
}
