$(document).ready(function() {
    $('.back').click(function() {
        $('body').animate({opacity: '0%'},1900);
        setTimeout(function() {
            history.go(-1);
        }, 2200);

        setTimeout(function() {
            window.location.href = 'timeline.html';
        }, 2400);
    });
});