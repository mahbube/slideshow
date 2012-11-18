<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
		.slider{
			width: 470px;
			margin: 10px auto;
		}
		.slider div{
			position :absolute ;
			border: solid black 10px;
			z-index  :-2;
			background-repeat   :no-repeat;
		}
		[class |= imgani]{
			width: 450px;
			height: 300px;
			background-position :center center;
			background-size: 100% 100%;
			-webkit-transition: all 3s;
			-moz-transition: all 3s;
			-o-transition: all 3s;
			-ms-transition: all 3s;
		}
		.imgani-0 ,.imgani-2 ,.imgani-4 ,.imgani-6, .imgani-8{
			background-position :right top;
			background-size: 150% 150%;
		}
		.imgani-1 ,.imgani-3 ,.imgani-5 ,.imgani-7, .imgani-9{
			background-position :left bottom;
			background-size: 150% 150%;
		}

	</style>
	<script type="text/javascript"> document.write('<script type="text/javascript" src=scripts/' + ('__proto__' in {} ? 'zepto' : 'jquery') + '.js><\/script>'); </script>
	
</head>
<body>
	<section class='slider' id='q'><!-- class="step-1" -->
		<?php
			$images_path = './images';

			$images = scandir($images_path);
			$slidesLen = 0;
			foreach($images as $img){
				$img_arr = explode('.', $img);
				$img_type = strtolower( end($img_arr) );
				if ($img_type=='jpg') {
					echo "<div class='imgani-$slidesLen' style=\"background-image:url('$images_path/$img');\"></div>";
					$slidesLen++;
				}
			}
		?>
	</section>
	<script type="text/javascript" src='scripts/final-script.js'></script>
</body>