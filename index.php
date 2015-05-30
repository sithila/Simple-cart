<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/styles.css">
<script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>
<body class="cart-body">

<!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

<section class="section header"> <span class="icon header-expand-icon"></span>
  <div class="inner-wrapper" >
    <nav>
      <ul class="left-nav">
        <li><a href="#/">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">blog</a></li>
      </ul>
    </nav>
    <ul class="right-nav">
      <li> <a  class="cart-box dropdown-link blue-link" id="cart-info" title="View Cart">
        <?php 
if(isset($_SESSION["products"])){
	echo count($_SESSION["products"]); 
}else{
	echo 0; 
}
?>
        </a>
        <div id="shop-min" class="dropdown">
          <div class="arrow"></div>
          <h3>Your Shopping Cart</h3>
          <div id="shopping-cart-results"> </div>
        </div>
        Items In <a class="blue-link" href="#cart">Cart</a></li>
      <li><a class="dropdown-link">Sign in</a>
        <div class="dropdown">
          <div class="arrow"></div>
          <form>
            <div class="form-row">
              <input type="text" placeholder="user name">
            </div>
            <div class="form-row">
              <input type="text" placeholder="password">
            </div>
            <div class="form-row"><a href="" id="sign-up" rel="signup-model">Sign up...</a>
              <button class="btn btn-default align-right" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</section>
<section class="section content" ng-app="myApp" ng-controller="customersCtrl">
  <div id="main">
    <div ng-view></div>
  </div>
  <div class="inner-wrapper products"> 
    <!--sign up-->
    <div  class="model_dialog signup-model">
      <div class="dialog"> <a class="close"><span class="icon close-icon"></span></a>
        <div class="model-header">
          <h3 class="model-title">Sign Up</h3>
        </div>
        <div class="model-body"> </div>
      </div>
    </div>
  </div>
  <div id="overlay" ng-click="modelclose()"></div>
</section>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script> 
<script src="js/main.js"></script> 
<script src= "js/angular.min.js"></script> 
<script src="js/angular-route.js"></script> 
<script src="js/controllers.js"></script>
</body>
</html>