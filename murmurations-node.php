<?php
/**
 * Plugin Name:     Murmurations Node
 * Plugin URI:      https://github.com/MurmurationsNetwork/MurmurationsNodeWP
 * Description:     Put your organisation on the map!
 * Author:          Murmurations Network
 * Author URI:      https://murmurations.network
 * Text Domain:     murmurations-node
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Murmurations_Node
 */

namespace Murmurations\Node;

include "includes/autoload.php";

define( 'MURMNODE_ROOT_PATH', plugin_dir_path( __FILE__ ) );
define( 'MURMNODE_ROOT_URL', plugin_dir_url( __FILE__ ) );

function llog( $content, $meta = null ){
  return Logging::log( $content, $meta );
}
