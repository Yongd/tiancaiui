<?php get_header(); ?>
	<div class="row">
		<div class="column">
			<?php putRevSlider("slider","homepage") ?>
		</div>
	</div>
	<?php include("index-services.php"); ?>
    <?php $number = 9; $delay = 0.8; include("index-case.php"); ?>
	<?php include("index-employ.php"); ?>
	<?php include("index-skills.php"); ?>
	<?php include("index-blog.php"); ?>
	<?php include("index-process.php"); ?>
	<?php include("index-price.php"); ?>
	<?php include("index-clients.php"); ?>
<?php get_footer(); ?>