
$(document).ready(function() {
    $(".TLSection").click(function() {
        var url = this.id + ".html";
        $('body').animate({opacity: '0%'},1900);
        setTimeout(function() {
            window.location.href = url;
        }, 2200);
    });
});