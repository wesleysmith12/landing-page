$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top - 84) {
            // $('#feature-1').removeClass("hidden");
            // $('#feature-2').removeClass("hidden");
            // $('#feature-3').removeClass("hidden");
            // $('#feature-4').removeClass("hidden");
            // $('#feature-5').removeClass("hidden");
            // $('#feature-6').removeClass("hidden");
            $('#nav').css('background-color', 'rgba(0, 0, 0, 0.7)');
        } else {
            $('#nav').css('background-color', 'transparent');
        }
    });
});