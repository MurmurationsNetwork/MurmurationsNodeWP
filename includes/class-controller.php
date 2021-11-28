<?php
/**
 * Controller class
 *
 * @package Murmurations Node
 */

namespace Murmurations\Node;

/**
 * Class to handle all admin functionality
 */
class Controller {
	/**
	 * Initialize
	 *
	 */
  public static function init(){

    $default_settings = array(
 			'schemas'            => array( array( 'location' => MURMAG_ROOT_URL . 'schemas/default.json' ) ),
 			'field_map_file'     => MURMAG_ROOT_URL . 'schemas/field_map.json',
 			'css_directory'      => MURMAG_ROOT_URL . 'css/',
 			'template_directory' => MURMAG_ROOT_PATH . 'templates/',
 			'log_file'           => MURMAG_ROOT_PATH . 'logs/murmurations_node.log',
 		);

 		Settings::load_schema( $default_settings );

 		Settings::load();

 		self::register_hooks();

    if( is_admin() ){
      Admin::init();
    }
  }

  /**
   * Serve the profile JSON from WP REST enpoint
   * @return string JSON data
   */
  public static function rest_get_profile(){

  }

  
}
