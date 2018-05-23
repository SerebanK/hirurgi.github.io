$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots:true,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots:$(".slide-dots")
    });

    // catalog sort list
    var text = true;
    $( ".plash-top" ).on( 'click', function() {
        $(this).prev(".news-box").slideToggle( "slow" );
        $(this).find(".plash-btn").toggleClass('rotate180');

        if (text) {

            $('.text-right p').text('скрыть');
            text = false;
        } else {
            $('.text-right p').text('открыть');
            text = true;

        }
    });

    var windowWidth = $(window).width();
    if(windowWidth < 768){
        $(".sidebar-menu").appendTo(".last-item-menu");
    }

    $( ".menu-item " ).on( 'click', function() {
        $(this).find(".menu-arr").toggleClass('rotate90');
    });

    $( ".plash-down" ).on( 'click', function() {
        $(this).next(".about-us").slideToggle( "slow" );
        $(this).find(".plash-btn").toggleClass('rotate180');
    });

    $( ".sidebar-header" ).on( 'click', function() {
        $(this).next(".sidebar-menu").slideToggle( "slow" );
        $(this).find(".side-arr").toggleClass('rotate180');
    });

});
