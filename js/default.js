$(document).ready(function() {
    $("#btn").click(function() {
        $('html,body').animate({
                scrollTop: $(".features-section").offset().top
            }, 1000);
    });
});