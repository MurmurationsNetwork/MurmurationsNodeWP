<?php

if ( ! class_exists( 'Murmurations_Node_Deactivation' ) ) {
	class Murmurations_Node_Deactivation {
		public static function deactivate(): void {
			// Clear the permalinks after the post type has been registered.
			flush_rewrite_rules();
		}
	}
}
