</div><!-- Container End -->
<footer class="full-width-box footer" role="contentinfo">
	<div class="row">
        <div class="large-3 columns">
            <div class="intro">
                <div class="f-logo">
                </div>
                <p>
                     我们是一个专注于网站和电商设计与开发的团队,自08年成立以来,已服务近万名用户,积累了丰富的开发经验。我们秉承诚实守信的理念,本着用户至上,体验为王的原则,进行产品与服务的创新。我们愿为您提供优质的产品与服务,为您解决在互联网时代中遇到的难题。
                </p>
            </div>
        </div>
        <div class="large-3 columns">
            <h3>Footer Menu</h3>
            <span>常用导航</span>
            <div class="menu-footer-menu-container">
                <ul>
                    <li><a href="">网站首页</a></li>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">我们的服务</a></li>
                    <li><a href="">案例展示</a></li>
                    <li><a href="http://blueowlcreative.com/wp/fortuna/blog/">博客文章</a></li>
                    <li><a href="http://blueowlcreative.com/wp/fortuna/contact/">联系我们</a></li>
                </ul>
            </div>
        </div>
        <div class="large-3 columns">
            <h3>Latest Posts</h3>
            <span>最新文章</span>
            <?php query_posts('cat=33&showposts=2'); ?>
                <?php while (have_posts()) : the_post(); ?>
                    <div class="latest-posts">
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><img src="<?php echo catch_that_image(); ?>"></a>
                        <p class="latest-posts-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </p>
                        <p class="date">
                            <?php echo date('F',get_the_time('U')); the_time(' d, Y'); ?>
                        </p>
                    </div>
            <?php endwhile; wp_reset_query(); ?>
        </div>
        <div class="large-3 columns">
            <h3>Contact Info</h3>
            <span>联系我们</span>
            <ul class="contact">
                <li><i class="fa fa-phone"></i> + 170 930 51880</li>
                <li><i class="fa fa-envelope"></i> support@tiancaiui.com</li>
                <li><i class="fa fa-map-marker"></i>山西省太原市尖草坪区青年城1-2-1003</li>
            </ul>
        </div>
	</div>
	<div class="row">
		<div class="large-12 columns">
			<p class="copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('Made with Love in','reverie'); ?> <a href="http://themefortress.com/reverie/" rel="nofollow" title="Reverie Framework">Reverie</a>. 冀ICP备15002125-2号</p>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>