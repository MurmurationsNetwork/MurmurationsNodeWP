<?php

if ( ! class_exists( 'Murmurations_Node_Upgrade' ) ) {
	class Murmurations_Node_Upgrade {
		public function __construct() {
			add_action( 'upgrader_process_complete', array( $this, 'upgrade_db_check' ) );
		}

		public static function upgrade_db_check(): void {
			// uncomment the following line to upgrade the db
			// $current_version = get_option( 'murmurations_node_version' );
			//
			// $new_version = '1.2.0';
			//
			// if (version_compare($current_version, $new_version, '<')) {
			// update db
			// global $wpdb;
			// $table_name = $wpdb->prefix . MURMURATIONS_NODE_TABLE;
			// $sql = "ALTER TABLE $table_name ADD COLUMN new_field json NOT NULL";
			// $wpdb->query($sql);
			//
			// update the plugin version in the database
			// update_option('murmurations_node_version', $new_version);
			// }
		}
	}
}
