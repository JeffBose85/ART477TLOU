//Hardcoded word positions
//Dictionary: ID:VALUE
const alignmentdict = {
    "prologue" : '558px',
    "summer" : '392px',
    "fall" : '271px',
    "winter" : '155px',
    "spring" : '20px'
}

//Currently selected time
var currSelected;

//When page is ready
$(document).ready(function () {

    //Set currently selected to the page we are on
    currSelected = $('#location').html().toLowerCase();
    //Set current page so we have it for later
    const currPage = currSelected;
    //Set the selector to the right page
    //Get the value from the dictionary
    moveSelected(alignmentdict[currSelected]);

    //When any of the times are clicked
    $('.selector').click(function () {
        //Get the elements ID
        var selected =  this.id;

        //If clicked element has already been elected
        if(currSelected === selected) {
            //If the clicked element isnt already the page we are on
            if(currSelected !== currPage) {

                //Create the URL
                //Example: prologue.hmtl
                var url = currSelected + ".html";

                //Fade out entire page
                $('body').animate({opacity: '0%'},1900);

                //Wait 2200ms (2.2sec)
                setTimeout(function() {
                    //Change page to created URL
                    window.location.href = url;
                }, 2200);
            }
        //If it wasnt already selected, set it to selected
        } else {
            //Create the string for the selected element
            var element = '#' + currSelected;
            //Remove the selected class from the element
            $(element).removeClass('selected');
            //Select the new element by getting its ID
            currSelected = this.id;
            //Move the selector to the newly selected element
            //Get the value from the dictionary
            moveSelected(alignmentdict[selected]);
            
        }
    })
});

//Moves the text div to the right location
function moveSelected(alignment) {
    //Create the string for the selected element
    var element = '#' + currSelected;
    //Move the text element to the right location
    $('.timetext').css({'left': alignment});
    //Add the selected class to the element
    $(element).addClass('selected');
}