/**
 * Created by Bourgoin on 17/05/2016.
 */

$(document).ready(function() {

    $("#brand-carousel").owlCarousel({

        autoPlay: 6000, //Set AutoPlay to 6 seconds
        pagination:false,

        items : 6,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3]

    });

});