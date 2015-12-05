<?php
/*********************
Enqueue the proper CSS
*********************/
if( ! function_exists( 'tc_enqueue_style' ) ) {
	function tc_enqueue_style()
	{
		// foundation stylesheet
		wp_register_style( 'foundation-stylesheet', '//cdn.bootcss.com/foundation/5.5.3/css/foundation.min.css', array(), '' );
        // Register the main style
		wp_register_style( 'stylesheet', get_stylesheet_directory_uri() . '/css/style.css', array(), '', 'all' );
		// FontAwesome
		wp_register_style( 'font-awesome', '//cdn.bootcss.com/font-awesome/4.4.0/css/font-awesome.min.css', array(), '', 'all' );
		// Owl-carousel
		wp_register_style( 'owl-carousel', get_stylesheet_directory_uri() . '/css/owl.carousel.min.css', array(), '', 'all' );
		// Animate
		wp_register_style( 'animate', '//cdn.bootcss.com/animate.css/3.4.0/animate.min.css', array(), '', 'all' );
		// Magnific Pop
		wp_register_style( 'magnific-popup', get_stylesheet_directory_uri() . '/css/magnific-popup.min.css', array(), '', 'all' );
		
		wp_enqueue_style( 'foundation-stylesheet' );
		wp_enqueue_style( 'stylesheet' );
		wp_enqueue_style( 'font-awesome' );
		wp_enqueue_style( 'owl-carousel' );
		wp_enqueue_style( 'animate' );
		if( is_singular() ) wp_enqueue_style( 'magnific-popup' );
		
	}
}
add_action( 'wp_enqueue_scripts', 'tc_enqueue_style' );
?>
