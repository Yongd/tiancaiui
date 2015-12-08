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
        echo '<span class="calendar_date"><i class="fa fa-calendar-check-o"></i>'.get_the_time('Y-m-d').'</span>';
        echo '<span class="author"><i class="fa fa-user"></i>By '.get_the_author_link().' ?></span>';
        echo '<span class="comments"><i class="fa fa-commenting-o"></i>'.comments_popup_link('No comments yet', '1 Comments','% Comments').'</span>';
        echo '<span class="tags"><i class="fa fa-tag"></i>'.the_tags('').'?></span>';
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
//caseinfo cate nav
function get_caseinfo_category($cat)
{
    $html='';
    $child_cate_id = get_cat_ID($cat);
    $parent_cate_id = get_category($child_cate_id)->category_parent;
    if($parent_cate_id!=0){
        $html = '<li><a href="'.get_category_link($parent_cate_id).'">作品展示</a></li><li data-option-value=".'.get_category($child_cate_id)->slug.'" class="current child-cate">'.$cat.'</li>';
    }else{
        $html = '<li class="current">作品展示</li>';
    }
    return $html;
}
function get_slug($cat){
    return get_category(get_cat_ID($cat))->slug;
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
//add linkmanager
add_filter('pre_option_link_manager_enabled','__return_true');
//speed avatar
function fa_cache_avatar($avatar, $id_or_email, $size, $default, $alt)
{
    $avatar = str_replace(array("www.gravatar.com", "0.gravatar.com", "1.gravatar.com", "2.gravatar.com"), "cn.gravatar.com", $avatar);
    $tmp = strpos($avatar, 'http');
    $url = get_avatar_url( $id_or_email, $size ) ;
    $url = str_replace(array("www.gravatar.com", "0.gravatar.com", "1.gravatar.com", "2.gravatar.com"), "cn.gravatar.com", $url);
    $avatar2x = get_avatar_url( $id_or_email, ( $size * 2 ) ) ;
    $avatar2x = str_replace(array("www.gravatar.com", "0.gravatar.com", "1.gravatar.com", "2.gravatar.com"), "cn.gravatar.com", $avatar2x);
    $g = substr($avatar, $tmp, strpos($avatar, "'", $tmp) - $tmp);
    $tmp = strpos($g, 'avatar/') + 7;
    $f = substr($g, $tmp, strpos($g, "?", $tmp) - $tmp);
    $w = home_url();
    $e = ABSPATH .'avatar/'. $size . '*'. $f .'.jpg';
    $e2x = ABSPATH .'avatar/'. ( $size * 2 ) . '*'. $f .'.jpg';
    $t = 1209600;
    if ( (!is_file($e) || (time() - filemtime($e)) > $t) && (!is_file($e2x) || (time() - filemtime($e2x)) > $t ) ) {
        copy(htmlspecialchars_decode($g), $e);
        copy(htmlspecialchars_decode($avatar2x), $e2x);
    } else { $avatar = $w.'/avatar/'. $size . '*'.$f.'.jpg';
        $avatar2x = $w.'/avatar/'. ( $size * 2) . '*'.$f.'.jpg';
        if (filesize($e) < 1000) copy($w.'/avatar/default.jpg', $e);
        if (filesize($e2x) < 1000) copy($w.'/avatar/default.jpg', $e2x);
        $avatar = "<img alt='{$alt}' src='{$avatar}' srcset='{$avatar2x}' class='avatar avatar-{$size} photo' height='{$size}' width='{$size}' />";
    }
    return $avatar;
}
add_filter('get_avatar', 'fa_cache_avatar',1,5);
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
