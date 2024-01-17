<?php

if ( ! class_exists( 'Murmurations_Node_Admin_Page' ) ) {
	class Murmurations_Node_Admin_Page {
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'add_menus' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
		}

		public function add_menus(): void {
			add_menu_page(
				'Murmurations Profile Generator',
				'Murm-Profiles',
				'edit_posts', // capability
				'murmurations-node',
				array( $this, 'admin_page' ),
				'dashicons-admin-network', // icon URL
				null // position
			);
		}

		public function admin_page(): void {
			echo '<div id="wp-admin-plugin-page-root"></div>';
			echo '<style>#wpcontent {padding-left: 0;}</style>';
		}

		public function enqueue_assets( $hook ): void {
			if ( 'toplevel_page_murmurations-node' !== $hook ) {
				return;
			}

			$script      = 'admin/assets/react/index.js';
			$script_file = MURMURATIONS_NODE_DIR . '/' . $script;

			if ( file_exists( $script_file ) ) {
				wp_enqueue_script( 'murmurations-node', MURMURATIONS_NODE_URL . $script, array(), filemtime( $script_file ), true );
			}

			$style      = 'admin/assets/react/index.css';
			$style_file = MURMURATIONS_NODE_DIR . '/' . $style;

			if ( file_exists( $style_file ) ) {
				wp_enqueue_style( 'murmurations-node', MURMURATIONS_NODE_URL . $style, array(), filemtime( $style_file ) );
			}

			// add site url to script
			wp_localize_script(
				'murmurations-node',
				'murmurations_node',
				array(
					'wordpress_url' => get_site_url(),
					'wp_nonce'      => wp_create_nonce( 'wp_rest' ),
				)
			);
		}
	}
}
