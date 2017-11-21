$(document).ready(function () {
    $("#btn").click(function () {
        $('html,body').animate({
            scrollTop: $(".features-section").offset().top
        }, 1000);
    });

    window.sr = ScrollReveal();
    sr.reveal('.screenshot-row', {duration: 1000});
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 300) {
        $("#nav").addClass("jQ_nav");
    } else {
        $("#nav").removeClass("jQ_nav")
    }
});
