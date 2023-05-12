
//Boolean: if switcher is on game
var game = true;

//Animation speed and delay time
const animatespeed = 750;
const waittime = animatespeed + 10;

//When page is ready
$(document).ready(function() {
    //Set default to game
    SwitchMode();

    //If toggleswitch is clicked
    $(".switchbox").click(function() {
        //Flip boolean
        game = !game;
        //Change the content
        SwitchMode();
    });

    //Any of the offshoot page links clicked
    $('a').click(function() {
        //Create the URL string using element ID
        //Example: 'elliewilliams.html'
        var url = this.id + ".html";

        //Fade out the entire page
        $('body').animate({opacity: '0%'},1900);

        //Wait 2200ms (2.2sec)
        setTimeout(function() {
            //Change page to created URL
            window.location.href = url;
            return false;
        }, 2200);
    });
});

//Switches mode depending on game boolean
function SwitchMode() {
    //If on game
    if(game) {
        //Fade out all series content
        $('.series').animate({opacity:'0%'},animatespeed);

        //Wait specified time
        setTimeout(function() {

            //Hide all series div/span
            $('.series').hide();

            //Show all game div/span
            $('.game').show();

            //Fade in all game content
            $('.game').animate({opacity:'100%'},animatespeed)
        }, waittime);
    } else {
        //Fade out all game content
        $('.game').animate({opacity:'0%'},animatespeed);

        //Wait specified time
        setTimeout(function() {

            //Hide all game div/span
            $('.game').hide();

            //Show all series div/span
            $('.series').show();

            //Fade in all series content
            $('.series').animate({opacity:'100%'},animatespeed)
        }, waittime);
    }
}