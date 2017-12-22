$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top - 84) {
            $('#nav').css('background-color', 'black');
        } else {
            $('#nav').css('background-color', 'transparent');
        }
    });
});