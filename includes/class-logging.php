<?php
/**
 * Logging and error handling
 *
 * @package Murmurations Node
 */

namespace Murmurations\Node;

class Logging {

  self::$buffer = '';

  /**
   * Write to the log
   *
   * @param  mixed  $content Things to be logged.
   * @param  string $meta Optional description of things.
   */
  public static function log( $content, $meta = null ) {

  	$file = Settings::get( 'log_file' );
  	$mode = Settings::get( 'logging_mode' );

  	if ( $mode === 'none' ) {
  		return;
  	}

  	$log  = date( DATE_ATOM ) . ' ';
  	$log .= $meta ? $meta . ': ' : '';
  	$log .= ( is_array( $content ) || is_object( $content ) ) ? print_r( (array) $content, true ) : $content;

  	if ( is_writable( $file ) ) {
  		if ( $mode === 'single' ) {
  			$flag                     = null;
  			self::$buffer .= $log . "\n";
  			$log                      = self::$buffer;
  		} else {
  			$flag = FILE_APPEND;
  		}
  		return file_put_contents( $file, $log . "\n", $flag );
  	} else {
  		Notices::set( 'Log file is not writable: ' . $file, 'notice' );
  	}
  }

  /**
   * Output debugging information
   *
   * @param  mixed  $content Things to be debugged.
   * @param  string $meta Optional description.
   * @return string the HTML formatted debugging output.
   */
  public static function debug( $content, $meta = null ) {

  	$out  = '<pre>';
  	$out .= $meta ? $meta . ': ' : '';
  	$out .= ( is_array( $content ) || is_object( $content ) ) ? print_r( (array) $content, true ) : $content;
  	$out .= '</pre>';

  	if ( Settings::get( 'debug_to_log' ) ) {
  		self::log( $content, $meta );
  	}

  	return $out;

  }

  /**
   * Basic error handling
   *
   * @param  string $message A description of what went wrong.
   * @param  string $severity Severity of the error.
   */
  public static function error( $message, $severity = 'warn' ) {
  	self::log( $message, 'error' );
  	Notices::set( $message, $severity );
  	if ( $severity === 'fatal' ) {
  		exit( $message );
  	}
  }

}
