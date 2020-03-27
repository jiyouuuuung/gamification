$(window).load(onLoad)
		.resize(onResize);

function onLoad()
{
	resetIntro();
	setTimeout(introMotion,1000);
	//setTimeout(outroMotion_test,1000);
}

function onResize()
{

}

$(function(){
	
});

function introMotion()
{
	//equalInterVal = setInterval(introEquals,50);
	$(".game_ui .bg_glow").css({"transition":"all 1.0s 0.3s", "opacity":1});
	$(".game_ui .circle_wrapper .group05 .c09").css({"transition":"all 0.4s", "opacity":1});
	$(".game_ui .circle_wrapper .group04 .c07").css({"transition":"all 0.4s 0.2s", "opacity":1, "transform":"scale(1.0)"});
	$(".game_ui .circle_wrapper .group03 .c06").css({"transition":"all 0.6s 0.2s", "opacity":1, "transform":"scale(1.0)"});

	var rectHeight = $(".game_ui .circle_wrapper .group02 .valign").outerHeight();

	$(".game_ui .circle_wrapper .rect").css({"transition":"opacity 0.1s 0.4s, height 0.5s 0.3s", "opacity":1,"height":rectHeight + "px"});
	
	$(".game_ui .lightflare").css({"transition":"all 3.0s 0.5s", "opacity":1});
	setTimeout(function(){
		lightInterVal = setInterval(introLights,50);
	},1000);

	setTimeout(function(){
		$(".game_ui .circle_wrapper .group02 .c03").css({"transition":"opacity 0.8s","opacity":1});
		$(".game_ui .circle_wrapper .rect").css({"transition":"transform 0.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"translate(-50%, -50%) rotate(-180deg)"});

		setTimeout(function(){
			$(".game_ui .circle_wrapper .group01").css({"transition":"all 0.5s", "opacity":"1"});
			$(".game_ui .circle_wrapper .group01 .c01").css({"transition":"all 0.5s", "opacity":1, "transform":"scale(1.0)"});
			$(".game_ui .circle_wrapper .group01 .c02").css({"transition":"all 0.5s 0.2s", "opacity":1, "transform":"scale(1.0)"});
		},400);
		setTimeout(function(){
			$(".game_ui .circle_wrapper .rect").css({"transition":"width 0.5s 0.8s", "width":rectHeight + "px"});
		},800);
	},1000);

	setTimeout(function(){
		$(".game_ui .circle_wrapper .group01").css({"transition":"all 0.5s", "opacity":""});
		$(".game_ui .circle_wrapper .group02 .c03").css({"transition":"all 0.5s", "opacity":""});

		$(".game_ui .circle_wrapper .group05 .c09 .c10").css({"transition":"all 0.5s", "opacity":1, "transform":"scale(1.0)"});
		$(".game_ui .circle_wrapper .group06 .c11").css({"transition":"all 0.5s", "opacity":1, "transform":"scale(1.0)"});
		$(".game_ui .circle_wrapper .group06 .c11 .c-center").css({"transition":"all 0.5s", "opacity":1, "transform":"scale(1.0)"});
		$(".game_ui .circle_wrapper .group04 .c07 .thin-glow").css({"transition":"all 0.5s 0.2s", "opacity":"", "transform":"scale(1.0)"});

		$(".game_ui .circle_wrapper .group02 .r01").css({"transition":"all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)", "width":"", "height":"", "opacity":"", "transform":"translate(-50%, -50%) rotate(-225deg)"});
		$(".game_ui .circle_wrapper .group04 .r02").css({"transition":"all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)", "width":"", "height":"", "opacity":"", "transform":"translate(-50%, -50%) rotate(-90deg)"});
		$(".game_ui .circle_wrapper .group06 .r03").css({"transition":"all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)", "width":"", "height":"", "opacity":"", "transform":"translate(-50%, -50%) rotate(-225deg)"});
		
		$(".game_ui .circle_wrapper .group04 .equal").css({"transition":"all 0.5s", "opacity":""});
		setTimeout(function(){
			equalInterVal = setInterval(introEquals,50);
		},300);

		setTimeout(function(){
			var rndRotate = Math.floor(Math.random() * 360) + 180;
			$(".game_ui .circle_wrapper .group03 .c06 .dragger_img01").css({"transition":"all 1s", "transform":"rotate(" + rndRotate + "deg)", "opacity":1});
			rndRotate = Math.floor(Math.random() * 360) + 360;
			$(".game_ui .circle_wrapper .group04 .c07 .dragger_img02").css({"transition":"all 1s", "transform":"rotate(-" + rndRotate + "deg)", "opacity":1});
			rndRotate = Math.floor(Math.random() * 360) + 360;
			$(".game_ui .circle_wrapper .group05 .c09 .dragger_img03").css({"transition":"all 1s", "transform":"rotate(" + rndRotate + "deg)", "opacity":1});

			$(".game_ui .circle_wrapper .group03 .c06 .dragger_img01 .img_sq img").eq(1).css({"transition":"all 0.4s 0.3s", "opacity":1});
			$(".game_ui .circle_wrapper .group04 .c07 .dragger_img02 .img_sq img").eq(1).css({"transition":"all 0.4s 0.3s", "opacity":1});
			$(".game_ui .circle_wrapper .group05 .c09 .dragger_img03 .img_sq img").eq(1).css({"transition":"all 0.4s 0.3s", "opacity":1});
		},700);
	},3500);

	setTimeout(function(){
		outroMotion_test();
	},8000);
}

function resetIntro()
{
	$(".game_ui .lightflare").css({"opacity":0});
	$(".game_ui .bg_glow").css({"opacity":0});
	$(".game_ui .circle_wrapper .group01 .c01").css({"opacity":0, "transform":"scale(0.865)"});
	$(".game_ui .circle_wrapper .group01 .c02").css({"opacity":0, "transform":"scale(0.98)"});

	
	$(".game_ui .circle_wrapper .group02 .c03").css({"opacity":0});	
	$(".game_ui .circle_wrapper .group02 .r01").css({"opacity":0, "width":"1px", "height":"1px", "border":"1px solid #9bd1ff", "transform":"translate(-50%, -50%) rotate(0deg)"});
	
	$(".game_ui .circle_wrapper .group03 .c06").css({"opacity":0, "transform":"scale(0.59)"});
	$(".game_ui .circle_wrapper .group03 .c06 .dragger_img01").css({"opacity":0});
	$(".game_ui .circle_wrapper .group03 .c06 .circle_inner").css({"opacity":0});
	
	
	$(".game_ui .circle_wrapper .group04 .r02").css({"opacity":0, "width":"1px", "height":"1px", "border":"1px solid #9bd1ff"});
	$(".game_ui .circle_wrapper .group04 .c07").css({"opacity":0, "transform":"scale(0.73)"});
	$(".game_ui .circle_wrapper .group04 .c07 .dragger_img02").css({"opacity":0});
	$(".game_ui .circle_wrapper .group04 .c07 .thin-glow").css({"opacity":0, "transform":"scale(1.08)"});
	$(".game_ui .circle_wrapper .group04 .equal").css({"opacity":0});

	$(".game_ui .circle_wrapper .group05 .c09").css({"opacity":0});
	$(".game_ui .circle_wrapper .group05 .c09 .dragger_img03").css({"opacity":0});
	$(".game_ui .circle_wrapper .group05 .c09 .circle_inner").css({"opacity":0});
	$(".game_ui .circle_wrapper .group05 .c09 .c10").css({"opacity":0, "transform":"scale(0.6)"});

	
	$(".game_ui .circle_wrapper .group06 .r03").css({"opacity":0, "width":"1px", "height":"1px", "border":"1px solid #9bd1ff", "transform":"translate(-50%, -50%) rotate(0deg)"});
	$(".game_ui .circle_wrapper .group06 .c11").css({"opacity":0, "transform":"scale(0.74)"});
	$(".game_ui .circle_wrapper .group06 .c11 .c-center").css({"opacity":0, "transform":"scale(1.3)"});

	$(".game_success").css({"display":"none"});
	$(".game_success .t_cross .t-blue").css({"margin-right":"86px", "margin-top":"84px"});
	$(".game_success .t_cross .t-yellow").css({"margin-left":"85px", "margin-bottom":"87px"});
	$(".game_success .t_cross > .t-img").css({"opacity":0, "transform":"scale(0.7)"});
	$(".game_success .t_cross > .t-intersect_light").css({"opacity":0});

	$(".game_success .bg-line").css({"opacity":0});
	$(".game_success .bg-flare").css({"opacity":0});
	$(".game_success .bg-flare .img_sq img").css({"opacity":0, "transform":"scale(1.5)"});
	$(".game_success .t-flare").css({"opacity":0});
	$(".game_success .motif_sq").css({"opacity":0});
	$(".game_success .motif").css({"opacity":0, "transform":"scale(0.0)"});
	
	
	
	var originHeight = $(window).outerWidth() / 16 * 9;
	var reMargin = ($(window).outerHeight() - originHeight) / 2;
	$(".game_success .img_sq img").css({"margin-top":reMargin + "px"});
	
}

function outroMotion()
{
	console.log("outroMotion");
	$(".game_ui .circle_wrapper .group03 .c06 .dragger_img01").css({"transition":"all 1s 2s", "transform":"rotate(0deg)"});
	$(".game_ui .circle_wrapper .group04 .c07 .dragger_img02").css({"transition":"all 1s 1s", "transform":"rotate(0deg)"});
	$(".game_ui .circle_wrapper .group05 .c09 .dragger_img03").css({"transition":"all 1s", "transform":"rotate(0deg)"});

	setTimeout(function(){
		clearInterval(lightInterVal);
		clearInterval(equalInterVal);
		$(".game_success").css({"display":"block", "opacity":0, "background":"#000"}).animate({"opacity":1, "background":"#fff"},300, function(){
			$(this).animate({"background":"#000"},300);
		});
		
		$(".game_success .t_cross").css({"transition":"all 0.5s", "opacity":1});

		$(".game_success .t_cross .t-blue").css({"transition":"all 0.5s", "margin-right":"-28px", "margin-top":"-28px", "transform":"scale(0.7)"});
		$(".game_success .t_cross .t-yellow").css({"transition":"all 0.5s", "margin-left":"-28px", "margin-bottom":"-28px", "transform":"scale(0.7)"});
		$(".game_success .t_cross .intersect").css({"transition":"all 0.2s 0.3s", "transform":"scale(0.7)"});
		setTimeout(function(){
			$(".game_success .t_cross .t-blue").css({"transition":"all 0.5s", "margin-right":"-28px", "margin-top":"-28px", "transform":"scale(1.0)", "opacity":0});
			$(".game_success .t_cross .t-yellow").css({"transition":"all 0.5s", "margin-left":"-28px", "margin-bottom":"-28px", "transform":"scale(1.0)", "opacity":0});
			$(".game_success .t_cross .intersect").css({"transition":"all 0.5s", "transform":"scale(1.0)", "opacity":0});

			$(".game_success .t_cross > .t-img").css({"transition":"all 0.5s", "transform":"scale(1.0)", "opacity":1});

			setTimeout(function(){
				$(".game_success .t_cross > .t-img").css({"transition":"all 0.5s", "transform":"scale(0)", "opacity":1});

				$(".game_success .bg-line").css({"transition":"none", "opacity":0, "transform":"scale(4.0)"});
				$(".game_success .bg-flare").css({"transition":"none", "opacity":0, "transform":"scale(4.0)"});
				setTimeout(function(){
					$(".game_success .bg-line").css({"transition":"all 0.6s", "transform":"scale(1.0)", "opacity":1});
					$(".game_success .bg-flare").css({"transition":"all 0.6s", "transform":"scale(1.0)", "opacity":1});

					outroMotion_test();
				},100);
			},500);
		},500);
	},3000);
}

function outroMotion_test()
{

	/*$(".game_success").css({"display":"block", "opacity":0});
	setTimeout(function(){
		$(".game_success").css({"transition":"all 0.5s", "opacity":1, "background":"#fff"});
		setTimeout(function(){
			$(".game_success").css({"transition":"all 0.5s", "opacity":1, "background":"#000"});
		},400);
	},100);*/
	
	$(".game_ui .circle_wrapper .group03 .c06 .dragger_img01").css({"transition":"all 1s 2s", "transform":"rotate(0deg)"});
	$(".game_ui .circle_wrapper .group04 .c07 .dragger_img02").css({"transition":"all 1s 1s", "transform":"rotate(0deg)"});
	$(".game_ui .circle_wrapper .group05 .c09 .dragger_img03").css({"transition":"all 1s", "transform":"rotate(0deg)"});

	setTimeout(function(){
		clearInterval(lightInterVal);
		clearInterval(equalInterVal);
		$(".game_success").css({"display":"block", "opacity":0, "background":"#000"}).animate({"opacity":1, "background":"#fff"},300, function(){
			$(this).animate({"background":"#000"},300);
		});

		$(".game_success .t_cross").css({"transition":"all 0.5s", "opacity":1});

		$(".game_success .t_cross .t-blue").css({"transition":"all 0.5s", "margin-right":"-19px", "margin-top":"-19px", "transform":"scale(0.7)"});
		$(".game_success .t_cross .t-yellow").css({"transition":"all 0.5s", "margin-left":"-19px", "margin-bottom":"-19px", "transform":"scale(0.7)"});
		$(".game_success .t_cross .intersect").css({"transition":"all 0.2s 0.3s", "transform":"scale(0.7)"});



		setTimeout(function(){
			$(".game_success .t_cross .t-blue").css({"transition":"all 0.5s", "margin-right":"-28px", "margin-top":"-28px", "transform":"scale(1.0)", "opacity":0});
			$(".game_success .t_cross .t-yellow").css({"transition":"all 0.5s", "margin-left":"-28px", "margin-bottom":"-28px", "transform":"scale(1.0)", "opacity":0});
			$(".game_success .t_cross .intersect").css({"transition":"all 0.5s", "transform":"scale(1.0)", "opacity":0});

			$(".game_success .t_cross > .t-img").css({"transition":"all 0.5s", "transform":"scale(1.0)", "opacity":1});
			tImgInterval = setInterval(tImgMotion,100);
			
			/*bgLineInterval = setInterval(bgLineMotion01,1000);
			setTimeout(function(){
				bgLineInterval = setInterval(bgLineMotion02,1000);
			},300);
			setTimeout(function(){
				bgLineInterval = setInterval(bgLineMotion03,1000);
			},600);*/
			bgLineInterval = setInterval(bgLineMotion,200);
			$(".game_success .bg-flare").css({"transition":"all 0.2s", "opacity":1});
			flareInterval = setInterval(flareMotion,350);	

			setTimeout(function(){
				$(".game_success .t_cross > .t-img").css({"transition":"all 0.5s", "transform":"scale(0)", "opacity":1});
				$(".game_success .bg-line").css({"transition":"all 0.3s", "opacity":1});

				setTimeout(function(){
					clearInterval(tImgInterval);
					$(".game_success .motif_sq").css({"opacity":1});
					ifInterval = setInterval(ifMotion,50);
					setTimeout(function(){
						clearInterval(ifInterval);
						clearInterval(bgLineInterval);
						$(".game_success .motif_to_logo").css({"opacity":1});
						setTimeout(function(){
							logoInterval = setInterval(logoMotion,50);
						},100);
						$(".game_success .bg-line").css({"transition":"all 0.3s", "opacity":0});
						$(".game_success .motif_sq").css({"transition":"all 0.3s", "opacity":0});
						endAticle();
					},1500);
				},200);
			},500);
		},500);
	},3000);
}


var lightInterVal;
var lightIdx = 0;
function introLights()
{
	$(".game_ui .lightflare img").eq(lightIdx).css({"opacity":0});
	lightIdx++;
	if ($(".game_ui .lightflare img").length == lightIdx)
	{
		lightIdx = 0;
	}
	$(".game_ui .lightflare img").eq(lightIdx).css({"opacity":1});	
}

var equalInterVal;
var equalIdx = 0;
function introEquals()
{
	$(".game_ui .circle_wrapper .equal .img_sq img").eq(equalIdx).css({"opacity":0});
	equalIdx++;
	if ($(".game_ui .circle_wrapper .equal .img_sq img").length == equalIdx)
	{
		equalIdx = 0;
	}
	$(".game_ui .circle_wrapper .equal .img_sq img").eq(equalIdx).css({"opacity":1});	
}

var tImgInterval;
var tImgIdx = 0;
function tImgMotion()
{
	tImgIdx++;
	if (tImgIdx % 2 == 0)
	{
		$(".game_success .t_cross > .t-img .img_sq img").eq(1).css({"opacity":0});
	}else{
		$(".game_success .t_cross > .t-img .img_sq img").eq(1).css({"opacity":1});
	}
}

var bgLineInterval;
var bgLineIdx = 0;
function bgLineMotion()
{
	bgLineIdx++;
	$(".game_success .bg-line .img_sq img").css({"transition":"none", "opacity":0, "transform":"scale(1.0)"});
	if (bgLineIdx % 3 == 0)
	{
		$(".game_success .bg-line .img_sq img").eq(0).css({"transition":"all 0.2s linear", "opacity":1, "transform":"scale(0.5)"});
	}else if (bgLineIdx % 3 == 1){
		$(".game_success .bg-line .img_sq img").eq(1).css({"transition":"all 0.2s linear", "opacity":1, "transform":"scale(0.5)"});
	}else{
		$(".game_success .bg-line .img_sq img").eq(2).css({"transition":"all 0.2s linear", "opacity":1, "transform":"scale(0.5)"});
	}
}

var ifInterval;
var ifIdx = 0;
function ifMotion()
{
	ifIdx++;
	if (ifIdx == $(".game_success .motif_sq .img_sq img").length)
	{
		ifIdx = 0;
	}
	$(".game_success .motif_sq .img_sq img").css({"opacity":0});
	$(".game_success .motif_sq .img_sq img").eq(ifIdx).css({"opacity":1});
}

var flareIntrerval;
var flareIdx = 0;
function flareMotion()
{
	flareIdx++;
	if (flareIdx == $(".game_success .bg-flare .img_sq img").length)
	{
		clearInterval(flareInterval);
	}
	if (flareIdx > 7)
	{
		$(".game_success .bg-flare .img_sq img").eq(flareIdx).css({"opacity":1, "transform":"scale(0.2)"});
	}else{
		$(".game_success .bg-flare .img_sq img").eq(flareIdx).css({"opacity":1});
	}

	setTimeout(function(){
		if (flareIdx > 7)
		{
			$(".game_success .bg-flare .img_sq img").eq(flareIdx).css({"transition":"transform 0.6s linear, opacity 0.3s linear 0.5s", "transform":"scale(1.0)", "opacity":"0"});
		}else{
			$(".game_success .bg-flare .img_sq img").eq(flareIdx).css({"transition":"transform 0.6s linear, opacity 0.3s linear 0.5s", "transform":"scale(0.2)", "opacity":"0"});
		}
	},50);
}

var logoIntrerval;
var logoIdx = 0;
function logoMotion()
{
	logoIdx++;
	if (logoIdx == $(".game_success .motif_to_logo .img_sq img").length)
	{
		clearInterval(logoInterval);
	}else{
		$(".game_success .motif_to_logo .img_sq img").css({"opacity":0});
		$(".game_success .motif_to_logo .img_sq img").eq(logoIdx).css({"opacity":1});
	}

	
}

var aticleIdx = 0;
function endAticle()
{
	
	var rectArray = $(".game_success .motif > .valign").length;
	for (i = 0; i < rectArray ; i++)
	{
		var imgArray = $(".game_success .motif > .valign").eq(i).find(".img_sq img").length;
		for (j = 0; j < imgArray ; j++ )
		{
			var rndScale = Math.floor(Math.random() * 100) / 100;
			$(".game_success .motif > .valign").eq(i).find(".img_sq img").eq(j).css({"transition":"none", "transform":"translate(0px, 0px) scale(" + rndScale + ")", "opacity":1});
		}
	}
	setTimeout(function(){
		$(".game_success .motif > .valign").each(function(){
			$(".game_success .motif > .valign").eq($(this).index()).find(".img_sq img").each(function(){
				var rndTime = Math.floor(Math.random() * 500) + 1000;
				var rndTime2 = Math.floor(Math.random() * 500) + 500;
				var rndX = Math.floor(Math.random() * ($(window).outerWidth() / 5)) + 100;
				var rndY = Math.floor(Math.random() * ($(window).outerHeight() / 5)) + 100;
				var rndScale = Math.floor(Math.random() * 50) / 100;
				
				var rndPosition = Math.floor(Math.random() * 8);
				switch (rndPosition)
				{
					case 0:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(" + rndX + "px, " + rndY + "px) scale(0)", "opacity":0});
						break;
					}
					case 1:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(-" + rndX + "px, " + rndY + "px) scale(0)", "opacity":0});
						break;
					}
					case 2:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(" + rndX + "px, -" + rndY + "px) scale(0)", "opacity":0});
						break;
					}
					case 3:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(-" + rndX + "px, -" + rndY + "px) scale(0)", "opacity":0});
						break;
					}
					case 4:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(" + rndX + "px, 0px) scale(0)", "opacity":0});
						break;
					}
					case 5:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(-" + rndX + "px, 0px) scale(0)", "opacity":0});
						break;
					}
					case 6:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(0px, " + rndY + "px) scale(0)", "opacity":0});
						break;
					}
					case 7:
					{
						$(this).css({"transition":"transform " + rndTime + "ms, opacity " + rndTime2 + "ms 500ms", "transform":"translate(0px, -" + rndY + "px) scale(0)", "opacity":0});
						break;
					}
				}
			});
		});

		$(".game_success .motif").css({"transition":"all 400ms", "opacity":"1", "transform":"scale(1.0)"});
	},100);
}