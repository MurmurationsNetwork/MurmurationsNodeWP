<?php

class Murmurations_Node_Uninstall {
	public function __construct() {
		register_uninstall_hook( __FILE__, array( $this, 'uninstall' ) );
	}

	public static function uninstall() {
		if (!defined('WP_UNINSTALL_PLUGIN')) {
			wp_die(sprintf(__( '%s should only be called when uninstalling the plugin.', 'murmurations-node-admin'), __FILE__ ));
		}

		// delete the plugin db
	}
}
