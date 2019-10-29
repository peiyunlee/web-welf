
$(document).ready(function () {
  
});
$(document).ready(function () {

	// clickscroll
	$('#hbottom').click(function () {
		$('html,body').animate({ 
		  scrollTop: $('#sec_story').offset().top }, 1000);
		});

	// ScrollMagic
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#sec_story",
		offset:100,
	}).setClassToggle("#nav", "nav_bgcolor1").addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset:100,
	}).setClassToggle("#nav", "nav_bgcolor2").addTo(controller);

});