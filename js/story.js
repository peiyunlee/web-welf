$(document).ready(function () {

	// ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	new ScrollMagic.Scene({
		triggerElement: "#section1",
		offset:100,
	}).setClassToggle("#nav", "nav_bgcolor3").addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:-475,
	}).setClassToggle("#img_secbg", "img_secbg_notfixed").addTo(controller);
	
});