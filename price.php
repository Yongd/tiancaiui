<?php
/*
Template Name: links
*/
?>
<?php get_header() ?>
<?php the_post() ?>
<div class="container">
	<div class="row">
		<div class="col-xs-12 col-md-8">
			<div class="boxed push-down-45"> 
				<div class="row"> 
					<div class="col-xs-10  col-xs-offset-1 post-content"> 
						<?php the_content() ?>		
						<div class="blog-links">
							<div class="links-box">
								<ul class="fa-ul">
									<?php get_links('-1', '<li><i class="fa-li fa fa-link"></i>', '</li>', '', 0, 'name', 0, 0, -1, 0); ?>
								</ul>
						</div>
						</div><!-- blog-links -->
					</div> 
			   	</div> 
			   	<div class="row">
			   		<div class="col-xs-10 col-xs-offset-1">
						<div class="comments  push-down-45">
							<h3>申请友链</h3>
							<a name="comments" id="comments"></a>
							<a name="comments"></a>
							<?php comments_template() ?>
						</div>	
			   		</div>
			   	</div>	
			</div>
		</div><!--END FOR LEFT-->
		<div class="col-xs-12 col-md-4">
			<?php get_sidebar() ?>
		</div><!--END FOR RIGHT-->
	</div><!--END FOR ROW-->
</div><!--END FOR CONTAINER-->
<?php get_footer() ?>