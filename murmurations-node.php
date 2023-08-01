<?php
/**
 * Plugin Name: Murmurations Node
 * Plugin URI: https://github.com/MurmurationsNetwork/MurmurationsNodeWP
 * Description: Add your profile to the Murmurations distributed data sharing network.
 * Version: 1.0.0-beta.1
 * Text Domain: murmurations-node
 * Author: Murmurations Network
 * Author URI: https://murmurations.network
 * License: GPLv3 or later
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'MurmurationsNode' ) ) {
    define( 'MURMURATIONS_NODE_URL', plugin_dir_url( __FILE__ ) );
    define( 'MURMURATIONS_NODE_DIR', __DIR__ );
	define( 'MURMURATIONS_NODE_TABLE', 'murmurations_profiles');

    class MurmurationsNode {
        public function __construct() {
            $this->register_autoloads();
            $this->register_admin_page();
            $this->register_api();
        }

        private function register_autoloads() {
            spl_autoload_register(function($name){
				$name = strtolower($name);
				$name = str_replace('_', '-', $name);
				$name = 'class-' . $name;
				$file = __DIR__ . '/admin/classes/' . $name . '.php';

				if ( file_exists( $file ) ) {
					require_once $file;
				}
			});
        }

        public function register_admin_page() {
            new Murmurations_Node_Admin_Page();
        }

        public function register_api() {
            new Murmurations_Node_API();
        }
    }

    new MurmurationsNode();
}

if ( class_exists('Murmurations_Node_Activation') ) {
	register_activation_hook( __FILE__, array('Murmurations_Node_Activation', 'activate' ) );
}

if ( class_exists('Murmurations_Node_Uninstall') ) {
	register_uninstall_hook( __FILE__, array('Murmurations_Node_Uninstall', 'uninstall' ));
}
