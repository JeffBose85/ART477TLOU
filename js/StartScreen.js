
//On page click
$(document).click(function() {
    //Call function
    MoveNext();
});

//On any key press
$(document).on("keypress", function() {
    //Call function
    MoveNext();
});

//Change to timeline page
function MoveNext() {
    //Fade out the entire page
    $('body').animate({opacity: '0%'},1900);

    //Wait 2200ms (2.2sec)
    setTimeout(function() {
        //Change page
        window.location.href = "timeline.html";
    }, 2200);
}