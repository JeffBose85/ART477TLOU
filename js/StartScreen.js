$(document).click(function() {
    $('.container').animate({opacity: '0%'},1900);
    setTimeout(function() {
        window.location.href = "timeline.html";
    }, 2200);
});