
$(document).ready(function() {

    //If user comes from index (Main Menu) show the popup
    //if not hide it.
    if(document.referrer.includes("index") || document.referrer === "https://jeffbose85.github.io/ART477TLOU/") {
        //Show popup
        showPopup();
    } else {
        //Hide popup
        hidePopup();
    }
    
    //If the popup is clicked hide the popup.
    $('.popup').click(function() {
        //Hide popup
        hidePopup();
    })
});

//Shows the popup with the proper animations
function showPopup() {

    //Wait 1900ms (1.9sec)
    setTimeout(function() {

        //Show popup div
        $('.popup').show();
        //Animate popup (widen)
        $('.popup').animate({width:'30vw'},1000);

        //Wait 1010ms (1.01sec)
        setTimeout(function() {
            
            //Wait 500ms (.5sec)
            setTimeout(function() {
                //Add white text class
                $('.popuptext').addClass('popupwhite');
            },500);

            //Wait 6000ms (6sec)
            setTimeout(function() {
                //Hide popup
                hidePopup();
            },6000);

        },1010);
    }, 1900);
}

//Hides the popup with the proper animations.
function hidePopup() {
    //Fade out popup
    $('.popup').animate({opacity:'0%'},600);

        //Wait 501ms (5.01sec)
        setTimeout(function() {
            //Hide popup div
            $('.popup').hide();
        },501);
}