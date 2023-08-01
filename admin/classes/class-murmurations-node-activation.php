<?php

if ( ! class_exists('Murmurations_Node_Activation') ) {
	class Murmurations_Node_Activation {
		public static function activate() {
			global $wpdb;
			$table_name = $wpdb->prefix . MURMURATIONS_NODE_TABLE;

			$charset_collate = $wpdb->get_charset_collate();

			$sql = "CREATE TABLE $table_name (
		        id INT NOT NULL AUTO_INCREMENT,
		        cuid VARCHAR(100) NOT NULL,
		        node_id VARCHAR(100) DEFAULT NULL,
		        linked_schemas JSON NOT NULL,
		        title VARCHAR(100) NOT NULL,
				profile JSON NOT NULL,
				env VARCHAR(100) NOT NULL,
				index_errors JSON DEFAULT NULL,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
				updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
				deleted_at TIMESTAMP NULL,
		        PRIMARY KEY (id)
		    ) $charset_collate;";

			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );
		}
	}
}
