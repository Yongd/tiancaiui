<?php get_header(); ?>
<div class="full crumb wow fadeInDown animated">
	<div class="row">
		<div class="medium-5 columns">
			<h1><?php the_title() ?></h1>
		</div>
  		<div class="medium-7 columns">
  			<ul class="breadcrumbs text-right">
			  <li><a href="/">首页</a></li>
			  <li><?php the_category(' '); ?></li>
			  <li class="current"><?php the_title(); ?></li>
			</ul>
  		</div>
	</div>
</div>
<div class="row post-content">
    <div class="small-12 large-9 columns wow fadeInLeft animated" id="content" role="main">
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class() ?> id="post-<?php the_ID(); ?>">
                <p class="post_meta">
                     <span class="calendar_date"><i class="fa fa-calendar-check-o"></i><?php the_time('Y-m-d'); ?></span>
                     <span class="author"><i class="fa fa-user"></i>By <?php the_author_posts_link(); ?></span>
                     <span class="comments"><i class="fa fa-commenting-o"></i><?php comments_popup_link('No comments', '1 Comments','% Comments'); ?></span>
                     <span class="tags"><i class="fa fa-tag"></i><?php the_tags(''); ?></span>
                </p>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
            <div class="entry-author panel">
                <div class="row">
                    <div class="large-2 columns">
                        <?php echo get_avatar( get_the_author_meta('user_email'), 95 ); ?>
                    </div>
                    <div class="large-9 pull-1 columns">
                        <h4><?php the_author_posts_link(); ?></h4>
                        <p class="cover-description"><?php the_author_meta('description'); ?></p>
                    </div>
                </div>
            </div>
            <div class="comments push-top-40 push-bottom-80">
                <h3>参与评论</h3>
                <?php comments_template(); ?>
            </div>
        <?php endwhile; ?>
    </div>
	<?php get_sidebar(); ?>
</div>		
<?php get_footer(); ?>