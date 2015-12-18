<?php
/*
Template Name: contact
*/
?>
<?php
if(isset($_POST['submitted'])) {
    if(trim($_POST['contactName']) === '') {
        $nameError = 'Please enter your name.';
        $hasError = true;
    } else {
        $name = trim($_POST['contactName']);
    }

    if(trim($_POST['email']) === '')  {
        $emailError = 'Please enter your email address.';
        $hasError = true;
    } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
        $emailError = 'You entered an invalid email address.';
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    if(trim($_POST['comments']) === '') {
        $commentError = 'Please enter a message.';
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['comments']));
        } else {
            $comments = trim($_POST['comments']);
        }
    }

    if(!isset($hasError)) {
        $emailTo = get_option('tz_email');
        if (!isset($emailTo) || ($emailTo == '') ){
            $emailTo = get_option('admin_email');
        }
        $subject = '[PHP Snippets] From '.$name;
        $body = "Name: $name \n\nEmail: $email \n\nComments: $comments";
        $headers = 'From: '.$name.' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

        mail($emailTo, $subject, $body, $headers);
        $emailSent = true;
    }

}
?>
<?php get_header() ?>
<div class="full-width-box contact">
    <div class="section">
        <div class="row">
            <div class="fwb-bg fwb-paralax" data-speed="0.5" style="background-image: url(http://127.0.0.1/wp-content/themes/reverie-master/img/city.jpg); background-position: 50% -7.5px;"></div>
            <div class="page-title">
            <h1 class="text-center"><span>Contact <strong>Us</strong></span></h1>
                <div class="divider_holder">
                    <div>
                        <i class="fa fa-map-marker">
                        </i>
                    </div>
                 </div>
                <h2 class="text-center"><span>联系我们</span></h2>
            </div>
        </div>
    </div>
    <div class="row page-content">
        <div class="samll-12 large-8 columns">
            <h3>给我们发邮件</h3>
            <?php if(isset($emailSent) && $emailSent == true) { ?>
                <div class="thanks">
                    <p>谢谢,您的信息我们已收到,我们会尽快与您联系.</p>
                </div>
                <?php } else { ?>
                    <?php the_content(); ?>
                    <?php if(isset($hasError) || isset($captchaError)) { ?>
                        <p class="error">对不起,您填写的信息有误,请检查无误后再提交.<p>
                    <?php } ?>

                <form action="<?php the_permalink(); ?>" id="contactForm" method="post">
                    <ul class="contactform">
                    <li>
                        <input placeholder="姓名" type="text" name="contactName" id="contactName" value="<?php if(isset($_POST['contactName'])) echo $_POST['contactName'];?>" class="required requiredField" />
                        <?php if($nameError != '') { ?>
                            <span class="error"><?=$nameError;?></span>
                        <?php } ?>
                    </li>

                    <li>
                        <input placeholder="邮箱" type="text" name="email" id="email" value="<?php if(isset($_POST['email']))  echo $_POST['email'];?>" class="required requiredField email" />
                        <?php if($emailError != '') { ?>
                            <span class="error"><?=$emailError;?></span>
                        <?php } ?>
                    </li>

                    <li>
                        <textarea placeholder="正文" name="comments" id="commentsText" rows="20" cols="30" class="required requiredField"><?php if(isset($_POST['comments'])) { if(function_exists('stripslashes')) { echo stripslashes($_POST['comments']); } else { echo $_POST['comments']; } } ?></textarea>
                        <?php if($commentError != '') { ?>
                            <span class="error"><?=$commentError;?></span>
                        <?php } ?>
                    </li>

                    <li>
                        <button class="button radius" type="submit">提交</button>
                    </li>
                    </ul>
                    <input type="hidden" name="submitted" id="submitted" value="true" />
                </form>
            <?php } ?>
        </div>
        <div class="samll-12 large-4 columns">
            <h3>天彩科技有限公司</h3>
            <ul>
                <li><i class="fa fa-phone"></i>办公电话：170-930-51880</li>
                <li><i class="fa fa-envelope-o"></i>邮箱地址：support@tiancaiui.com</li>
                <li><i class="fa fa-qq"></i>QQ：3146369 <a class="button small radius" href="http://wpa.qq.com/msgrd?v=3&uin=3146369&site=qq&menu=yes" target="_blank">立即联系</a></li>
                <li><i class="fa fa-map-marker"></i>地址：山西省太原市尖草坪区青年城1-2-1003</li>
                <li><img src="http://127.0.0.1/wp-content/themes/reverie-master/img/map.jpg"></li>
            </ul>
        </div>
    </div>
</div>

<?php get_footer() ?>