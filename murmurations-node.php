<?php
/**
 * Plugin Name: Murmurations Node Admin
 * Plugin URI: https://github.com/MurmurationsNetwork/MurmurationsNodeWP
 * Description: Add your profile to the Murmurations distributed data sharing network.
 * Version: 1.0.0-beta-1
 * Text Domain: murmurations-node-admin
 * Author: Murmurations Network
 * Author URI: https://murmurations.network
 * License: GPLv3 or later
 */

if ( ! class_exists( 'MurmurationsNodeAdmin' ) ) {
    define( 'MURMURATIONS_NODE_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    define( 'MURMURATIONS_NODE_ADMIN_DIR', __DIR__ );

    class MurmurationsNodeAdmin {
        public function __construct() {
            $this->register_autoloads();
			$this->register_activation();
			$this->register_deactivation();
			$this->register_uninstall();
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

		public function register_activation() {
			new Murmurations_Node_Activation();
		}

		public function register_deactivation() {
			new Murmurations_Node_Deactivation();
		}

		public function register_uninstall() {
			new Murmurations_Node_Uninstall();
		}
    }

    new MurmurationsNodeAdmin();
}
