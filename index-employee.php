<div class="full-width-box team push-top-50">
	<div class="fwb-bg fwb-paralax" data-speed="0.5" style="background-image: url(http://127.0.0.1/wp-content/themes/reverie-master/img/teambg.jpg); background-position: 50% 259.5px;">
		<div class="overlay"></div>
	</div>
	<div class="row">
		<div class="column">
			<div class="title-box push-top-50">
				<h1 class="title">团队介绍 <span> / OUR TEAM</span></h1>
			</div>
		</div>
	</div>	
	<div class="row employee-list text-center">
		<?php 
		$users = get_users( 'role=administrator&order=DESC' );
		$count = 1;
		foreach ( $users as $user ) { $user_id = $user->id; $action = $count>2 ? 'bounceInRight' : 'bounceInLeft'; ?>
			<div class="medium-3 columns employee rotation wow <?php echo $action; ?> animated"  data-wow-delay="0.6s">
				<div class="default">
					<div class="image">
						<img src="<?php echo get_user_meta( $user_id, 'picture', true ); ?>" width="270" height="270" alt="">
					</div>
					<div class="description">
						<div class="vertical">
							<h3 class="name"><?php echo get_user_meta( $user_id, 'nickname', true ); ?></h3>
							<div class="role">
								<?php echo get_user_meta( $user_id, 'position', true ); ?>
							</div>
						</div>
					</div>
				</div>
				<div class="employee-hover">
					<h3 class="name"><?php echo get_user_meta( $user_id, 'nickname', true ); ?></h3>
					<div class="role">
						<?php echo get_user_meta( $user_id, 'position', true ); ?>
					</div>
					<div class="image">
						<img src="<?php echo get_user_meta( $user_id, 'picture', true ); ?>" width="60" height="60" alt="">
					</div>
					<div>
						<div>
							<p class="intro">
								<?php echo get_user_meta( $user_id, 'description', true ); ?>
							</p>
						</div>
						<div class="contact">
							<b>Email: </b><?php echo get_the_author_meta(  'user_email',$user_id ); ?>
						</div>
						<div class="contact">
							<b>Phone: </b><?php echo get_user_meta( $user_id, 'tel', true ); ?>
						</div>
					</div>
					<div class="social">
						<div class="item">
							<a class="sbtnf fa fa-weibo" href="<?php echo get_user_meta( $user_id, 'weibo', true ); ?>" target="_blank"></a>
						</div>
						<div class="item">
							<a class="sbtnf fa fa-qq" href="<?php echo get_user_meta( $user_id, 'qq', true ); ?>" target="_blank"></a>
						</div>
						<?php if(get_user_meta( $user_id, 'twitter', true )) :?>
						<div class="item">
							<a class="sbtnf fa fa-twitter" href="<?php echo get_user_meta( $user_id, 'twitter', true ); ?>" target="_blank"></a>
						</div>
						<?php endif; ?>
						<?php if(get_user_meta( $user_id, 'facebook', true )) :?>
						<div class="item">
							<a class="sbtnf fa fa-facebook" href="<?php echo get_user_meta( $user_id, 'facebook', true ); ?>" target="_blank"></a>
						</div>
						<?php endif; ?>
					</div>
				</div>
			</div>

		<?php $count++; } ?>
	</div>
</div>