<?php
/**
 * Load plugin classes
 *
 * @package Murmurations Node
 */

namespace Murmurations\Node;

function autoload( $class ){

  if( substr( $class, 0, 17 ) === "Murmurations\Node" ){

    $class_only = substr($class, 18);

    require "class-" . strtolower( $class_only ) . '.php';

  }

}

spl_autoload_register('Murmurations\Node\autoload');
