<?php get_header(); ?>
<div id="crumb" class="full crumb wow fadeInDown animated">
	<div class="row">
		<div class="medium-5 columns">
			<h1><?php echo get_search_query(); ?> <span style="font-size:14px;">的搜索结果</span></h1>
		</div>
  		<div class="medium-7 columns">
  			<ul class="breadcrumbs text-right">
			  <li><a href="#">首页</a></li>
			  <li class="unavailable"><a href="#">搜索</a></li>
			  <li class="current"><?php echo get_search_query(); ?></li>
			</ul>
  		</div>
	</div>
</div>
<div class="row post-content">
	<div class="small-12 large-9 columns wow fadeInLeft animated" id="content" role="main">
    	<?php if ( have_posts() ) : ?>
	        <?php /* Start the Loop */ ?>
            <?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
		    <?php endwhile; ?>
		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
	    <?php endif; // end have_posts() check ?>

	<?php /* Display navigation to next/previous pages when applicable */ ?>
	<?php if ( function_exists('reverie_pagination') ) { reverie_pagination(); } else if ( is_paged() ) { ?>
		<nav id="post-nav">
			<div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'reverie' ) ); ?></div>
			<div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'reverie' ) ); ?></div>
		</nav>
	<?php } ?>
    </div>
	<?php get_sidebar(); ?>
		
<?php get_footer(); ?>