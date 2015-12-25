<?php get_header(); ?>
<div class="full crumb wow fadeInDown animated">
	<div class="row">
		<div class="medium-5 columns">
			<h1><?php the_title() ?></h1>
		</div>
  		<div class="medium-7 columns">
  			<ul class="breadcrumbs text-right">
			  <li><a href="#">首页</a></li>
			  <li><?php the_category(' '); ?></li>
			  <li class="current"><?php the_title(); ?></li>
			</ul>
  		</div>
	</div>
</div>
<div class="row case-info">
<!-- Row for main content area -->
	<?php while (have_posts()) : the_post(); ?>
		<div class="small-8 columns">
			<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
				<header>
					<h1 class="entry-title"><?php the_title(); ?></h1>
				</header>
				<div class="entry-content">
					<?php echo get_project_picture( get_post_meta($post->ID, 'project_picture', false), get_the_title($post->ID) ) ;?>
				</div>
			</article>
		</div>
		<div class="small-4 columns">
			<div id="project" class="project">
				<div class="project-description" >
					<h3>项目介绍</h3>
					<h6>PROJECT DESCRIPTION</h6>
					<p>
						<?php echo get_post_meta($post->ID, 'project_description', true) ;?>
					</p>
				</div>
				<div class="project-provided">
					<h3>服务说明</h3>
					<h6>WHAT OUR TEAM PROVIDED</h6>
					<ul>
						<?php echo get_project_provided( get_post_meta($post->ID, 'project_provided', false) ) ;?>
					</ul>
				</div>
				<?php $url = get_post_meta($post->ID, 'project_url', true) ; if( $url ) { ?>
					<a href="<?php echo $url; ?>" class="button-go tiny radius" target="_blank" rel="nofollow"><span>浏览网站</span><i class="fa fa-external-link"></i> </a>
				<?php } ?>
			</div>
		</div>
	<?php endwhile; // End the loop ?>
</div>		
<?php get_footer(); ?>