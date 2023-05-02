var game = true;

$(document).ready(function() {

    switchyears();

    $(".switchbox").click(function() {
        game = !game;
        switchyears();
    });

    $(".TLSection").click(function() {
        console.log(this.id);
        var url = this.id + ".html";
        $('body').animate({opacity: '0%'},1900);
        setTimeout(function() {
            window.location.href = url;
        }, 2200);
    });

});

function switchyears() {

    const gameyears = ["2013", "2033", "2034"];
    const seriesyears = ["2003", "2023", "2024"];
    
    if(game) {
        htmlChange(gameyears)
    } else {
        htmlChange(seriesyears)
    }
}

function htmlChange(yeararray) {
        $('.prologueyear').html(yeararray[0]);
        $('.summeryear').html(yeararray[1]);
        $('.fallyear').html(yeararray[1]);
        $('.winteryear').html(yeararray[1]);
        $('.springyear').html(yeararray[2]);
}