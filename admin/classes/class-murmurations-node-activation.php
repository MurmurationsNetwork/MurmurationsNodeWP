<?php

class Murmurations_Node_Activation {
	public function __construct() {
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
	}

	public static function activate() {
		// activate the plugin
	}
}
