<?php
/*
Template Name: join
*/
?>
<?php get_header() ?>
<script type='text/javascript' src='http://127.0.0.1/wp-content/themes/reverie-master/js/jquery.t-countdown.js'></script>
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
<div class="full-width-box join white_text text-center">
    <div class="row">
        <div class="large-12 columns">
            <div style="height: 130px"></div>
            <div class="text-center">
                <span class="fa fa-paper-plane-o"></span>
            </div>
            <div style="height: 50px">
            </div>
            <h1 style="margin-bottom: 20px;margin-top: 0px;color: #ffffff;font-size: 45px;"><span>正在努力<strong style="color: #ffe8a3;">建设</strong>中!</span></h1>
            <h3 style="margin-bottom: 20px;margin-top: 0px;color: #ffffff;"><span>We are doing final touches to our new website &amp; will be out soon.</span></h3>
            <div>
                <div class="boc_divider " style="margin-top: 30px;margin-bottom: 20px;width: 60px;margin-left: auto; margin-right: auto;height: 2px;background: rgba(255,255,255,0.4);">
            </div>
            </div>
            <div style="height: 60px">
            </div>

            <div id="join-countdown" class="tminus_countdown">
                <div class="reverie-countdown ">
                    <div id="join-tophtml" class="reverie-tophtml">
                    </div>
                    <div id="join-dashboard" class="reverie-dashboard">
                        <div class="reverie-dash reverie-weeks_dash">
                            <div class="reverie-dash_title">
                                weeks
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                        </div>
                        <div class="reverie-dash reverie-days_dash">
                            <div class="reverie-dash_title">
                                days
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                        </div>
                        <div class="reverie-dash reverie-hours_dash">
                            <div class="reverie-dash_title">
                                hours
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                        </div>
                        <div class="reverie-dash reverie-minutes_dash">
                            <div class="reverie-dash_title">
                                minutes
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                        </div>
                        <div class="reverie-dash reverie-seconds_dash">
                            <div class="reverie-dash_title">
                                seconds
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: none;">

                                </div>
                                <div class="bottom" style="display: block;">

                                </div>
                            </div>
                            <div class="reverie-digit">
                                <div class="top" style="display: block; overflow: hidden; height: 46.5849px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">

                                </div>
                                <div class="bottom" style="display: block; overflow: hidden; height: 3.4848px;">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="join-bothtml" class="reverie-bothtml">
                    </div>
                </div>
            </div>

            <div style="height: 100px"></div>
            <a href="/contact" class="button-go contact" target="_self"><span>联系我们</span><i class="fa fa-envelope-o"></i></a>
            <a href="/" class="button-go contact" style="margin-left:10px;" target="_self"><span>返回首页</span><i class="fa fa-home"></i></a>
            <div style="height: 20px"></div>
            <p style="text-align: center;">
                <span style="color: #ccc;">Please come back and&nbsp;visit us once we are officially launched!</span>
            </p>
            <div style="height: 20px"></div>
            <style>
            .reverie-dashboard {
                min-height: 120px;
                width: 100%;
                display: table;
                margin: 0 auto;
                background: transparent;
                padding: 0;
            }
            .reverie-dash {
                display: table-cell;
                text-align:center;
                color: #333;
                border: 4px solid transparent;
                line-height: 38px;
                padding-bottom: 38px;
                -webkit-box-shadow: inset 0px 0px 0px 2px rgba(100,100,100,0.1);
                -moz-box-shadow: inset 0px 0px 0px 2px rgba(100,100,100,0.1);
                box-shadow: inset 0px 0px 0px 2px rgba(100,100,100,0.1);
                border-radius: 6px;
            }
            .reverie-digit {
                font-size: 44px;
                line-height: 50px;
                display: inline-table;
                width: 25px;
                text-align: center;
            }
            .reverie-dash_title {
                line-height: 22px;
                display: block;
                position: relative;
                top: 72px;
                white-space:nowrap;
                text-align:center;
            }
            .white_text .reverie-dash {
                color: #fff;
                -webkit-box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,0.5);
                -moz-box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,0.5);
                box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,0.5);
            }

            .page-template-page-join .join .contact{
                border:2px #f8f8f8 solid;
                background-color:transparent;
            }
            @media only screen and (max-width: 480px) {
                .reverie-dash {
                    display: block;
                }
            }
            </style>
            <script language="javascript" type="text/javascript">
                var tminusnow = '';
                jQuery(document).ready(function($) {
                $('#join-dashboard').countDown({
                targetDate: {
                    'day': 	12,
                    'month': 05,
                    'year': 2016,
                    'hour': 12,
                    'min': 	45,
                    'sec': 	05,
                    'localtime': '<?php echo date('m/d/Y g:i:s'); ?>',
                },
                style: 'reverie',
                launchtarget: 'countdown',
                omitWeeks: 'false',
                event_id: ''
                    , onComplete: function() {
                            $('#join-countdown').css({'width' : 'auto', 'height' : 'auto'});
                            $('#join-countdown').html("<font style='color:#fff;'>感谢您的耐心等待,页面即将更新.</font>");
                        }		});
                    });
            </script>


        </div>
    </div>
    <div class="row" style="display:none;">
        <div class="large-12 columns">
            <p>我们是一支朝气、高效的团队，拥有丰富的开发、设计、运营经验。 </p>
            <p>我们这里没打卡没考勤，不要求每天都来公司，工作时间工作场所自由选择。</p>
            <p>你的参与将让这里更充实、让我们前进得更有力！</p>
            <hr/>
            <h4>web 前端工程师</h4>
            <ul>
                <li> ◇ 1年及以上互联网前端开发工作经验；</li>
                <li> ◇ 熟悉 B/S 开发技术，熟练掌握 javascript、ajax、css、html 等 web 开发领域相关技术；</li>
                <li> ◇ 熟悉至少一种 javascript 框架（jquery 等）技术，对 html5 技术有一定了解；</li>
                <li> ◇ 熟悉基本的计算机网络概念，熟悉 HTTP 协议，了解 TCP/IP 的基本工作原理，熟悉各种 web 标准规范；</li>
                <li> ◇ 熟悉 linux，有 node.js、移动端 app 开发经验者优先；</li>
                <li> ◇ 具备较强的沟通交流和团队合作能力；</li>
                <li> ◇ 具备较强的工作主动性和学习进取精神，对业界的最新技术发展动态有比较密切的关注，有成功的互联网站点开发经历者优先。</li>
            </ul>
            <hr/>
            <h4>UI 设计师</h4>
            <ul>
                <li> ◇ 负责 web,mobile 产品界面或新功能的视觉推导和设计方案；</li>
                <li> ◇ 细化产品界面的视觉和交互设计，协同产品、开发团队推动项目进展；</li>
                <li> ◇ 持续优化用户体验，完善设计规范和视觉效果；</li>
                <li> ◇ 跟进设计效果最终在产品的实现，产出设计文档；</li>
                <li> ◇ 具有较高的艺术设计能力，有丰富的设计案例；</li>
                <li> ◇ 了解 html+css 等前端页面实现技术；</li>
            </ul>
            <hr/>
            <h4>运营策划</h4>
            <ul>
                <li> ◇ 2年及以上互联网运营策划工作经验，或相关广告行业策划经验；</li>
                <li> ◇ 点子多、脑洞大、神创意、神策划；</li>
                <li> ◇ 善于捕捉热点、挖掘资源，活泼开朗善沟通；</li>
                <li> ◇ 善于挖掘和维护各类资源；</li>
            </ul>
            <hr/>
            简历投至： hr@tiancaiui.com ，邮件主题：请标明应聘岗位。
        </div>
    </div>
</div>
<?php get_footer() ?>