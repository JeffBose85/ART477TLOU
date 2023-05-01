$(document).click(function() {
    MoveNext();
});

$(document).on("keypress", function() {
    MoveNext();
});

function MoveNext() {
    $('body').animate({opacity: '0%'},1900);
    setTimeout(function() {
        window.location.href = "timeline.html";
    }, 2200);
}