$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".sw", "upshow").addIndicators().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".wdm", "upshow").addIndicators().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle("#iframe", "upshow").addIndicators().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".ca","upshow").addIndicators().reverse(false).addTo(controller);
});