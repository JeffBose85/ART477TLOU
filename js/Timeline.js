

//When page is ready
$(document).ready(function() {

    //When timeline section is clicked
    $(".TLSection").click(function() {
        //Create URL string using element ID
        //Example prologue.html
        var url = this.id + ".html";

        //Fade out entire page
        $('body').animate({opacity: '0%'},1900);

        //Wait 2200ms (2.2sec)
        setTimeout(function() {
            //Change page to created URL
            window.location.href = url;
        }, 2200);
    });
});