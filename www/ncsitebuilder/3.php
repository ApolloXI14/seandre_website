<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php echo htmlspecialchars(($seoTitle !== "") ? $seoTitle : "Contacts"); ?></title>
	<base href="{{base_url}}" />
			<meta name="viewport" content="width=992" />
		<meta name="description" content="<?php echo htmlspecialchars(($seoDescription !== "") ? $seoDescription : ""); ?>" />
	<meta name="keywords" content="<?php echo htmlspecialchars(($seoKeywords !== "") ? $seoKeywords : ""); ?>" />
	<!-- Facebook Open Graph -->
	<meta property="og:title" content="<?php echo htmlspecialchars(($seoTitle !== "") ? $seoTitle : "Contacts"); ?>" />
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
	<link href="css/common.css?ts=1549832125" rel="stylesheet" type="text/css" />
	<link href="css/3.css?ts=1549832125" rel="stylesheet" type="text/css" />
	<script src="js/jquery.browser.min.js" type="text/javascript"></script>
	<link href="js/photoswipe/photoswipe.css" rel="stylesheet" type="text/css" />
	<link href="js/photoswipe/default-skin/default-skin.css" rel="stylesheet" type="text/css" />
	<script src="js/photoswipe/photoswipe.min.js" type="text/javascript"></script>
	<script src="js/photoswipe/photoswipe-ui-default.min.js" type="text/javascript"></script>
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
	
<div class="wb_cont_inner"><div id="wb_element_instance28" class="wb_element wb_text_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle">Artist</h4></div><div id="wb_element_instance29" class="wb_element wb-menu"><ul class="hmenu"><li><a href="" target="_self">Home</a></li><li><a href="About-us/" target="_self">About us</a></li><li class="active"><a href="Contacts/" target="_self">Contacts</a></li></ul><div class="clearfix"></div></div></div><div class="wb_cont_outer"></div><div class="wb_cont_bg"></div></div>
<div class="vbox wb_container" id="wb_main">
	
<div class="wb_cont_inner"><div id="wb_element_instance33" class="wb_element wb_text_element" style=" line-height: normal;"><p class="wb-stl-footer">© 2019 <a href="http://seandre.net">seandre.net</a></p></div><div id="wb_element_instance36" class="wb_element wb_text_element" style=" line-height: normal;"><h5 class="wb-stl-subtitle"><span style="color:#1f1f1f;"><span class="wb_tr_ok"><span class="wb_tr_ok"><span class="wb_tr_ok"><span class="wb_tr_ok">Contacts</span></span></span></span></span></h5></div><div id="wb_element_instance37" class="wb_element"><form class="wb_form" method="post" enctype="multipart/form-data"><input type="hidden" name="wb_form_id" value="98748fcb"><textarea name="message" rows="3" cols="20" class="hpc"></textarea><table><tr><th class="wb-stl-normal">Name&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_0" value="Name"><input class="form-control form-field" type="text" value="" name="wb_input_0" required="required"></td></tr><tr><th class="wb-stl-normal">E-mail&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_1" value="E-mail"><input class="form-control form-field" type="text" value="" name="wb_input_1" required="required"></td></tr><tr><th class="wb-stl-normal">Country&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_2" value="Country"><input class="form-control form-field" type="text" value="" name="wb_input_2" required="required"></td></tr><tr><th class="wb-stl-normal">City&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_3" value="City"><input class="form-control form-field" type="text" value="" name="wb_input_3" required="required"></td></tr><tr class="area-row"><th class="wb-stl-normal">Message&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_4" value="Message"><textarea class="form-control form-field form-area-field" rows="3" cols="20" name="wb_input_4" required="required"></textarea></td></tr><tr class="form-footer"><td colspan="2"><button type="submit" class="btn btn-default">Send</button></td></tr></table></form><script type="text/javascript">
			<?php $wb_form_id = popSessionOrGlobalVar("wb_form_id"); if ($wb_form_id == "98748fcb") { ?>
				var formValues = <?php echo json_encode(popSessionOrGlobalVar("post")); ?>;
				var formErrors = <?php echo json_encode(popSessionOrGlobalVar("formErrors")); ?>;
				wb_form_validateForm("98748fcb", formValues, formErrors);
				<?php $wb_form_send_success = popSessionOrGlobalVar("wb_form_send_success");
				if (($wb_form_send_state = popSessionOrGlobalVar("wb_form_send_state"))) { ?>
					var prompt = $("<div>")
						.addClass("alert alert-<?php echo $wb_form_send_success ? "success" : "danger"; ?>")
						.css({ position: "fixed", opacity: 0, right: "-50px", top: "10px", zIndex: 10000, fontSize: "24px",
							   padding: "30px 50px", lineHeight: "24px", maxWidth: "748px" })
						.append("<?php echo str_replace('"', '\"', $wb_form_send_state); ?>")
						.prepend($("<button>").addClass("close")
							.css({ marginRight: "-40px", marginTop: "-24px" })
							.html("&nbsp;&times;")
							.on("click", function() { $(this).parent().remove(); })
						)
					.appendTo("body");
					setTimeout(function() { prompt.animate({ opacity: 1, right: "10px" }, 250); }, 250);
					<?php $wb_form_send_success = false; $wb_form_send_state = null; ?>
				<?php } ?>
			<?php } ?>
			</script></div><div id="wb_element_instance38" class="wb_element wb_text_element" style=" line-height: normal;"><h2 class="wb-stl-heading2"><span class="wb_tr_ok"><span class="wb_tr_ok"><span class="wb_tr_ok"><span class="wb_tr_ok">Our offices</span></span></span></span></h2>
<p class="wb-stl-normal"> </p>
<p class="wb-stl-normal">You will find the latest information about us on this page. Our company is constantly evolving and growing. We provide wide range of services. Our mission is to provide best solution that helps everyone. If you want to contact us, please fill the contact form on our...</p>
<p class="wb-stl-normal"> </p>
<p class="wb-stl-normal">Website. We wish you a good day! You will find the latest information about us on this page. Our company is constantly evolving and growing. We provide wide range of services. Our mission is to provide best solution that helps everyone. If you want to contact...</p></div><div id="wb_element_instance41" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(3);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance41");
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
					$("#wb_element_instance41").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div><div class="wb_cont_outer"><div id="wb_element_instance35" class="wb_element wb_element_shape"><div class="wb_shp"></div></div><div id="wb_element_instance39" class="wb_element wb-map"><script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;key=AIzaSyDboyfyqofWrv44VfiIfh0w7XjTlZx8hrU&amp;sensor=false&amp;libraries=places&amp;region=US&amp;language=en_US"></script><script type="text/javascript">(function() { var mapLoaded = function() { var div = document.getElementById("wb_element_instance39"); var ll = new google.maps.LatLng(34.04128062212259,-118.23211669921875); var map = new google.maps.Map(div, { zoom: 13, center: ll, mapTypeId: "roadmap" }); var marker = new google.maps.Marker({ position: ll, clickable: false, map: map }); }; var init = function() { if (!window.google) { setTimeout(init, 50); } else { google.maps.event.addDomListener(window, "load", mapLoaded); } }; init(); })();</script></div><div id="wb_element_instance40" class="wb_element wb_gallery"><script type="text/javascript" src="js/WB_Gallery.class.js?v=20190205030206"></script><script type="text/javascript">
				$(function() {
					new WB_Gallery({"id":"wb_element_instance40","type":"slideshow","interval":5,"speed":400,"fullWidth":true,"imageCover":false,"width":1903,"height":300,"border":{"differ":false,"color":["#ffffff","#ffffff","#ffffff","#ffffff"],"style":["none","none","none","none"],"weight":[5,5,5,5],"radius":null,"css":{"border":"5px none #ffffff"}},"borderWidths":[0,0,0,0],"padding":0,"thumbWidth":290,"thumbHeight":290,"columnWidth":296,"rowHeight":296,"thumbAlign":"left","showPictureCaption":"always","images":[{"thumb":"gallery_gen\/c3762adc45e2d51a1776b2a19379cc19_290x290.jpg","image":"gallery_gen\/3f293b3cf8c561c7859d3b1a0c40e705.jpg","width":3072,"height":3072,"title":"","link":null,"description":""},{"thumb":"gallery_gen\/f4cfe44601d88771781af262d8c390e1_290x290.jpg","image":"gallery_gen\/8653cec1c31fbabe18ade0ae2f67d1e7.jpg","width":3710,"height":2473,"title":"","link":null,"description":""},{"thumb":"gallery_gen\/d4b5c071814c590469e7ba70e367534d_290x290.jpg","image":"gallery_gen\/6758b135c66d2d1da5c9199fe5d0da22.jpg","width":3969,"height":2377,"title":"","link":null,"description":""}]});
				});
			</script></div></div><div class="wb_cont_bg"></div></div>
<div class="vbox wb_container" id="wb_footer">
	
<div class="wb_cont_inner" style="height: 167px;"><div id="wb_element_instance30" class="wb_element wb_element_picture" title=""><i class="fa fa-twitter" style="color:#ffffff"></i></div><div id="wb_element_instance31" class="wb_element wb_element_picture" title=""><i class="fa fa-facebook-f" style="color:#ffffff"></i></div><div id="wb_element_instance32" class="wb_element wb_element_picture" title=""><i class="fa fa-pinterest-p" style="color:#ffffff"></i></div><div id="wb_element_instance34" class="wb_element wb_element_picture" title=""><img alt="gallery/eb6b9f776a4d4ba5802445cd6854d56d.lock" src="gallery_gen/ffad1189f31c72bb56bf71ba120e4a89.png"></div><div id="wb_element_instance42" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#wb_footer, #wb_footer .wb_cont_inner");
					footer.css({height: ""});
				}
			});
			</script></div></div><div class="wb_cont_outer"></div><div class="wb_cont_bg"></div></div><div class="wb_sbg"></div></div>
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="pswp__bg" style="opacity: 0.7;"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--close" title="Close"></button>
				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div> 
			</div>
			<button class="pswp__button pswp__button--arrow--left" title="Previous"></button>
			<button class="pswp__button pswp__button--arrow--right" title="Next"></button>
			<div class="pswp__caption"><div class="pswp__caption__center"></div></div>
		</div>
	</div>
</div>
{{hr_out}}</body>
</html>
