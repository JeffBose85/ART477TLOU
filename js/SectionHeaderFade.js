//Boolean for if the window has scrolled passed a certain point
var passed = false;

//The amount to for the window to scroll before the fade
var scrollLimit = 60;

//When any scroll event happens
$(window).scroll(function(){
    //How far the window is scrolled
    var scrollPos = $(document).scrollTop();

    //If scroll position to PASSED the limit, fade out the title and scroll guide
    if(scrollPos >= scrollLimit && !passed) {
        //Set passed to true
        passed = true;

        //Header & Scroll animation
        $('.header').animate({opacity: '0%'},500);
        $('.scrollguide').animate({opacity: '0%'},500);
    }
    //If scroll position is NOT PASSED the limit, reshow the title and scroll guide
    if(scrollPos < scrollLimit && passed) {
        //Set passed to false
        passed = false;

        //Header & Scroll animation
        $('.header').animate({opacity: '100%'},500);
        $('.scrollguide').animate({opacity: '100%'},500);
    }

});