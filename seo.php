<?php if ( is_home() ) { ?><title><?php bloginfo('name'); ?> | <?php bloginfo('description'); ?></title><?php } ?>
<?php if ( is_search() ) { ?><title>搜索结果 | <?php bloginfo('name'); ?></title><?php } ?>
<?php if ( is_single() ) { ?><title><?php echo trim(wp_title('',0)); ?> | <?php bloginfo('name'); ?></title><?php } ?>
<?php if ( is_page() ) { ?><title><?php echo trim(wp_title('',0)); ?> | <?php bloginfo('name'); ?></title><?php } ?>
<?php if ( is_category() ) { ?><title><?php single_cat_title(); ?> | <?php bloginfo('name'); ?></title><?php } ?>
<?php if ( is_month() ) { ?><title><?php the_time('F'); ?> | <?php bloginfo('name'); ?></title><?php } ?>
<?php if ( is_author() ) { ?><title>作者专栏 | <?php bloginfo('name'); ?></title><?php } ?>
<?php if (function_exists('is_tag')) { if ( is_tag() ) { ?><title><?php  single_tag_title("", true); ?> | <?php bloginfo('name'); ?></title><?php } ?> <?php } ?>
<?php
if (!function_exists('utf8Substr')) {
function utf8Substr($str, $from, $len)
{
return preg_replace('#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,'.$from.'}'.
'((?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,'.$len.'}).*#s',
'$1',$str);
}
}
if ( is_single() ){
	if ($post->post_excerpt) {
		$description  = $post->post_excerpt;
		} else {
	if(preg_match('/<p>(.*)<\/p>/iU',trim(strip_tags($post->post_content,"<p>")),$result)){
		$post_content = $result['1'];
		} else {
	$post_content_r = explode("\n",trim(strip_tags($post->post_content)));
	$post_content = $post_content_r['0'];
	}
	$description = utf8Substr($post_content,0,220);
	} 
	$keywords = "";     
	$tags = wp_get_post_tags($post->ID);
	foreach ($tags as $tag ) {
		$keywords = $keywords . $tag->name . ",";
	}
}
?>
<?php echo "\n"; ?>
<?php if ( is_single() ) { ?>
    <meta name="description" content="<?php echo trim($description); ?>" />
    <meta name="keywords" content="<?php echo rtrim($keywords,','); ?>" />
<?php } ?>
<?php if ( is_home() or is_page() or is_category() or is_tag()  or is_archive() ) { ?>
    <meta name="description" content="天彩科技提供专业的高端UI、网站设计及开发服务，包括企业网站、互联产品网站、电商网站、微信公众号、活动专题网站、UI设计、APP设计、社交及应用类网站等。" />
    <meta name="keywords" content="天彩,UI设计，交互设计，网站设计, 高端网站设计, 网站优化, 网站建设, 太原网站建设, UI设计, APP界面设计, 电子商务网站设计" />
<?php } ?>