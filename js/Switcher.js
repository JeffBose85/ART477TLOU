var game = true;
const animatespeed = 750;
const waittime = animatespeed + 10;

$(document).ready(function() {
    SwitchMode();

    $(".switchbox").click(function() {
        game = !game;
        SwitchMode();
    });
});

function SwitchMode() {
    if(game) {
        $('.series').animate({opacity:'0%'},animatespeed);
        setTimeout(function() {
            $('.series').hide();
            $('.game').show();
            $('.game').animate({opacity:'100%'},animatespeed)
        }, waittime);
    } else {
        $('.game').animate({opacity:'0%'},animatespeed);
        setTimeout(function() {
            $('.game').hide();
            $('.series').show();
            $('.series').animate({opacity:'100%'},animatespeed)
        }, waittime);
    }
}