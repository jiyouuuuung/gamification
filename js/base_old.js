$(function(){
	var flareInterval;
	var flareSrc = 0;
	flareInterval = setInterval(function(){
		flareSrc += 1;
		if (flareSrc > 19)
		{
			flareSrc = 0;
			//clearInterval(flareInterval);
		}
		if (flareSrc < 10)
		{
			$(".game_ui .lightflare img").attr("src", "./images/lightflare00" + flareSrc + ".png");
		}else if (flareSrc < 100)
		{
			$(".game_ui .lightflare img").attr("src", "./images/lightflare0" + flareSrc + ".png");
		}
	}, 20);
	var equalInterval;
	var equalSrc = 0;
	equalInterval = setInterval(function(){
		equalSrc += 1;
		if (equalSrc > 18)
		{
			equalSrc = 0;
			//clearInterval(equalInterval);
		}
		if (equalSrc < 10)
		{
			$(".game_ui .circle_wrapper .c09 .equal").css({"background-image": "url('./images/inner_equal00" + equalSrc + ".png')"});
		}else if (equalSrc < 100)
		{
			$(".game_ui .circle_wrapper .c09 .equal").css({"background-image": "url('./images/inner_equal0" + equalSrc + ".png')"});
		}
	}, 20);
});