<?php
/*
Template Name: faq
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
<div class="full-width-box faq">
    <div class="row">
        <div class="fwb-bg fwb-paralax" data-speed="0.5" style="background-image: url(http://127.0.0.1/wp-content/themes/reverie-master/img/faq.jpg);"></div>
        <div class="page-title">
            <h1 class="text-center"><strong>FAQ</strong></h1>
        </div>
    </div>
</div>
    <div class="row push-top-40 push-bottom-70">
        <div class="large-12 columns">
            <ul class="faq-tabs" data-tab>
                <li class="tab-title active"><a href="#general"><span class="fa fa-flag"></span>常见问题</a></li>
                <li class="tab-title"><a href="#company"><span class="fa fa-star"></span>公司问题</a></li>
                <li class="tab-title"><a href="#services"><span class="fa fa-heart"></span>产品&服务</a></li>
                <li class="tab-title"><a href="#tool"><span class="fa fa-object-group"></span>装修工具</a></li>
                <li class="tab-title"><a href="#clients"><span class="fa fa-user"></span>合作&客户</a></li>
            </ul>
            <div class="tabs-content faq-tabs-content">
                <div class="content active" id="general">
                    <ul class="accordion" data-accordion>
                      <li class="accordion-navigation">
                        <a href="#panel1a"><span class="acc-control"></span><span class="acc-heading">这是一个什么网站？</span></a>
                        <div id="panel1a" class="content active">
                          这是天彩科技有限公司的官方网站，主要用于展示公司形象、介绍公司的服务，同时也会分享一些关于前段开发文章。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel2a"><span class="acc-control"></span><span class="acc-heading">你们都提供哪些服务？</span></a>
                        <div id="panel2a" class="content">
                          我们的服务主要是前端的设计与开发，这里有我们具体提供的服务。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel3a"><span class="acc-control"></span><span class="acc-heading">如何雇佣你们？</span></a>
                        <div id="panel3a" class="content">
                          您需要告知我们项目中的任务、完成时限和预算，经我们的团队商讨后会第一时间答复您。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                          <a href="#panel4a"><span class="acc-control"></span><span class="acc-heading">怎么联系我们？</span></a>
                          <div id="panel4a" class="content">
                            真诚欢迎与您交流，这里有我们的联系方式。
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="content" id="company">
                    <ul class="accordion" data-accordion>
                      <li class="accordion-navigation">
                        <a href="#panel1b"><span class="acc-control"></span><span class="acc-heading">你们的公司运营多久了？</span></a>
                        <div id="panel1b" class="content active">
                          我们的团队组建于08年，始终是以工作室的方式运营的。为了更好的服务客户我们于15年3月注册公司，所以虽然公司运营不久，但我们团队已经工作很多年了，积累了很多的开发经验和大量的客户。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel2b"><span class="acc-control"></span><span class="acc-heading">你们的公司现在有几人？</span></a>
                        <div id="panel2b" class="content">
                          公司现在有5人，2个开发、2个设计和一个运营。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel3b"><span class="acc-control"></span><span class="acc-heading">你们的公司地址是哪里？</span></a>
                        <div id="panel3b" class="content">
                          山西省太原市尖草坪区青年城1-2-1003
                        </div>
                      </li>
                    </ul>
                </div>
                <div class="content" id="services">
                    <ul class="accordion" data-accordion>
                      <li class="accordion-navigation">
                        <a href="#panel1c"><span class="acc-control"></span><span class="acc-heading">你们的目前作品都有什么？</span></a>
                        <div id="panel1c" class="content active">
                          目前我们在淘宝和京东的装修市场都有成品模板出售，辅助装修的在线编辑工具，独立电商平台友好速搭的主题等，点击这里查看更多作品。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel2c"><span class="acc-control"></span><span class="acc-heading">是否提供服务页面以外的服务？</span></a>
                        <div id="panel2c" class="content">
                          只要您有需求，且我们有能力的，都可以为您服务。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel3c"><span class="acc-control"></span><span class="acc-heading">你们的售后是怎样的？</span></a>
                        <div id="panel3c" class="content">
                          所有的服务都提供一年内的免费售后，但因项目不同售后规则也会稍有不同，具体的请咨询客服。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                          <a href="#panel4c"><span class="acc-control"></span><span class="acc-heading">你们能够保证按时完成项目么？</span></a>
                          <div id="panel4c" class="content">
                            在确定项目后，我们会与您签一份合同，上面会详细的标明项目的完成阶段与违约处罚办法。
                          </div>
                      </li>
                      <li class="accordion-navigation">
                            <a href="#panel5c"><span class="acc-control"></span><span class="acc-heading">你们的是如何收费的？</span></a>
                            <div id="panel5c" class="content">
                              不同的服务费用也不同，可以点此查看具体价格。
                            </div>
                      </li>
                      <li class="accordion-navigation">
                              <a href="#panel6c"><span class="acc-control"></span><span class="acc-heading">如何支付服务费用？</span></a>
                              <div id="panel6c" class="content">
                                根据项目进度分阶段支付，在开发开发前需要交付30%的定金。成品模板是直接付款到相应的淘宝或京东平台的。
                              </div>
                      </li>
                    </ul>
                </div>
                <div class="content" id="tool">
                    <ul class="accordion" data-accordion>
                      <li class="accordion-navigation">
                        <a href="#panel1d"><span class="acc-control"></span><span class="acc-heading">使用此工具有什么要求么？</span></a>
                        <div id="panel1d" class="content active">
                          没有要求，只要注册登陆后即可使用，但有些需要借助css实现的效果，需要配合我们的模板才可以。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel2d"><span class="acc-control"></span><span class="acc-heading">代码能够保存多久？</span></a>
                        <div id="panel2d" class="content">
                          您生成的代码是一直保存在服务器上的，无需担心代码丢失的问题。
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a href="#panel3d"><span class="acc-control"></span><span class="acc-heading">支持哪些平台店铺的装修？</span></a>
                        <div id="panel3d" class="content">
                          目前只支持淘宝、天猫和京东这三个平台的店铺装修。
                        </div>
                      </li>
                    </ul>
                </div>
                <div class="content" id="clients">
                    <ul class="accordion" data-accordion>
                      <li class="accordion-navigation">
                        <a href="#panel1f"><span class="acc-control"></span><span class="acc-heading">如何与你们合作？</span></a>
                        <div id="panel1f" class="content active">
                          请您将合作具体事宜发送到support@tiancaiui.com，我们会第一时间回复您。
                        </div>
                      </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

<?php get_footer() ?>