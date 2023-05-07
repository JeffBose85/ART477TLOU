$(document).ready(function() {
    $('.back').click(function() {
        if(window.length > 0) {
            $('body').animate({opacity: '0%'},1900);
            setTimeout(function() {
                history.back();
            }, 2200);
        } else {
            $('body').animate({opacity: '0%'},1900);
            setTimeout(function() {
                window.location.href = 'timeline.html';
            }, 2200);
        }
    });
});