
$(document).ready(function() {

    //If user comes from index (Main Menu) show the popup
    //if not hide it.
    if(document.referrer.includes("index") || document.referrer.includes("timeline")) {
        showPopup();
    } else {
        hidePopup();
    }
    
    //If the popup is clicked hide the popup.
    $('.popup').click(function() {
        hidePopup();
    })
});

//Shows the popup with the proper animations
function showPopup() {
    setTimeout(function() {
        $('.popup').animate({width:'30vw'},1000);
        setTimeout(function() {
            
            setTimeout(function() {
                $('.popuptext').addClass('popupwhite');
            },500);

            setTimeout(function() {
                hidePopup();
            },6000);

        },1010);
    }, 1900);
}

//Hides the popup with the proper animations.
function hidePopup() {
    $('.popup').animate({opacity:'0%'},600);
        setTimeout(function() {
            $('.popup').hide();
        },501);
}