
$(document).ready(function() {
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > 700) {
            $(".home-img").attr("src", "/pics/home-break.jpg");
            $(".jumbotron>.home-img.sticky-top").css("top", "11%");
        } else if(scrollTop > 121) {
            $(".nav, .home-img").addClass("sticky-top");
            $(".jumbotron").css("height", $(".home-img").height());
            $(".nav>svg").css("transform", "translateX(0%)");
            $(".home-img").attr("src", "/pics/home-banner.jpg");
        } else {
            $(".nav, .home-img").removeClass("sticky-top");
            $(".nav>svg").css("transform", "translateX(-125%)");
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});
