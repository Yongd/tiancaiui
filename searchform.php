<form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
	<div class="row collapse">
		<div class="large-8 small-9 columns">
			<input type="text" value="" name="s" id="s" placeholder="<?php esc_attr_e('输入关键字搜索', 'reverie'); ?>">
		</div>
		<div class="large-4 small-3 columns">
			<input type="submit" id="searchsubmit" value="<?php esc_attr_e('搜索', 'reverie'); ?>" class="button postfix">
		</div>
	</div>
</form>