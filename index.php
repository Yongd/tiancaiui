<?php get_header(); ?>
	<div class="row">
		<div class="column">
			<?php putRevSlider("slider","homepage") ?>
		</div>
	</div>
	<?php include("index-services.php"); ?>
    <div class="full-width-box tool">
        <div class="row text-center">
            <div class="wow flipInX animated" data-wow-delay="0.5s">
                <img src="http://cdn.tiancaiui.com/tool/images/logo.280ef1dc.png">
                <h5>店铺装修在线编辑工具</h5>
                <span>Generate Code For Your Shop With Easy Code</span>
            </div>
            <a href="#" target="_blank" class="wow flipInX animated" data-wow-delay="0.6s"><img src="http://127.0.0.1/wp-content/themes/reverie-master/img/tool.png"></a>
        </div>
    </div>
    <?php $number = 9; $delay = 0.8; include("index-case.php"); ?>
	<?php include("index-employ.php"); ?>
	<?php include("index-skills.php"); ?>
	<?php include("index-blog.php"); ?>
	<?php include("index-process.php"); ?>
	<?php include("index-price.php"); ?>
	<?php include("index-clients.php"); ?>
<?php get_footer(); ?>