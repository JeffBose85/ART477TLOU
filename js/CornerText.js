$(document).ready(function() {

    //Cornertitle event listener
    $(".cornertitle").click(function() {

        //Fade out entire page
        $('body').animate({opacity: '0%'},1900);

        //Wait 2200ms (2.2sec)
        setTimeout(function() {
            //Switch to timeline page
            window.location.href = 'timeline.html';
        }, 2200);
    });
});