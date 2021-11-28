<?php
/**
 * Class SampleTest
 *
 * @package Murmurations_Node
 */

/**
 * Sample test case.
 */
class SampleTest extends WP_UnitTestCase {

	/**
	 * A single example test.
	 */
	public function test_sample() {
		// Replace this with some actual testing code.
		$this->assertTrue( true );
	}

  public function testCanSetAndGetSetting(){
    $setting_name = "test_setting";
    $setting_value = "Some setting value";
    Murmurations\Node\Settings::set( $setting_name, $setting_value );
    $this->assertTrue( Murmurations\Node\Settings::get( $setting_name ) === $setting_value );
  }
}
