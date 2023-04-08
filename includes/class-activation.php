<?php

/**
 * Fired during plugin activation
**/

namespace Murmurations\Node;

function activate() {

    $data = array();

    $wp_data['name'] = get_bloginfo('title');
    $wp_data['primary_url'] = get_site_url();
    $wp_data['description'] = get_bloginfo('description');
    $wp_data['rss'] = get_bloginfo('rss2_url');

    $wp_data['image'] = get_site_logo();
    $wp_data['tags'] = get_site_tags();

    error_log( 'activation: $wp_data: ' . print_r( $wp_data, true ) );
    // Check if there are already values in the DB
    $db_data = get_option( 'murmurations-node_data' );
    error_log( 'activation: $db_data: ' . print_r( $db_data, true ) );
    if ( is_array( $db_data ) ) {
        foreach ( $wp_data as $key => $value ) {
            if ( !isset( $db_data[$key] ) ) {
                $db_data[$key] = $value;
            }
        }
        update_option( 'murmurations-node_data', $db_data );
    } else {
        add_option( 'murmurations-node_data' ,$wp_data);
    }
}

function get_site_tags() {
    $tags = get_tags( array( 'orderby' => 'count','order' => 'DESC','number' => 7 ) );
    $tags_a = array();
    foreach ( $tags as $tag ) {
        $tags_a[] = $tag->name;
    }
    return join( ', ', $tags_a );
}

function get_site_logo() {
    return get_site_icon_url() ?  get_site_icon_url() : 
        ( get_theme_mod( 'custom_logo' ) ? 
            wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' )[0]
            : '' );
}

