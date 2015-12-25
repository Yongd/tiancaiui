    <div class="full-width-box case">
		<div class="row">
			<div class="large-12 columns wow fadeInDown animated" data-wow-delay="<?php echo $delay;?>s">
				<div class="case-title text-center" style="display:none;">
					<h3>最近作品</h3>
				</div>
				<h2 class="case-title text-center">
					<span>LATEST FROM
						<strong>OUR LOVELY WORK</strong>
					</span>
					<p>近期作品展示</p>
				</h2>
				<div class="case-title-star">
					<i class="fa fa-star fa-lg"></i>
				</div>
				<div class="portfolio_inline_filter">
					<ul id="filter" class="grid_filter_inline text-center" data-option-key="filter">
						<li><div <?php if ($slug == 'caseshow' || $slug=='' ) echo 'class="current_portfolio_item"';?> data-option-value="*">所有</div></li>
						<li><div <?php if ($slug == 'website') echo 'class="current_portfolio_item"';?> data-option-value=".website">网站建设</div></li>
						<li><div <?php if ($slug == 'creative') echo 'class="current_portfolio_item"';?> data-option-value=".creative">创意</div></li>
						<li><div <?php if ($slug == 'theme') echo 'class="current_portfolio_item"';?> data-option-value=".theme">WP主题</div></li>
						<li><div <?php if ($slug == 'template') echo 'class="current_portfolio_item"';?> data-option-value=".template">店铺定制</div></li>
						<li><div <?php if ($slug == 'poster') echo 'class="current_portfolio_item"';?> data-option-value=".poster">海报设计</div></li>
						<li><div <?php if ($slug == 'detail') echo 'class="current_portfolio_item"';?> data-option-value=".detail">详情设计</div></li>
						<li><div <?php if ($slug == 'graphic') echo 'class="current_portfolio_item"';?> data-option-value=".graphic">平面设计</div></li>
					</ul>
				</div>
			</div>
			<div class="large-12 columns wow fadeInUp animated" data-wow-delay="<?php echo $delay;?>s">
				<div id="caseshow" class="grid_holder animated_items no_spacing" style="position: relative; height: 799px;">
                    <?php query_posts('cat=3&showposts='.$number); ?>
					<?php while (have_posts()) : the_post(); ?>
						<div class="col span_1_of_3 isotope_element <?php echo get_post_meta($post->ID, 'project_category', true); ?>" style="position: absolute;">
							<a href="<?php the_permalink(); $count++; ?>">
							  <div class="portfolio_animator_class">
								<div class="pic_info">
									<div class="pic img_hover_effect">
										<img width="600" height="380" src="<?php echo get_post_meta($post->ID, 'project_thumbnail', true); ?>" alt="<?php the_title(); ?>">
									</div>
									<div class="info_overlay">
										<div class="info_overlay_padding">
											<div class="info_desc">
												<span class="portfolio_icon fa fa-<?php  echo get_project_tags( get_post_meta($post->ID, 'case_tags', true), 2 ) ; ?> fa-lg"></span>
												<h3><?php the_title(); ?></h3>
                                                <p><?php echo get_project_tags( get_post_meta($post->ID, 'case_tags', true), 1 ) ; ?></p>
											</div>
										</div>
									</div>
								</div>
							  </div>
							</a>
						</div>
					<?php endwhile; wp_reset_query(); ?>
				</div>
				<div class="push-top-40 text-center">
					<a href="/category/caseshow" class="button radius morecase" target="_self"><span>所有作品</span><i class="fa fa-angle-right"></i> </a>
				</div>
            </div>
		</div>
	</div>