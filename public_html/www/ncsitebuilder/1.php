<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php echo htmlspecialchars(($seoTitle !== "") ? $seoTitle : "Home"); ?></title>
	<base href="{{base_url}}" />
			<meta name="viewport" content="width=992" />
		<meta name="description" content="<?php echo htmlspecialchars(($seoDescription !== "") ? $seoDescription : ""); ?>" />
	<meta name="keywords" content="<?php echo htmlspecialchars(($seoKeywords !== "") ? $seoKeywords : ""); ?>" />
	<!-- Facebook Open Graph -->
	<meta property="og:title" content="<?php echo htmlspecialchars(($seoTitle !== "") ? $seoTitle : "Home"); ?>" />
	<meta property="og:description" content="<?php echo htmlspecialchars(($seoDescription !== "") ? $seoDescription : ""); ?>" />
	<meta property="og:image" content="<?php echo htmlspecialchars(($seoImage !== "") ? "{{base_url}}".$seoImage : ""); ?>" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="{{curr_url}}" />
	<!-- Facebook Open Graph end -->
		
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/main.js?v=20190205030206" type="text/javascript"></script>

	<link href="css/font-awesome/font-awesome.min.css?v=4.7.0" rel="stylesheet" type="text/css" />
	<link href="css/site.css?v=20190205030207" rel="stylesheet" type="text/css" />
	<link href="css/common.css?ts=1549832124" rel="stylesheet" type="text/css" />
	<link href="css/1.css?ts=1549832124" rel="stylesheet" type="text/css" />
	<ga-code/>
	<script type="text/javascript">
	window.useTrailingSlashes = true;
</script>
	
	<link href="css/flag-icon-css/css/flag-icon.min.css" rel="stylesheet" type="text/css" />	
	<!--[if lt IE 9]>
	<script src="js/html5shiv.min.js"></script>
	<![endif]-->

	</head>


<body><div class="root"><div class="vbox wb_container" id="wb_header">
	
<div class="wb_cont_inner"><div id="wb_element_instance0" class="wb_element wb_text_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle">Artist</h4></div><div id="wb_element_instance1" class="wb_element wb-menu"><ul class="hmenu"><li class="active"><a href="" target="_self">Home</a></li><li><a href="About-us/" target="_self">About us</a></li><li><a href="Contacts/" target="_self">Contacts</a></li></ul><div class="clearfix"></div></div></div><div class="wb_cont_outer"></div><div class="wb_cont_bg"></div></div>
<div class="vbox wb_container" id="wb_main">
	
<div class="wb_cont_inner"><div id="wb_element_instance5" class="wb_element wb_text_element" style=" line-height: normal;"><h5 class="wb-stl-subtitle"><a href="About-us/"><span style="color:rgba(255,255,255,1);">History of art</span></a></h5></div><div id="wb_element_instance6" class="wb_element wb_text_element" style=" line-height: normal;"><h5 class="wb-stl-subtitle"><a href="About-us/"><span style="color:rgba(255,255,255,1);">Modern photography</span></a></h5></div><div id="wb_element_instance7" class="wb_element wb_text_element" style=" line-height: normal;"><h5 class="wb-stl-subtitle"><a href="About-us/"><span style="color:rgba(255,255,255,1);">Sculpture researches</span></a></h5></div><div id="wb_element_instance8" class="wb_element wb_element_shape"><div class="wb_shp"></div></div><div id="wb_element_instance9" class="wb_element wb_element_shape"><div class="wb_shp"></div></div><div id="wb_element_instance10" class="wb_element wb_element_shape"><div class="wb_shp"></div></div><div id="wb_element_instance11" class="wb_element" style=" overflow: hidden;"><div style="height: 100%;"></div></div><div id="wb_element_instance13" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(1);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance13");
					var comments = block.children(".wb_comments").eq(0);
					var contentBlock = $("#wb_main");
					contentBlock.height(contentBlock.height() + comments.height());
				});
			</script>
			<?php
				} else {
			?>
			<script type="text/javascript">
				$(function() {
					$("#wb_element_instance13").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div><div class="wb_cont_outer"><div id="wb_element_instance12" class="wb_element wb_element_picture" title=""><span style="background-image: url('gallery_gen/38745b6d2e198c0fa50669caba4689fd.jpg');"></span></div></div><div class="wb_cont_bg"></div></div>
<div class="vbox wb_container" id="wb_footer">
	
<div class="wb_cont_inner" style="height: 131px;"><div id="wb_element_instance2" class="wb_element wb_element_picture" title=""><i class="fa fa-twitter" style="color:#ffffff"></i></div><div id="wb_element_instance3" class="wb_element wb_element_picture" title=""><i class="fa fa-facebook-f" style="color:#ffffff"></i></div><div id="wb_element_instance4" class="wb_element wb_element_picture" title=""><i class="fa fa-pinterest-p" style="color:#ffffff"></i></div><div id="wb_element_instance14" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#wb_footer, #wb_footer .wb_cont_inner");
					footer.css({height: ""});
				}
			});
			</script></div></div><div class="wb_cont_outer"></div><div class="wb_cont_bg"></div></div><div class="wb_sbg"></div></div>{{hr_out}}</body>
</html>
