<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @subpackage Reverie
 * @since Reverie 4.0
 */
?>

<div class="post_item section">
    <div class="pic">
        <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
            <img src="<?php echo catch_that_image(); ?>" alt="<?php the_title_attribute(); ?>">
            <div class="img_overlay"><span class="hover_icon fa fa-plus"></span></div>
        </a>
    </div>
    <div class="post_list_left">
        <div class="day"><?php the_time('d'); ?></div>
        <div class="month"><?php the_time('m'); ?></div>
    </div>
    <div class="post_list_right">
        <h3 class="post_title"><a href="<?php the_permalink() ?>" title="<?php the_title_attribute();?>"><?php the_title_attribute();?></a></h3>
        <p class="post_meta">
            <span class="author"><i class="fa fa-user"></i><?php the_author_posts_link(); ?></span>
            <span class="comments "><i class="fa fa-commenting-o"></i><?php comments_popup_link('No comments', '1 Comments','% Comments'); ?></span>
            <span class="tags"><i class="fa fa-tag"></i><?php the_tags(''); ?></span>
        </p>
        <div class="post_description clearfix">
            <?php the_content(''); ?>
            <p><a class="more-link flat" href="<?php the_permalink() ?>">Read more</a></p>
        </div>
    </div>
</div>