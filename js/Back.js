$(document).ready(function() {

    //Back click event listener
    $('.back').click(function() {

        //Fade the entire page out
        $('body').animate({opacity: '0%'},1900);

        //Wait 2200ms (2.2sec)
        setTimeout(function() {
            //Go back one page
            history.go(-1);
        }, 2200);

        //If no history is found this will trigger, goes to timeline page
        //Wait 2400ms (2.4sec)
        setTimeout(function() {
            window.location.href = 'timeline.html';
        }, 2400);
    });
});