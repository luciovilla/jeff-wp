<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_theme_style' );
function enqueue_parent_theme_style() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}



add_action( 'wp_enqueue_scripts', 'custom_load_js' );
function custom_load_js() {
	wp_register_script( 'mt-scripts', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array('jquery','global'), MEANTHEMES_THEME_VER, true );



	// load on all pages
    wp_enqueue_script('global');
    wp_enqueue_script('mt-scripts');

}
?>
