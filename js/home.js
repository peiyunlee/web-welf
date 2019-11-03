$(document).ready(function () {

	/////////////////////////////////////// clickscroll
	$('#hbottom').click(function () {
		$('html,body').animate({
			scrollTop: $('#sec_story').offset().top
		}, 1000);
	});


	///////////////////////////////////////// slick

	$('.con_chcontent').slick({
		infinite: true,
		slidesToShow: 3,
		variableWidth: true,
		centerMode: true,
		centerPadding: '100px',
		prevArrow: $('.btn_cleft'),
		nextArrow: $('.btn_cright'),
		draggable: false,
		speed: 500,
		useCSS: true,
		useTransform: true,
		responsive: [

			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					variableWidth: false,
					centerPadding: '0px',
					arrows: false,
				}
			},]
	});

	$('.con_chlist').on('edge', function (event, slick, direction) {
		console.log('aa');
		// left
	});



	///////////////////////////////////// ScrollMagic
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

	/////////////////////////////////////rock with mouse move

	var rockScene1 = new ScrollMagic.Scene({
		triggerElement: "#sec_story",
		offset: 100,
	}).addTo(controller);

	rockScene1.on("enter", function (event) {

		//rock with mouse move
		var rect = $('#sec_story')[0].getBoundingClientRect();
		var mouse = { x: 0, y: 0, moved: false };
		$("#sec_story").mousemove(function (e) {
			mouse.moved = true;
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		});
		TweenLite.ticker.addEventListener('tick', function () {
			if (mouse.moved) {
				parallaxIt(".img_sbganim", -150);
			}
			mouse.moved = false;
		});
		function parallaxIt(target, movement) {
			TweenMax.to(target, 0.3, {
				x: (mouse.x - rect.width / 2) / rect.width * movement - rect.width / 2.5,
				y: (mouse.y - rect.height / 2) / rect.height * movement - rect.height / 5
			});
		}
		$(window).on('resize scroll', function(){
			rect = $('#sec_story')[0].getBoundingClientRect();
		  })
	});

	var rockScene2 = new ScrollMagic.Scene({
		triggerElement: "#sec_character",
		offset: 100,
	}).addTo(controller);

	rockScene2.on("enter", function (event) {

		//rock with mouse move
		var rect = $('#sec_character')[0].getBoundingClientRect();
		var mouse = { x: 0, y: 0, moved: false };
		$("#sec_character").mousemove(function (e) {
			mouse.moved = true;
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		});
		TweenLite.ticker.addEventListener('tick', function () {
			if (mouse.moved) {
				parallaxIt(".img_cbganim", -150);
			}
			mouse.moved = false;
		});
		function parallaxIt(target, movement) {
			TweenMax.to(target, 0.3, {
				x: (mouse.x - rect.width / 2) / rect.width * movement - rect.width / 2.5,
				y: (mouse.y - rect.height / 2) / rect.height * movement - rect.height / 6
			});
		}
		$(window).on('resize scroll', function(){
			rect = $('#sec_character')[0].getBoundingClientRect();
		  })
	});
});