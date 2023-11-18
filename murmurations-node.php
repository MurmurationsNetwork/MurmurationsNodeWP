<?php
/**
 * Plugin Name:       Murmurations Profile Generator
 * Plugin URI:        https://github.com/MurmurationsNetwork/MurmurationsNodeWP
 * Description:       Add your profile to the Murmurations distributed data sharing network.
 * Version:           1.0.0-beta.7
 * Requires at least: 6.4
 * Text Domain:       murmurations-node
 * Author:            Murmurations Network
 * Author URI:        https://murmurations.network
 * License:           GPLv3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 */

/*
The Murmurations Profile Generator plugin is free software: you can
redistribute it and/or modify it under the terms of the GNU General Public
License as published by the Free Software Foundation, either version 3 of
the License, or any later version.

Murmurations Profile Generator is distributed in the hope that it will
be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
Public License for more details.

You should have received a copy of the GNU General Public License along with
the Murmurations Profile Generator plugin. If not, see 
https://www.gnu.org/licenses/gpl-3.0.html.
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'MurmurationsNode' ) ) {
	define( 'MURMURATIONS_NODE_URL', plugin_dir_url( __FILE__ ) );
	define( 'MURMURATIONS_NODE_DIR', __DIR__ );
	define( 'MURMURATIONS_NODE_TABLE', 'murmurations_profiles' );

	class MurmurationsNode {
		public function __construct() {
			$this->register_autoloads();
			$this->register_admin_page();
			$this->register_api();
			$this->register_upgrade();
		}

		private function register_autoloads() {
			spl_autoload_register( function ( $name ) {
				$name = strtolower( $name );
				$name = str_replace( '_', '-', $name );
				$name = 'class-' . $name;
				$file = __DIR__ . '/admin/classes/' . $name . '.php';

				if ( file_exists( $file ) ) {
					require_once $file;
				}
			} );
		}

		public function register_admin_page() {
			new Murmurations_Node_Admin_Page();
		}

		public function register_api() {
			new Murmurations_Node_API();
		}

		public function register_upgrade() {
			new Murmurations_Node_Upgrade();
		}
	}

	new MurmurationsNode();
}

if ( class_exists( 'Murmurations_Node_Activation' ) ) {
	register_activation_hook( __FILE__, array( 'Murmurations_Node_Activation', 'activate' ) );
}

if ( class_exists( 'Murmurations_Node_Uninstall' ) ) {
	register_uninstall_hook( __FILE__, array( 'Murmurations_Node_Uninstall', 'uninstall' ) );
}
