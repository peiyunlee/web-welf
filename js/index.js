
// $(document).ready(function () {
//   $('#hbottom').click(function () {
//     $('html,body').animate({ 
//       scrollTop: $('#sec_story').offset().top }, 1000);
//     });
// });
$(document).ready(function () {

	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#sec_story",
	}).setClassToggle("#nav", "nav_bgcolor1").addIndicators().addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
	}).on("add", function (event) {
		$('#nav').classList.remove("mystyle");
	});

});