<?php

/**
 * Fired during plugin deactivation
**/

namespace Murmurations\Node;

function deactivate() {
    murmurations_index_node_delete( false );
    delete_option( 'murmurations-node_data' );
    delete_option( 'murmurations-node_id_prod' );
    delete_option( 'murmurations-node_id_test' );
    delete_transient( "murmurations-node_profile_prod" );
    delete_transient( "murmurations-node_profile_test" );
    // delete_transient( 'murmurations_location_' ); delete all location prefixed transients
    error_log( 'deactivate: ' . print_r( get_option( 'murmurations-node_data' ), true ) );
    error_log( 'deactivate: ' .  print_r( get_option( 'murmurations-node_id_prod' ), true ) );
    error_log( 'deactivate: ' . print_r( get_option( 'murmurations-node_id_test' ), true ) );

    foreach ( wp_load_alloptions() as $option => $value ) {
        if ( strpos( $option, 'murmurations-node_' ) === 0 ) {
            error_log( 'deactivate: node: ' . print_r( $option, true ) );
            delete_option( $option );
        }
        if ( strpos( $option, 'murmurations_location_' ) === 0 ) {
            error_log( 'deactivate: location: ' . print_r( $option, true ) );
            delete_option( $option );
        }
    }
}
