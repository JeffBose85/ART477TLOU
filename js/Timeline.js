var game = true;

$(document).ready(function() {

    switchyears();

    $(".switchbox").click(function() {
        game = !game;
        console.log('On game:' + game);
        switchyears();
    });

    $(".TLSection").click(function() {
        console.log(this.id);
        var url = this.id + ".html";
        window.location.href = url;
    });

});

function switchyears() {

    const gameyears = ["2003", "2013", "2014"];
    const seriesyears = ["2013", "2023", "2024"];
    
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