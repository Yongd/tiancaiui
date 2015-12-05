<?php
/*
Author: Yongd
URL: http://tiancaiui.com/
*/




/*
1. lib/clean.php
  - head cleanup
	- post and images related cleaning
*/

require_once('lib/clean.php'); // do all the cleaning and enqueue here

/*
2. lib/enqueue-style.php
    - enqueue Foundation and Reverie CSS
*/
require_once('lib/enqueue-style.php');

/*
3. lib/foundation.php
	- add pagination
*/
require_once('lib/foundation.php'); // load Foundation specific functions like top-bar
/*
4. lib/nav.php
	- custom walker for top-bar and related
*/
require_once('lib/nav.php'); // filter default wordpress menu classes and clean wp_nav_menu markup
/*
5. lib/presstrends.php
    - add PressTrends, tracks how many people are using Reverie
*/
require_once('lib/presstrends.php'); // load PressTrends to track the usage of Reverie across the web, comment this line if you don't want to be tracked



// create widget areas: sidebar
$sidebars = array('Sidebar');
foreach ($sidebars as $sidebar) {
    register_sidebar(array('name'=> $sidebar,
    	'id' => 'Sidebar',
        'before_widget' => '<article id="%1$s" class="panel widget %2$s">',
        'after_widget' => '</article>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
}

// return entry meta information for posts, used by multiple loops, you can override this function by defining them first in your child theme's functions.php file
if ( ! function_exists( 'reverie_entry_meta' ) ) {
    function reverie_entry_meta() {
        echo '<span class="byline author">'. __('Written by', 'reverie') .' <a href="'. get_author_posts_url(get_the_author_meta('ID')) .'" rel="author" class="fn">'. get_the_author() .', </a></span>';
        echo '<time class="updated" datetime="'. get_the_time('c') .'" pubdate>'. get_the_time('F jS, Y') .'</time>';
    }
};

/*case-show*/
function get_project_tags( $tags, $type ){
    if( $type==1 ) {//作品分类展示
        for($i=1;$i<count($tags);$i++){
            $output .= ($i==count($tags)-1) ? $tags[$i]->name : $tags[$i]->name.' / ';
        }
    }else{
        $output = $tags[0]->name;
    }
    return $output;
}

/*case-info*/
function get_project_picture( $picture, $title ){
    $count = count($picture);
    if($count>1){
        $output = '<div class="mfp_gallery">';
        for($i=0;$i<$count;$i++){
            $output .= '<div class="pic"><a href="'.$picture[$i].'" class="mfp_popup_gal" title="'.$title.'"><img src="'.$picture[$i].'" alt="'.$title.'"/><span class="img_overlay"><span class="hover_icon fa fa-search"></span></span></a></div>';
        }
        $output .= '</div>';
    }else{
        $output = '<div class="pic"><a href="'.$picture[0].'" class="mfp_popup" title="'.$title.'"><img src="'.$picture[0].'"  alt="'.$title.'"/><span class="img_overlay"><span class="hover_icon fa fa-search"></span></span></a></div>';
    }
    return $output;
}
function get_project_provided( $provided ){
    for($i=0;$i<count($provided);$i++){
        $output .= '<li><span><i class="fa fa-check"></i></span>'.$provided[$i].'</li>';
    }
    return $output;
}

//get post first image
function catch_that_image() {
    global $post, $posts;
    $first_img = '';
    ob_start();
    ob_end_clean();
    $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
    $first_img = $matches [1] [0];
    return $first_img;
}

//employee info
add_filter( 'user_contactmethods', 'employee' );
function employee( $contactmethods ) {
    $contactmethods['position'] = '职位';
    $contactmethods['tel'] = '电话';
    $contactmethods['picture'] = '头像';
    $contactmethods['qq'] = 'QQ';
    $contactmethods['weibo'] = '新浪微博';
    $contactmethods['twitter'] = 'Twitter';
    $contactmethods['facebook'] = 'Facebook';
    unset( $contactmethods['yim'] );
    unset( $contactmethods['aim'] );
    unset( $contactmethods['jabber'] );
    return $contactmethods;
}
//remove emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

//remove include jquery
function my_enqueue_scripts() {
    wp_deregister_script('jquery');
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts', 1 );

//remove admin panel
function my_function_admin_bar(){
    return false;
}
add_filter( 'show_admin_bar' , 'my_function_admin_bar');





?>
