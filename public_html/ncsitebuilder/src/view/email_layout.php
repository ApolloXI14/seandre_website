<?php
/**
 * Source: {@link https://github.com/seanpowell/Email-Boilerplate/blob/master/email.html}
 *
 * @var string $title
 * @var string $content
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title><?php echo htmlspecialchars($title); ?></title>
	<style type="text/css">
		* { font: 12px Arial; line-height: 20px; }
		h1 { font-size: 24px; line-height: 32px; }
		h2 { font-size: 20px; line-height: 27px; }
		h3 { font-size: 16px; line-height: 22px; }
		h4 { font-size: 14px; line-height: 21px; }
		h5 { font-size: 13px; line-height: 21px; }
		strong { font-weight: bold; }

		#outlook a {padding:0;}
		body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; font: 12px Arial;}
		.ExternalClass {width:100%;}
		.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
		#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
		table td {border-collapse: collapse;}

		#contentTable { width: 738px; }

		/* Bring following styles inline when possible */
		img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
		a img {border:none;}
		.image_fix {display:block;}
		p {margin: 1em 0;}
		h1, h2, h3, h4, h5, h6 {color: black !important;}
		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}
		h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
			color: red !important; /* Preferably not the same color as the normal header link color.  There is limited support for psuedo classes in email clients, this was added just for good measure. */
		 }
		h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
			color: purple !important; /* Preferably not the same color as the normal header link color. There is limited support for psuedo classes in email clients, this was added just for good measure. */
		}
		table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
		a {color: blue;}
		/* End of inline styles */

		@media only screen and (max-device-width: 480px) {
			#contentTable { width: 100%; }
			a[href^="tel"], a[href^="sms"] {
						text-decoration: none;
						color: black;
						pointer-events: none;
						cursor: default;
					}

			.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
						text-decoration: default;
						color: blue !important;
						pointer-events: auto;
						cursor: default;
					}
		}

		@media only screen and (min-device-width: 481px) and (max-device-width: 767px) {
			#contentTable { width: 450px; }
			a[href^="tel"], a[href^="sms"] {
						text-decoration: none;
						color: blue;
						pointer-events: none;
						cursor: default;
					}

			.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
						text-decoration: default;
						color: blue !important;
						pointer-events: auto;
						cursor: default;
					}
		}

		@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
			a[href^="tel"], a[href^="sms"] {
						text-decoration: none;
						color: blue;
						pointer-events: none;
						cursor: default;
					}

			.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
						text-decoration: default;
						color: blue !important;
						pointer-events: auto;
						cursor: default;
					}
		}
		<?php /* // Following are for Android
		@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		}
		@media only screen and (-webkit-device-pixel-ratio:.75){
		}
		@media only screen and (-webkit-device-pixel-ratio:1){
		}
		@media only screen and (-webkit-device-pixel-ratio:1.5){
		}
		*/ ?>
	</style>
</head>
<body style="background-color: #EEEEEE;">
	<table id="backgroundTable" cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td style="padding: 30px 15px; background-color: #EEEEEE;">
			<table id="contentTable" cellpadding="0" cellspacing="0" border="0" align="center">
				<tr>
					<td valign="top" style="padding: 15px; background-color: #FFFFFF;"><?php echo $content; ?></td>
				</tr>
			</table>
		</td>
	</tr>
	</table>
</body>
</html>