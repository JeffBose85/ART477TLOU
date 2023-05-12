var passed = false;

$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();

    if(scrollPos >= 60 && !passed) {
        passed = true;
        $('.header').animate({opacity: '0%'},500);
        $('.scrollguide').animate({opacity: '0%'},500);
    }
    if(scrollPos < 60 && passed) {
        passed = false;
        $('.header').animate({opacity: '100%'},500);
        $('.scrollguide').animate({opacity: '100%'},500);
    }

});