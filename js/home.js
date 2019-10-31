$(document).ready(function () {

	// clickscroll
	$('#hbottom').click(function () {
		$('html,body').animate({
			scrollTop: $('#sec_story').offset().top
		}, 1000);
	});


	// slick
	// $('.con_ccontent').slick({
	// 	// prevArrow: '<button class="btn_c btn_cleft">',
	// 	// nextArrow: '<button class="btn_c btn_cright">',
	// 	// slidesToShow: 5,
	// });


	// ScrollMagic
	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: "#sec_story",
		offset: 100,
	}).setClassToggle("#nav", "nav_bgcolor1").addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle("#nav", "nav_bgcolor2").addTo(controller);

	// anim
	new ScrollMagic.Scene({
		triggerElement: "#sec_story",
		offset: 100,
	}).setClassToggle(".ar_sl", "showtoup1").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_character",
		offset: 100,
	}).setClassToggle(".con_cheader", "showtoup2").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_character",
		offset: 100,
	}).setClassToggle(".con_ccontent", "showup").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle(".ar_pl", "showtoup1").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle(".p_prp", "showtoright1").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle("#box_prc1", "showtoright2").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle("#box_prc2", "showtoright3").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle("#box_prc3", "showtoright4").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec_play",
		offset: 100,
	}).setClassToggle(".a_prahref", "showtoright5").reverse(false).addTo(controller);

});