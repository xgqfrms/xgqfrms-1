<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div>
		<h1>XSS test using PHP!</h1>
		<form action="XSS.php" method="GET">
			<label for="">XSS input test!</label>
			<input type="text" name="xss_input" placeholder="">
			<!--  -->
			<input type="submit" value="Submit">
		</form>
		<!-- 
		<script>alert("XSS alert test!");</script>
		<script>console.log("XSS console.log test!");</script>
		&lt;script&gt;console.log("XSS console.log test!");&lt;&frasl;script&gt;
		 -->
	</div>
</body>
</html>
<?php 
$xss = $_GET['xss_input'];
	// echo "你输入的字符为:<br><mark>".$xss."</mark>";
	echo "你输入的字符为: <mark>{$xss}</mark>";
 ?>