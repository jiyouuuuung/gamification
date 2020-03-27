 $(function() {
	fn_scroll_plugin();

});

function fn_scroll_plugin() {
	$("#section-ranking .scroll_wrap").mCustomScrollbar({
		theme : "light-3",
		setLeft: "0px",
		mouseWheelPixels : 300, 
		scrollInertia : 200 
	});

}