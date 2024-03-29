<?php

if ( ! class_exists( 'Murmurations_Node_Uninstall' ) ) {
	class Murmurations_Node_Uninstall {
		public static function uninstall(): void {
			global $wpdb;
			$table_name = $wpdb->prefix . MURMURATIONS_NODE_TABLE;

			if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) === $table_name ) {
				$wpdb->query( "DROP TABLE IF EXISTS $table_name" );
			}
		}
	}
}
