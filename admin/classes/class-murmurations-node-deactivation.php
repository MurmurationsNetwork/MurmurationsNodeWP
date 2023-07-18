<?php

class Murmurations_Node_Deactivation {
	public function __construct() {
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
	}

	public static function deactivate() {
		// deactivate the plugin
	}
}
