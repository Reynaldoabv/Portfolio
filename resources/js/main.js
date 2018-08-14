$("document").ready(function(){
    /* Contact modal */ 

    $("#button-cover").click(function(){
        $("#contact-modal").fadeIn(1000);
    });

    $(".modal-close").click(function(){
        $("#contact-modal").fadeOut(1500);
    });

    /* Back to top button */

    var btt = $(".back-to-top");

    $(window).on("scroll", function(){
        var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if(top > height) {
            if(!btt.is(":visible")) {
                btt.fadeIn(1500);
            }
        } else {
            btt.fadeOut(1500);
        }
    });

});