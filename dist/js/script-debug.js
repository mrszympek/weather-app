$(document).ready(function() {
    $("#btn").click(function() {
        $('html,body').animate({
                scrollTop: $(".features-section").offset().top
            }, 1000);
    });

    window.sr = ScrollReveal();
    sr.reveal('.screenshot-row', { duration: 1000});
});


