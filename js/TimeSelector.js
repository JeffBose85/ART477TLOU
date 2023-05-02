const alignmentdict = {
    "prologue" : '558px',
    "summer" : '392px',
    "fall" : '271px',
    "winter" : '155px',
    "spring" : '20px'
}

var currSelected;

$(document).ready(function () {
    currSelected = $('#location').html().toLowerCase();
    moveSelected(alignmentdict[currSelected]);

    $('.selector').click(function () {
        var selected =  this.id;

        if(currSelected === selected) {
            var url = currSelected + ".html";
            $('body').animate({opacity: '0%'},1900);
            setTimeout(function() {
                window.location.href = url;
            }, 2200);
        } else {

            var element = '#' + currSelected;
            $(element).removeClass('selected');
            currSelected = this.id;
            moveSelected(alignmentdict[selected]);
            
        }
    })
});

function moveSelected(alignment) {
    var element = '#' + currSelected;
    $('.timetext').css({'left': alignment});
    $(element).addClass('selected');
}