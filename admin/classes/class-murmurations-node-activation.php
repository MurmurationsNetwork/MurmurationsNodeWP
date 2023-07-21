<?php

if ( ! class_exists('Murmurations_Node_Activation') ) {
	class Murmurations_Node_Activation {
		public static function activate() {
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
	}
}
