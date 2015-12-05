	<div class="row blog-list push-top-70">
		<div class="column">
			<h3 class="dot-head wow fadeInDown animated" data-wow-delay="0.3s">
				<span>Latest Posts</span>
			</h3>
			<div class="posts-carousel-holder wow fadeInUp animated" data-wow-delay="0.3s">
				<div id="blog" class="owl-carousel owl-theme owl-loaded">
					<?php query_posts('cat=33&showposts=8'); ?>
					<?php while (have_posts()) : the_post(); ?>
						<div class="owl-item">
							<div class="post-item">
								<div class="pic img_hover_effect2">
									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><img src="<?php echo catch_that_image(); ?>">
									<div class="img_overlay"><span class="hover_icon fa fa-plus"></span></div>
									</a>
								</div>
								<div class="post-item-desc">
									<h4><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h4>
									<div class="post-date"><span class="fa fa-calendar"></span> &nbsp; <?php echo date('F',get_the_time('U')); the_time(' d, Y'); ?></div>
									<p><?php echo mb_strimwidth(strip_tags($post->post_content),0,82,'...'); ?></p>
									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="more-link">Read more</a>		
								</div>
							</div>
						</div>
					<?php endwhile; wp_reset_query(); ?>
				</div>
			</div>
		</div>	
	</div>
