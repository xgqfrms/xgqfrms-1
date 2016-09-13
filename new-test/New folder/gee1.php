<?php
require_once dirname(dirname(__FILE__)) . '/lib/class.geetestlib.php';
require_once dirname(dirname(__FILE__)) . '/config/config.php';
$GtSdk = new GeetestLib(CAPTCHA_ID, PRIVATE_KEY);
session_start();
$user_id = "test";
$status = $GtSdk->pre_process($user_id);
$_SESSION['gtserver'] = $status;
$_SESSION['user_id'] = $user_id;
echo $GtSdk->get_response_str();
?>