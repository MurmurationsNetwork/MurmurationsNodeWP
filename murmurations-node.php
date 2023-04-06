<?php
/**
 * Plugin Name:     Murmurations Node
 * Plugin URI:      https://github.com/MurmurationsNetwork/MurmurationsNodeWP
 * Description:     Add your Profile to the Murmurations decentralised data sharing network.
 * Author:          Murmurations Network
 * Author URI:      https://murmurations.network
 * Text Domain:     murmurations-node
 * Domain Path:     /languages
 * Version:         0.4.0-alpha-1
 *
 * @package         Murmurations_Node
 */

namespace Murmurations\Node;

include "includes/autoload.php";

function activate_murmurations() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-activation.php';
	__NAMESPACE__ . activate();
}

function deactivate_murmurations() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-deactivation.php';
	__NAMESPACE__ . deactivate();
}

register_activation_hook( __FILE__, __NAMESPACE__ . '\activate_murmurations' );
register_deactivation_hook( __FILE__, __NAMESPACE__ . '\deactivate_murmurations' );

define( 'MURMNODE_ROOT_PATH', plugin_dir_path( __FILE__ ) );
define( 'MURMNODE_ROOT_URL', plugin_dir_url( __FILE__ ) );

$murmurations_data = get_option( 'murmurations-node_data', true );
if ( isset( $murmurations_data['env'] ) && true === $murmurations_data['env'] ) {
    \defined( 'MURMURATIONS_INDEX' ) || \define( 'MURMURATIONS_INDEX', 'https://test-index.murmurations.network/v2' );
    \defined( 'MURMURATIONS_LIBRARY' ) || \define( 'MURMURATIONS_LIBRARY', 'https://test-library.murmurations.network/v2/' );
} else {
  \defined( 'MURMURATIONS_INDEX' ) || \define( 'MURMURATIONS_INDEX', 'https://index.murmurations.network/v2' );
  \defined( 'MURMURATIONS_LIBRARY' ) || \define( 'MURMURATIONS_LIBRARY', 'https://library.murmurations.network/v2/' );
}

function llog( $content, $meta = null ){
  return Logging::log( $content, $meta );
}

/**
 * @param $links
 *
 * @return array
 */
function murmurations_settings_link( $links ) {
  $links[] = '<a href="' . admin_url( 'options-general.php?page=murmurations-node' ) . '">' . __( 'Settings', 'murmurations-node' ) . '</a>';
  return $links;
}
\add_filter( 'plugin_action_links_'.plugin_basename( __FILE__ ), __NAMESPACE__ . '\murmurations_settings_link' );

/**
 * register_plugin_settings_page
 *
 * @return void
 */
function register_plugin_settings_page() {
	$page_hook_suffix = \add_options_page(
		__( 'Murmurations', 'murmurations-node' ),
		__( 'Murmurations', 'murmurations-node' ),
		'manage_options',
		'murmurations-node',
		__NAMESPACE__ . '\render_settings_page',
	);
}
\add_action( 'admin_menu', __NAMESPACE__ . '\register_plugin_settings_page' );

/**
 * Renders the settings page
 */
function render_settings_page() {
	?>
	<div id="murmurations-node">
		<?php esc_html_e( 'Requires JavaScript', 'murmurations-node' ); ?>
	</div>
	<?php
}

/**
 * enqueue_settings_script
 *
 * Enqueue scripts for the settings page
 * 
 * @param  mixed $hook
 * @return void
 */
function enqueue_settings_script( $hook ) {
	$asset_file_page = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	if ( file_exists( $asset_file_page ) && 'settings_page_murmurations-node' === $hook ) {
		$assets = require $asset_file_page;
		wp_enqueue_media();
		wp_register_script(
			'murmurations-node',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
		
		wp_enqueue_script( 'murmurations-node' );
		foreach ( $assets['dependencies'] as $style ) {
			wp_enqueue_style( $style );
		}

		$dir = __DIR__;
		$admin_css = 'build/index.css';
		wp_enqueue_style(
			'murmurations-node',
			plugins_url( $admin_css, __FILE__ ),
			['wp-components'],
			filemtime( "$dir/$admin_css" )
		);
	}
};
add_action( 'admin_enqueue_scripts',  __NAMESPACE__ . '\enqueue_settings_script' );

/**
 * murmurations_plugin_settings
 *
 * Register Settings API
 * Register REST routes
 * 
 * @return void
 */
function murmurations_plugin_settings() {
	register_setting(
		'murmurations-node',//murmurations group
		'murmurations-node_data',//murmurations-node
		array(
			'type'         => 'object',
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'name' => array(
							'type' => 'string',
						),
						'primary_url' => array(
							'type' => 'string',
						),
						'urls' => array(
							'type' => 'array',
							'properties' => array(
								'type' => 'object',
								'properties' => array(
									'name' => 'string',
									'url' => 'string',
								)
							)
						),
						'description' => array(
							'type' => 'string',
						),
						'mission' => array(
							'type' => 'string',
						),
						'location' => array(
							'type' => 'string',
						),
						'locality' => array(
							'type' => 'string',
						),
						'region' => array(
							'type' => 'string',
						),
						'country_name' => array(
							'type' => 'string',
						),
						'geolocation' => array(
							'type' => 'object',
							'properties' => array(
								'lat' => array(
									'type' => 'string',
								),
								'lon' => array(
									'type' => 'string',
								),
							),
						),
						'image' => array(
						  'type' => 'string',
						),
						'image_id' => array(
						  'type' => 'string',
						),
						'tags' => array(
						  'type' => 'string',
						),
						'rss' => array(
						  'type' => 'string',
						),
						'env' => array(
						  'type' => 'boolean',
						),
					),
				),
			),
		)
	);

	register_rest_route( 'murmurations/v2', '/profile', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\murmurations_profile_request',
		'permission_callback' => '__return_true'
	) );

  	register_rest_route( 'murmurations/v2', '/find/location', array(
		'methods' => 'POST',
		'callback' => __NAMESPACE__ . '\\location_lookup',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		}
	) );

	register_rest_route( 'murmurations/v2', '/index/validate', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\murmurations_index_validate',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		}
	) );
	
	register_rest_route( 'murmurations/v2', '/index/nodes_sync', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\murmurations_index_post_node_sync',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		}
	) );
	
	register_rest_route( 'murmurations/v2', '/index/nodes', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\murmurations_index_post_node',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		}
	) );
	
	register_rest_route( 'murmurations/v2', '/index/node_status', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\murmurations_index_node_status',
		'permission_callback' => function () {
			return current_user_can( 'manage_options' );
		}
	) );
}
add_action( 'rest_api_init', __NAMESPACE__ . '\murmurations_plugin_settings' );

/**
 * murmurations_profile_request
 * 
 * Displays the Murmurations profile, as indexed by murmurations
 * A Node is an entity (person, project, organisation, event or smart object) that has a Profile which is registered in the Murmurations Index.
 * 
 * @link https://docs.murmurations.network/about/common-terms.html#node
 *
 * @return WP_REST_Response
 */
function murmurations_profile_request(){
	error_log ( 'node_data: ' . print_r( get_option( 'murmurations-node_data' ), true ) );
	error_log ( 'node_id: ' . print_r( get_option( 'murmurations-node_id' ), true ) );
	if ( false === ( $node_id = get_option( 'murmurations-node_id' ) ) ) {
		return new \WP_Error( 'murmurations_no_saved_profile', __( 'No profile found', 'murmurations-node' ), array( 'status' => 404 ) );
	}

	//load murmurations settings
	if ( false === ( $data = get_transient( "murmurations_profile" ) ) ) {
    $murmurations_data = get_option( 'murmurations-node_data', true );
	$murmurations_data = array_filter( $murmurations_data ); // remove null data.
    $murmurations_data['tags'] = array_filter( array_map( 'trim', explode( ',', $murmurations_data['tags'] ) ) ) ?? [];
	$murmurations_data['geolocation']['lat'] = floatval( $murmurations_data['geolocation']['lat'] );
	$murmurations_data['geolocation']['lon'] = floatval( $murmurations_data['geolocation']['lon'] );

		unset(
			$murmurations_data['env'],
			$murmurations_data['location'],
			$murmurations_data['indexed'],
		);

		$header['linked_schemas'] = array('organizations_schema-v1.0.0');
		$data = array_merge( $header, $murmurations_data );
		set_transient( "murmurations_profile", $data, HOUR_IN_SECONDS );
	}
	return $data;
}

/**
 * location_lookup
 * 
 * Search for a location to get coordinates 
 * 
 * @link https://nominatim.openstreetmap.org/search
 *
 * @param  mixed $data
 * @return WP_REST_Response
 */
function location_lookup( $data ){
	$location = $data['location'];
	
	if ( false === ( $response = get_transient( "murmurations_location_request_$location" ) ) ) {
		$request_args = array(
			'timeout'     => 15,
			'redirection' => 3,
			'headers'     => array(
				'Content-Type' => 'application/json; charset=utf-8',
			),
		);

		$query = add_query_arg( array(
			'q'			=> $location,
			'format'	=> 'json',
		), 'https://nominatim.openstreetmap.org/search' );

		$response = wp_safe_remote_get( $query, $request_args );
		//TODO Error handling
		set_transient( "murmurations_location_request_$location", $response, HOUR_IN_SECONDS );
	}
	return rest_ensure_response( $response );
}

/**
 * murmurations_index_post_node
 * 
 * @link https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes
 *
 * @return WP_REST_Response
 */
function murmurations_index_post_node(){
	delete_transient( 'murmurations_profile' );

	$request_args = request_args();
	$query = MURMURATIONS_INDEX . '/nodes';
	
	$response = wp_safe_remote_post( $query, $request_args );
	
	//TODO Error handling
	if ( 200 === $response['response']['code'] ) {
		$reponse_message = json_decode ( $response['body'] );
		update_option('murmurations-node_id', $reponse_message->meta->message->data->node_id );
		$node_data = get_option( 'murmurations-node_data' );
		$node_data['indexed'] = $reponse_message->meta->message->data->node_id;
		update_option('murmurations-node_data', $node_data );
		return rest_ensure_response( $reponse_message );
	} else {
    	// error_log( print_r( $request_args, true ) ); 
    	// error_log( print_r( $response, true ) );
		$reponse_message = json_decode ( $response['body'] );
		update_option('murmurations-node_id', null );
	}
	
	return rest_ensure_response( $reponse_message );
}

/**
 * murmurations_index_post_node_sync
 * 
 * 
 * @link https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync
 *
 * @return WP_REST_Response
 */
function murmurations_index_post_node_sync (){
	delete_transient( 'murmurations_profile' );

	$request_args = request_args();
	$query = MURMURATIONS_INDEX . '/nodes-sync';
	
	$response = wp_safe_remote_post( $query, $request_args );
	
	//TODO Error handling
	if ( 200 === $response['response']['code'] ) {
		$reponse_message = json_decode ( $response['body'] );
		update_option('murmurations-node_id', $reponse_message->data->node_id );
	} else {
		// error_log( print_r( $request_args, true ) ); 
		// error_log( print_r( $response, true ) );
		$reponse_message = json_decode ( $response['body'] );
    	update_option('murmurations-node_id', null );
	}

	return rest_ensure_response( $reponse_message );
}

/**
 * murmurations_index_validate
 * 
  * @link https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_validate
 *
 * @return WP_REST_Response
 */
function murmurations_index_validate () {
	$request_args = request_args();
	$query = MURMURATIONS_INDEX . '/validate';
	
	$response = wp_safe_remote_post( $query, $request_args );

	//TODO Error handling
	if ( 200 === $response['response']['code'] ) {
		$reponse_message = json_decode ( $response['body'] );
		update_option('murmurations-node_id', $reponse_message );
	} else {
		// error_log( print_r( $request_args, true ) );  
    	// error_log( print_r( $response, true ) );
		update_option('murmurations-node_id', null );
	}

	return rest_ensure_response( $reponse_message );
}

/**
 * murmurations_index_node_status
 * 
 * @link https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/get_nodes__node_id_
 *
 * @return WP_REST_Response
 */
function murmurations_index_node_status () {
	$request_args = array(
		'timeout'    => 15,
		'headers'    => array(
			'Content-Type' => 'application/json',
			'accept' => 'application/json',
		),
	);
	$node_id = get_option( 'murmurations-node_id', true );
	if ( $node_id ) {
		error_log( 'node_id: ' . print_r( $node_id, true ) );
		$query = MURMURATIONS_INDEX . "/nodes/{$node_id}";
		
		$response = wp_safe_remote_get( $query, $request_args );
	
		//TODO Error handling
		if ( 200 === $response['response']['code'] ) {
			$reponse_message = json_decode ( $response['body'] );
		} else {
			$reponse_message = json_decode ( $response['body'] );
		}
		// error_log( 'req_args: ' . print_r( $request_args, true ) );  
		// error_log( 'response: ' . print_r( $response, true ) );
	} else {
		$reponse_message = __( 'Profile not indexed', 'murmurations-node' );
		error_log( print_r( $reponse_message, true ) );
	}
	return rest_ensure_response( $reponse_message );
}

/**
 * murmurations_index_node_delete
 * 
 * @link https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_
 *
 * @return WP_REST_Response
 */
function murmurations_index_node_delete( $rest = true ) {
	$node_id = get_option( 'murmurations-node_id' );

	$request_args = array(
		'timeout'    => 15,
   		'method' => 'DELETE',
		'headers'    => array(
			'accept' => 'application/json',
		),
	);
  	delete_option( 'murmurations-node_id' );
	$query = MURMURATIONS_INDEX . "/nodes/{$node_id}";
	
	$response = wp_remote_request( $query, $request_args );

	//TODO Error handling
	// error_log( print_r( $request_args, true ) );  
	// error_log( print_r( $response, true ) );
	$reponse_message = json_decode ( $response['body'] );

	if ( 200 === $response['response']['code'] ) {
		update_option('murmurations-node_id', $reponse_message );
		if ( $rest ) {
			return rest_ensure_response( $reponse_message->meta->message );
		} else {
			return true;
		}
	} else {
		if ( $rest ) {
			return rest_ensure_response( $reponse_message->meta->message );
		} else {
			return false;
		}
	}
}

function request_args() {
	$murmurations_data = get_option('murmurations-node_data', true);
	$json_data = json_encode( array(
		'linked_schemas'	=> array( 'organizations_schema-v1.0.0' ),
		'profile_url' 		=> get_rest_url( null, 'murmurations/v2/profile' ),
		'name'				=> $murmurations_data['name'],
		'primary_url'		=> site_url(),
		'latitude'			=> $murmurations_data['geolocation']['lat'], 
		'longitude'			=> $murmurations_data['geolocation']['lon'],
	));
	$request_args = array(
		'timeout'   		=> 15,
		'headers'    		=> array(
			'Content-Type'		=> 'application/json',
			'accept' 			=> 'application/json',
		),
		'body'     	 		=> $json_data,
	);
	return $request_args;
}
