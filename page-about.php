<?php
/*
Template Name: about
*/
?>
<?php get_header() ?>
<div id="crumb" class="full crumb">
	<div class="row">
		<div class="medium-5 columns">
			<h1><?php the_title(); ?></h1>
		</div>
  		<div class="medium-7 columns">
  			<ul class="breadcrumbs text-right">
			  <li><a href="/">首页</a></li>
			  <li class="current"><?php the_title(); ?></li>
			</ul>
  		</div>
	</div>
</div>
<?php include("index-employ.php"); ?>
<?php include("index-skills.php"); ?>
<?php get_footer() ?>