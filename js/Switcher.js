var game = true;
const animatespeed = 750;
const waittime = animatespeed + 10;

$(document).ready(function() {
    SwitchMode();

    $(".switchbox").click(function() {
        game = !game;
        SwitchMode();
    });

    $('a').click(function() {
        var url = this.id + ".html";
                $('body').animate({opacity: '0%'},1900);
                setTimeout(function() {
                    window.location.href = url;
                    return false;
                }, 2200);
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