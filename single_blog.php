<?php get_header(); ?>
<div class="full crumb">
	<div class="row">
		<div class="medium-5 columns">
			<h1><?php the_title() ?></h1>
		</div>
  		<div class="medium-7 columns">
  			<ul class="breadcrumbs text-right">
			  <li><a href="#">首页b</a></li>
			  <li><?php the_category(' '); ?></li>
			  <li class="current"><?php the_title(); ?></li>
			</ul>
  		</div>
	</div>
</div>
<div class="row">
    <div class="small-12 large-8 columns" id="content" role="main">
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                <p class="post_meta">
                     <span class="calendar_date"><i class="fa fa-calendar-check-o"></i><?php the_time('Y-m-d'); ?></span>
                     <span class="author"><i class="fa fa-user"></i>By <?php the_author_link(); ?></span>
                     <span class="comments"><i class="fa fa-commenting-o"></i><?php comments_popup_link('No comments yet', '1 Comments','% Comments'); ?></span>
                     <span class="tags"><i class="fa fa-tag"></i><?php the_tags(''); ?></span>'
                </p>
            </article>
            <div class="entry-author panel">
                <div class="row">
                    <div class="large-3 columns">
                        <?php echo get_avatar( get_the_author_meta('user_email'), 95 ); ?>
                    </div>
                    <div class="large-9 columns">
                        <h4><?php the_author_posts_link(); ?></h4>
                        <p class="cover-description"><?php the_author_meta('description'); ?></p>
                    </div>
                </div>
            </div>
            <?php comments_template(); ?>
        <?php endwhile; // End the loop ?>

	</div>
	<?php get_sidebar(); ?>
</div>		
<?php get_footer(); ?>