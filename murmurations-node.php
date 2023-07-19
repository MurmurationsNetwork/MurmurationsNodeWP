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

    new MurmurationsNodeAdmin();
}

function murmurations_node_admin_activation(): void {
	global $wpdb;
	$table_name = $wpdb->prefix . 'murmurations_profiles';

	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $table_name (
        id INT NOT NULL AUTO_INCREMENT,
        cuid VARCHAR(100) NOT NULL,
        node_id VARCHAR(100),
        linked_schemas JSON NOT NULL,
		profile JSON NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY (id)
    ) $charset_collate;";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );
}

register_activation_hook( __FILE__, 'murmurations_node_admin_activation' );

function murmurations_node_admin_uninstall(): void {
	global $wpdb;
	$table_name = $wpdb->prefix . 'murmurations_profiles';

	if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") === $table_name) {
		$wpdb->query("DROP TABLE IF EXISTS $table_name");
	}
}

register_uninstall_hook(__FILE__, 'murmurations_node_admin_uninstall');
