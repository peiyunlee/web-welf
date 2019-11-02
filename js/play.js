$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".sw", "upshow").addindicator().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".wdm", "upshow").addindicator().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle("#iframe", "upshow").addindicator().reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".ca", "upshow").addindicator().reverse(false).addTo(controller);
});