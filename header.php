<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf8" />
    <meta name="viewport" content="width=device-width" />
    <?php include('seo.php'); ?>
    <link rel="shortcut icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
    <?php wp_head(); ?>
</head>
<body <?php body_class('antialiased'); ?>>
    <div id="tc_page_preloader">
		<span class="tc_preloader_icon"></span>
	</div>
<header class="contain-to-grid">
    <!-- Starting the Top-Bar -->
	<nav class="top-bar" data-topbar>
	    <ul class="title-area">
	        <li class="name">
	        	<h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="天彩" rel="home"></a></h1>
	        </li>
	        <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
	    </ul>
	    <section class="top-bar-section">
	    <?php
	        wp_nav_menu( array(
	            'theme_location' => 'primary',
	            'container' => false,
	            'depth' => 0,
	            'items_wrap' => '<ul class="left">%3$s</ul>',
	            'fallback_cb' => 'reverie_menu_fallback', // workaround to show a message to set up a menu
	            'walker' => new reverie_walker( array(
	                'in_top_bar' => true,
	                'item_type' => 'li',
	                'menu_type' => 'main-menu'
	            ) ),
	        ) );
	    ?>
	    <?php
	    	// Uncomment the following to enable the right menu (additional menu)
			
	    	/*
	        wp_nav_menu( array(
	            'theme_location' => 'additional',
	            'container' => false,
	            'depth' => 0,
	            'items_wrap' => '<ul class="right">%3$s</ul>',
	            'walker' => new reverie_walker( array(
	                'in_top_bar' => true,
	                'item_type' => 'li',
	                'menu_type' => 'main-menu'
	            ) ),
	        ) );
	        */
	    ?>
	    </section>
	</nav>
	<!-- End of Top-Bar -->
</header>

<!-- Start the main container -->
<div class="container" role="document">