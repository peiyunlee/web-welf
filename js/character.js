$(document).ready(function () {

	// ScrollMagic
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#sec_intro1",
		offset:100,
    }).setClassToggle("#nav", "nav_bgcolor1").addTo(controller);
    
});