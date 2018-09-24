$("document").ready(function(){

    /* Navbar */

    $('.hamburger-icon').click(function(){
        $('.hamburger-icon').toggleClass('active');
        $('#items').slideDown(3000);     
    })

    $('.hamburger-icon').click(function(){
        $('#items').slideUp(3000);
    })

    /* Contact SlideUp / Down */ 

    $("#button-cover").click(function(){
        $("#contact-slide").slideDown(500);
    });

    $(".slide-close").click(function(){
        $("#contact-slide").slideUp(1000);
    });

    /* Back to top button */

    var btt = $(".back-to-top");

    btt.on("click", function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

        e.preventDefault();
    });

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

    function initMap(){
        // Map options 
        var options = {
            zoom: 12,
            center: {lat: -33.416889, lng: -70.606705}
        }

        // New map
        var map = new google.maps.Map(document.getElementById('map'), options);

        // Add marker

        var marker = new google.maps.Marker({
            position: {lat: -33.422067100, lng: -70.608405300},
            map:map,
            icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });

        var infoWindow = new google.maps.InfoWindow({
            content:'<h1>Reynaldo Borges</br> +56 940 75 66 21</br> reynaldob.webdev@gmail.com</h1>'
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }