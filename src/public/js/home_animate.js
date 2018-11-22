$.fn.isInView = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
}
$(window).scroll(function() {
    if($("#top-split").length) {
        if($("#top-split").isInView()) {
            $(".slideLeft").css("transform", "translateX(0%)");
            $(".slideRight").css("transform", "translateX(0%)");
        }
    }
});
