<div class="full-width-box clients push-top-70">
	<div class="text-center widget-title wow fadeInUp animated" data-wow-delay="0.6s">
		<h4>Famous Clients</h4>
		<em class="text-uppercase inline-block">我们的客户</em>
	</div>
	<div class="row clients-list text-center">
    <?php
        $clients = get_bookmarks( array(
        'orderby' => 'id',
        'order' => 'ASC',
        'limit' => 6));
         $i = 0;
        foreach ($clients as $client){
            echo'
                <div class="medium-2 columns wow fadeInUp animated" data-wow-delay="'.$i*0.3.'s">
                    <a href="'.$client->link_url.'" rel="nofollow" title="'.$client->link_name.'" style="background-image: url('.$client->link_image.')"></a>
                </div>';
            $i++;
        }
    ?>
	</div>
</div>
<div class="row push-top-40 be-our-client">
	<div class="large-12 columns text-center">
		<div class="main-headline">
			<h3>Be Ready to Enjoy!</h3>
			<p>我们期待为您提供服务.</p>
		</div>
		<div class="button-group push-top-40">
			<a class="button gray wow fadeInLeft animated" href="#">
				<span class="title">Contact us</span>
				<span class="subtitle">给我们发邮件</span>
			</a> 
			<span class="or">or</span> 
			<a class="button color wow fadeInRight animated" href="#">
				<span class="title">View our portfolio</span>
				<span class="subtitle">查看我们的作品</span>
			</a>
		</div>
	</div>
</div>