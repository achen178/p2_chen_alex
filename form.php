<!-- HTML top code goes here -->
<link href="https://fonts.googleapis.com/css?family=Mr+De+Haviland|Noto+Sans" rel="stylesheet">
<style type="text/css" media="screen">
*{
	margin: 0;
	padding: 0;
	border: 0;
}
header {
  height: 60px;
  /* overflow: hidden; */
  text-align: right;
  position: fixed;
  padding: 30px;
  z-index: 20;
}
.logobox{
  background: linear-gradient(#719549,#a9d86c);;
  width: 50px;
  height: 50px;
  padding:10px;
  opacity: .9;
  position: fixed;
  box-shadow: 3px 3px 10px #999999;
}
header img{
  width: 40px;
  left: -5px;
  top: 5px;
  opacity: 1;
  display: inline-block;
  position: relative;
}
nav{
  position: fixed;
  right: 40px;
  top: 30px;
}
nav li{
  display: inline-block;
  margin-right: 30px;
  font-size: 12px;
  font-weight: 600;
}
</style>

<header>
	<div class="logobox">
		<a href="#firstPage"><img src="imgs/logo.png" alt="Logo"></a>
	</div>
	<nav>
		<ul>
			<li><a href="#firstPage"><span>HOME</span></a></li>
			<li><a href="#secondPage"><span>ABOUT</span></a></li>
			<li><a href="#thirdPage"><span>CONTACT</span></a></li>
			<li><a href="#fourthPage"><span>WORKS</span></a></li>
		</ul>
	</nav>
</header>
<?

// From processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'achendesign.me' // Put you mail domain here
	,
	'Contact Me' // Put your site name / form name here
	,
	'achen178@gmail.com' // Where will the form notification be sent?
	,
	'noreply@achendesign.me' // This what the form FROM: address wil be, if the form submissions doesn't contain an email field

);


?>

<!-- HTML bottom code goes here -->
