<?php
/**
 * WARNING: THIS FILE IS GENERATED USING SCRIPTS. DO NOT EDIT MANUALLY.
 */
class FontCharMap {
	/**
	 * @param string $char Character to find supporting font name for.
	 * @return string|null Font name that supports the character.
	 */
	public static function getCharFont($char) {
		$size = strlen($char);
		$code = ord($char[0]) & (0xFF >> $size);
		for( $i = 1; $i < $size; $i++ )
			$code = ($code << 6) | (ord($char[$i]) & 127);

		if ($code < 0x267F) {
			if ($code < 0x1C80) {
				if ($code < 0x0964) {
					if ($code < 0x065F) {
						if ($code < 0x061E) {
							if ($code < 0x060B) {
								if ($code < 0x0600) {
									if ($code < 0x0591) {
										if ($code < 0x0531) {
											return null;
										} else {
											return "NotoSansArmenian";
										}
									} else {
										return "NotoSansHebrew";
									}
								} else {
									if ($code < 0x0604) {
										return "NotoKufiArabic";
									} else {
										return "NotoSansArabic";
									}
								}
							} else {
								if ($code < 0x0616) {
									if ($code < 0x060D) {
										if ($code < 0x060C) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansThaana";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0x061B) {
										return "NotoSansArabic";
									} else {
										return "NotoSansThaana";
									}
								}
							}
						} else {
							if ($code < 0x063B) {
								if ($code < 0x0621) {
									if ($code < 0x0620) {
										if ($code < 0x061F) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansThaana";
										}
									} else {
										return "NotoSansArabic";
									}
								} else {
									if ($code < 0x0622) {
										return "NotoSansSyriacEastern";
									} else {
										return "NotoKufiArabic";
									}
								}
							} else {
								if ($code < 0x064B) {
									if ($code < 0x0641) {
										if ($code < 0x0640) {
											return "NotoSansArabic";
										} else {
											return "NotoSansMandaic";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0x0656) {
										return "NotoSansSyriacEastern";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						}
					} else {
						if ($code < 0x0750) {
							if ($code < 0x0674) {
								if ($code < 0x0670) {
									if ($code < 0x066D) {
										if ($code < 0x0660) {
											return "NotoSansArabic";
										} else {
											return "NotoSansThaana";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0x0671) {
										return "NotoSansSyriacEastern";
									} else {
										return "NotoKufiArabic";
									}
								}
							} else {
								if ($code < 0x06ED) {
									if ($code < 0x06EC) {
										if ($code < 0x0675) {
											return "NotoSansArabic";
										} else {
											return "NotoKufiArabic";
										}
									} else {
										return "NotoSansArabic";
									}
								} else {
									if ($code < 0x0700) {
										return "NotoKufiArabic";
									} else {
										return "NotoSansSyriacEastern";
									}
								}
							}
						} else {
							if ($code < 0x0840) {
								if ($code < 0x07C0) {
									if ($code < 0x0780) {
										if ($code < 0x076E) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoSansThaana";
									}
								} else {
									if ($code < 0x0800) {
										return "NotoSansNKo";
									} else {
										return "NotoSansSamaritan";
									}
								}
							} else {
								if ($code < 0x0951) {
									if ($code < 0x0900) {
										if ($code < 0x08A0) {
											return "NotoSansMandaic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoSerifDevanagari";
									}
								} else {
									if ($code < 0x0953) {
										return "NotoSansTamil";
									} else {
										return "NotoSerifDevanagari";
									}
								}
							}
						}
					}
				} else {
					if ($code < 0x104A) {
						if ($code < 0x0C01) {
							if ($code < 0x09F0) {
								if ($code < 0x0980) {
									if ($code < 0x0970) {
										if ($code < 0x0966) {
											return "NotoSansGurmukhiUI";
										} else {
											return "NotoSansKaithi";
										}
									} else {
										return "NotoSerifDevanagari";
									}
								} else {
									if ($code < 0x09E6) {
										return "NotoSansBengali";
									} else {
										return "NotoSansChakma";
									}
								}
							} else {
								if ($code < 0x0B01) {
									if ($code < 0x0A81) {
										if ($code < 0x0A01) {
											return "NotoSansBengali";
										} else {
											return "NotoSansGurmukhiUI";
										}
									} else {
										return "NotoSerifGujarati";
									}
								} else {
									if ($code < 0x0B82) {
										return "NotoSansOriyaUI";
									} else {
										return "NotoSansTamil";
									}
								}
							}
						} else {
							if ($code < 0x0E01) {
								if ($code < 0x0D01) {
									if ($code < 0x0C82) {
										if ($code < 0x0C81) {
											return "NotoSansTelugu";
										} else {
											return "NotoSerifKannada";
										}
									} else {
										return "NotoSansKannadaUI";
									}
								} else {
									if ($code < 0x0D82) {
										return "NotoSerifMalayalam";
									} else {
										return "NotoSansSinhala";
									}
								}
							} else {
								if ($code < 0x1000) {
									if ($code < 0x0F00) {
										if ($code < 0x0E81) {
											return "NotoSansThai";
										} else {
											return "NotoSansLao";
										}
									} else {
										return "NotoSansTibetan";
									}
								} else {
									if ($code < 0x1040) {
										return "NotoSansMyanmarUI";
									} else {
										return "NotoSansChakma";
									}
								}
							}
						}
					} else {
						if ($code < 0x1780) {
							if ($code < 0x1200) {
								if ($code < 0x115F) {
									if ($code < 0x1100) {
										if ($code < 0x10A0) {
											return "NotoSansMyanmarUI";
										} else {
											return "NotoSansGeorgian";
										}
									} else {
										return "DroidSansFallback";
									}
								} else {
									if ($code < 0x1161) {
										return "NanumGothic";
									} else {
										return "DroidSansFallback";
									}
								}
							} else {
								if ($code < 0x16A0) {
									if ($code < 0x1400) {
										if ($code < 0x13A0) {
											return "NotoSerifEthiopic";
										} else {
											return "NotoSansCherokee";
										}
									} else {
										return "NotoSansCanadianAboriginal";
									}
								} else {
									if ($code < 0x1735) {
										return "NotoSansRunic";
									} else {
										return "NotoSansBuhid";
									}
								}
							}
						} else {
							if ($code < 0x1AB0) {
								if ($code < 0x19E0) {
									if ($code < 0x1980) {
										if ($code < 0x18B0) {
											return "NotoSansKhmer";
										} else {
											return "NotoSansCanadianAboriginal";
										}
									} else {
										return "NotoSansNewTaiLue";
									}
								} else {
									if ($code < 0x1A20) {
										return "NotoSansKhmer";
									} else {
										return "NotoSansTaiTham";
									}
								}
							} else {
								if ($code < 0x1C00) {
									if ($code < 0x1BC0) {
										if ($code < 0x1B80) {
											return null;
										} else {
											return "NotoSansSundanese";
										}
									} else {
										return "NotoSansBatak";
									}
								} else {
									if ($code < 0x1C50) {
										return "NotoSansLepcha";
									} else {
										return "NotoSansOlChiki";
									}
								}
							}
						}
					}
				}
			} else {
				if ($code < 0x2300) {
					if ($code < 0x2218) {
						if ($code < 0x2184) {
							if ($code < 0x1CF8) {
								if ($code < 0x1CDA) {
									if ($code < 0x1CD0) {
										if ($code < 0x1CC0) {
											return null;
										} else {
											return "NotoSansSundanese";
										}
									} else {
										return "NotoSerifDevanagari";
									}
								} else {
									if ($code < 0x1CDB) {
										return "NotoSansTamil";
									} else {
										return "NotoSerifDevanagari";
									}
								}
							} else {
								if ($code < 0x20F0) {
									if ($code < 0x20DD) {
										if ($code < 0x1D00) {
											return "NotoSansDevanagariUI";
										} else {
											return null;
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x2160) {
										return null;
									} else {
										return "NotoSansSymbols";
									}
								}
							}
						} else {
							if ($code < 0x21B0) {
								if ($code < 0x218A) {
									if ($code < 0x2189) {
										if ($code < 0x2185) {
											return null;
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return null;
									}
								} else {
									if ($code < 0x21AF) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x2212) {
									if ($code < 0x2200) {
										if ($code < 0x21E6) {
											return "NanumGothic";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NanumGothic";
									}
								} else {
									if ($code < 0x2213) {
										return "NotoSansSyriacEastern";
									} else {
										return "NanumGothic";
									}
								}
							}
						}
					} else {
						if ($code < 0x2261) {
							if ($code < 0x221F) {
								if ($code < 0x221D) {
									if ($code < 0x221A) {
										if ($code < 0x2219) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansTaiTham";
										}
									} else {
										return "NotoSansMono";
									}
								} else {
									if ($code < 0x221E) {
										return "NanumGothic";
									} else {
										return "NotoSansMono";
									}
								}
							} else {
								if ($code < 0x2248) {
									if ($code < 0x222A) {
										if ($code < 0x2229) {
											return "NanumGothic";
										} else {
											return "NotoSansMono";
										}
									} else {
										return "NanumGothic";
									}
								} else {
									if ($code < 0x2250) {
										return "NotoSansMono";
									} else {
										return "NanumGothic";
									}
								}
							}
						} else {
							if ($code < 0x22A3) {
								if ($code < 0x2266) {
									if ($code < 0x2264) {
										if ($code < 0x2262) {
											return "NotoSansMono";
										} else {
											return "NanumGothic";
										}
									} else {
										return "NotoSansMono";
									}
								} else {
									if ($code < 0x2299) {
										return "NanumGothic";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x22EE) {
									if ($code < 0x22CE) {
										if ($code < 0x22C4) {
											return "NanumGothic";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NanumGothic";
									}
								} else {
									if ($code < 0x22EF) {
										return "NotoSerifEthiopic";
									} else {
										return "NanumGothic";
									}
								}
							}
						}
					}
				} else {
					if ($code < 0x2460) {
						if ($code < 0x2329) {
							if ($code < 0x2318) {
								if ($code < 0x2316) {
									if ($code < 0x2311) {
										if ($code < 0x2310) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansMono";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x2317) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansSymbols";
									}
								}
							} else {
								if ($code < 0x2322) {
									if ($code < 0x2320) {
										if ($code < 0x231C) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansMono";
									}
								} else {
									if ($code < 0x2324) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							}
						} else {
							if ($code < 0x237D) {
								if ($code < 0x237B) {
									if ($code < 0x232C) {
										if ($code < 0x232B) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x237C) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansSymbols";
									}
								}
							} else {
								if ($code < 0x23D0) {
									if ($code < 0x23CE) {
										if ($code < 0x2380) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x23E9) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							}
						}
					} else {
						if ($code < 0x262C) {
							if ($code < 0x260A) {
								if ($code < 0x25CC) {
									if ($code < 0x25A1) {
										if ($code < 0x2500) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansMono";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x25CD) {
										return "NotoSansBuhid";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x2614) {
									if ($code < 0x2613) {
										if ($code < 0x260E) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x2624) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansSymbols";
									}
								}
							}
						} else {
							if ($code < 0x263D) {
								if ($code < 0x2638) {
									if ($code < 0x2630) {
										if ($code < 0x262D) {
											return "NotoSansGurmukhiUI";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x263C) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x2670) {
									if ($code < 0x2669) {
										if ($code < 0x2654) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x2672) {
										return "NotoSansSyriacEastern";
									} else {
										return "NotoSansSymbols";
									}
								}
							}
						}
					}
				}
			}
		} else {
			if ($code < 0xFBEA) {
				if ($code < 0x33CD) {
					if ($code < 0x2C00) {
						if ($code < 0x2700) {
							if ($code < 0x26AD) {
								if ($code < 0x26A2) {
									if ($code < 0x269E) {
										if ($code < 0x2690) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x26AA) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x26CF) {
									if ($code < 0x26CE) {
										if ($code < 0x26BD) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x26E2) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansSymbols";
									}
								}
							}
						} else {
							if ($code < 0x2921) {
								if ($code < 0x2776) {
									if ($code < 0x2722) {
										if ($code < 0x271D) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x2794) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							} else {
								if ($code < 0x2AC5) {
									if ($code < 0x2981) {
										if ($code < 0x2963) {
											return "NotoSansSymbols";
										} else {
											return "NanumGothic";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x2B00) {
										return "NanumGothic";
									} else {
										return "NotoSansSymbols2";
									}
								}
							}
						}
					} else {
						if ($code < 0x300C) {
							if ($code < 0x2DE0) {
								if ($code < 0x2D30) {
									if ($code < 0x2D00) {
										if ($code < 0x2C60) {
											return "NotoSansGlagolitic";
										} else {
											return null;
										}
									} else {
										return "NotoSansGeorgian";
									}
								} else {
									if ($code < 0x2D80) {
										return "NotoSansTifinagh";
									} else {
										return "NotoSerifEthiopic";
									}
								}
							} else {
								if ($code < 0x3008) {
									if ($code < 0x3000) {
										if ($code < 0x2F00) {
											return null;
										} else {
											return "NanumGothic";
										}
									} else {
										return "DroidSansFallback";
									}
								} else {
									if ($code < 0x300A) {
										return "NanumGothic";
									} else {
										return "NotoSansLisu";
									}
								}
							}
						} else {
							if ($code < 0x3251) {
								if ($code < 0x3036) {
									if ($code < 0x3021) {
										if ($code < 0x3020) {
											return "DroidSansFallback";
										} else {
											return "NanumGothic";
										}
									} else {
										return "DroidSansFallback";
									}
								} else {
									if ($code < 0x3041) {
										return "NanumGothic";
									} else {
										return "DroidSansFallback";
									}
								}
							} else {
								if ($code < 0x32A3) {
									if ($code < 0x328A) {
										if ($code < 0x3260) {
											return "NanumGothic";
										} else {
											return "DroidSansFallback";
										}
									} else {
										return "NanumGothic";
									}
								} else {
									if ($code < 0x33CB) {
										return "DroidSansFallback";
									} else {
										return "NanumGothic";
									}
								}
							}
						}
					}
				} else {
					if ($code < 0xAB70) {
						if ($code < 0xA8E0) {
							if ($code < 0xA640) {
								if ($code < 0xA4D0) {
									if ($code < 0x4E00) {
										if ($code < 0x4DC0) {
											return "DroidSansFallback";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "DroidSansFallback";
									}
								} else {
									if ($code < 0xA500) {
										return "NotoSansLisu";
									} else {
										return "NotoSansVai";
									}
								}
							} else {
								if ($code < 0xA830) {
									if ($code < 0xA700) {
										if ($code < 0xA6A0) {
											return null;
										} else {
											return "NotoSansBamum";
										}
									} else {
										return null;
									}
								} else {
									if ($code < 0xA880) {
										return "NotoSansGurmukhiUI";
									} else {
										return "NotoSansSaurashtra";
									}
								}
							}
						} else {
							if ($code < 0xA92E) {
								if ($code < 0xA8FC) {
									if ($code < 0xA8F4) {
										if ($code < 0xA8F3) {
											return "NotoSerifDevanagari";
										} else {
											return "NotoSansTamil";
										}
									} else {
										return "NotoSerifDevanagari";
									}
								} else {
									if ($code < 0xA900) {
										return "NotoSansDevanagariUI";
									} else {
										return "NotoSansKayahLi";
									}
								}
							} else {
								if ($code < 0xAB01) {
									if ($code < 0xA9E0) {
										if ($code < 0xA92F) {
											return null;
										} else {
											return "NotoSansKayahLi";
										}
									} else {
										return "NotoSansMyanmarUI";
									}
								} else {
									if ($code < 0xAB30) {
										return "NotoSerifEthiopic";
									} else {
										return null;
									}
								}
							}
						}
					} else {
						if ($code < 0xFB6E) {
							if ($code < 0xFB50) {
								if ($code < 0xFB13) {
									if ($code < 0xFB00) {
										if ($code < 0xAC00) {
											return "NotoSansCherokee";
										} else {
											return "DroidSansFallback";
										}
									} else {
										return null;
									}
								} else {
									if ($code < 0xFB1D) {
										return "NotoSansArmenian";
									} else {
										return "NotoSansHebrew";
									}
								}
							} else {
								if ($code < 0xFB5A) {
									if ($code < 0xFB56) {
										if ($code < 0xFB52) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0xFB66) {
										return "NotoSansArabic";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						} else {
							if ($code < 0xFB9E) {
								if ($code < 0xFB88) {
									if ($code < 0xFB7E) {
										if ($code < 0xFB7A) {
											return "NotoSansArabic";
										} else {
											return "NotoKufiArabic";
										}
									} else {
										return "NotoSansArabic";
									}
								} else {
									if ($code < 0xFB96) {
										return "NotoKufiArabic";
									} else {
										return "NotoSansArabic";
									}
								}
							} else {
								if ($code < 0xFBB2) {
									if ($code < 0xFBA4) {
										if ($code < 0xFBA0) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0xFBE6) {
										return "NotoSansArabic";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						}
					}
				}
			} else {
				if ($code < 0x10380) {
					if ($code < 0xFE77) {
						if ($code < 0xFDFD) {
							if ($code < 0xFD3E) {
								if ($code < 0xFC5E) {
									if ($code < 0xFC00) {
										if ($code < 0xFBFC) {
											return "NotoSansArabic";
										} else {
											return "NotoKufiArabic";
										}
									} else {
										return "NotoSansArabic";
									}
								} else {
									if ($code < 0xFC64) {
										return "NotoKufiArabic";
									} else {
										return "NotoSansArabic";
									}
								}
							} else {
								if ($code < 0xFDF3) {
									if ($code < 0xFDF2) {
										if ($code < 0xFD50) {
											return "NotoSansNKo";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoSansThaana";
									}
								} else {
									if ($code < 0xFDFC) {
										return "NotoSansArabic";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						} else {
							if ($code < 0xFE70) {
								if ($code < 0xFE20) {
									if ($code < 0xFE10) {
										if ($code < 0xFE00) {
											return "NotoSansThaana";
										} else {
											return null;
										}
									} else {
										return "DroidSansFallback";
									}
								} else {
									if ($code < 0xFE30) {
										return null;
									} else {
										return "DroidSansFallback";
									}
								}
							} else {
								if ($code < 0xFE73) {
									if ($code < 0xFE72) {
										if ($code < 0xFE71) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0xFE74) {
										return "NotoSansArabic";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						}
					} else {
						if ($code < 0xFEFF) {
							if ($code < 0xFE7C) {
								if ($code < 0xFE7A) {
									if ($code < 0xFE79) {
										if ($code < 0xFE78) {
											return "NotoSansArabic";
										} else {
											return "NotoKufiArabic";
										}
									} else {
										return "NotoSansArabic";
									}
								} else {
									if ($code < 0xFE7B) {
										return "NotoKufiArabic";
									} else {
										return "NotoSansArabic";
									}
								}
							} else {
								if ($code < 0xFE7F) {
									if ($code < 0xFE7E) {
										if ($code < 0xFE7D) {
											return "NotoKufiArabic";
										} else {
											return "NotoSansArabic";
										}
									} else {
										return "NotoKufiArabic";
									}
								} else {
									if ($code < 0xFE80) {
										return "NotoSansArabic";
									} else {
										return "NotoKufiArabic";
									}
								}
							}
						} else {
							if ($code < 0x10140) {
								if ($code < 0xFFFC) {
									if ($code < 0xFFF9) {
										if ($code < 0xFF01) {
											return null;
										} else {
											return "DroidSansFallback";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x10000) {
										return null;
									} else {
										return "NotoSansLinearB";
									}
								}
							} else {
								if ($code < 0x102E0) {
									if ($code < 0x102A0) {
										if ($code < 0x10280) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansLycian";
										}
									} else {
										return "NotoSansCarian";
									}
								} else {
									if ($code < 0x10330) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansGothic";
									}
								}
							}
						}
					}
				} else {
					if ($code < 0x111E1) {
						if ($code < 0x10A00) {
							if ($code < 0x104B0) {
								if ($code < 0x10450) {
									if ($code < 0x10400) {
										if ($code < 0x103A0) {
											return "NotoSansUgaritic";
										} else {
											return "NotoSansOldPersian";
										}
									} else {
										return "NotoSansDeseret";
									}
								} else {
									if ($code < 0x10480) {
										return "NotoSansShavian";
									} else {
										return "NotoSansOsmanya";
									}
								}
							} else {
								if ($code < 0x10900) {
									if ($code < 0x10840) {
										if ($code < 0x10800) {
											return "NotoSansOsage";
										} else {
											return "NotoSansCypriot";
										}
									} else {
										return "NotoSansImperialAramaic";
									}
								} else {
									if ($code < 0x10920) {
										return "NotoSansPhoenician";
									} else {
										return "NotoSansLydian";
									}
								}
							}
						} else {
							if ($code < 0x10C00) {
								if ($code < 0x10B40) {
									if ($code < 0x10B00) {
										if ($code < 0x10A60) {
											return "NotoSansKharoshthi";
										} else {
											return "NotoSansOldSouthArabian";
										}
									} else {
										return "NotoSansAvestan";
									}
								} else {
									if ($code < 0x10B60) {
										return "NotoSansInscriptionalParthian";
									} else {
										return "NotoSansInscriptionalPahlavi";
									}
								}
							} else {
								if ($code < 0x11080) {
									if ($code < 0x11000) {
										if ($code < 0x10E60) {
											return "NotoSansOldTurkic";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansBrahmi";
									}
								} else {
									if ($code < 0x11100) {
										return "NotoSansKaithi";
									} else {
										return "NotoSansChakma";
									}
								}
							}
						}
					} else {
						if ($code < 0x1F100) {
							if ($code < 0x16800) {
								if ($code < 0x13000) {
									if ($code < 0x12000) {
										if ($code < 0x11303) {
											return "NotoSansSinhala";
										} else {
											return "NotoSansTamil";
										}
									} else {
										return "NotoSansCuneiform";
									}
								} else {
									if ($code < 0x14400) {
										return "NotoSansEgyptianHieroglyphs";
									} else {
										return "NotoSansAnatolianHieroglyphs";
									}
								}
							} else {
								if ($code < 0x1E900) {
									if ($code < 0x1E000) {
										if ($code < 0x1D300) {
											return "NotoSansBamum";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansGlagolitic";
									}
								} else {
									if ($code < 0x1F000) {
										return "NotoSansAdlamUnjoined";
									} else {
										return "NotoSansSymbols2";
									}
								}
							}
						} else {
							if ($code < 0x1F550) {
								if ($code < 0x1F54A) {
									if ($code < 0x1F546) {
										if ($code < 0x1F30D) {
											return "NotoSansSymbols";
										} else {
											return "NotoSansSymbols2";
										}
									} else {
										return "NotoSansSymbols";
									}
								} else {
									if ($code < 0x1F54F) {
										return "NotoSansSymbols2";
									} else {
										return "NotoSansSymbols";
									}
								}
							} else {
								if ($code < 0x1F700) {
									if ($code < 0x1F650) {
										if ($code < 0x1F610) {
											return "NotoSansSymbols2";
										} else {
											return "NotoSansSymbols";
										}
									} else {
										return "NotoSansSymbols2";
									}
								} else {
									if ($code < 0x1F780) {
										return "NotoSansSymbols";
									} else {
										return "NotoSansSymbols2";
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
