(function ($0) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($0('#spinner').length > 0) {
                $0('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $0(window).scroll(function () {
        if ($0(window).width() < 992) {
            if ($0(this).scrollTop() > 55) {
                $0('.fixed-top').addClass('shadow');
            } else {
                $0('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($0(this).scrollTop() > 55) {
                $0('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $0('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $0(window).scroll(function () {
    if ($0(this).scrollTop() > 300) {
        $0('.back-to-top').fadeIn('slow');
    } else {
        $0('.back-to-top').fadeOut('slow');
    }
    });
    $0('.back-to-top').click(function () {
        $0('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $0(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // item carousel
    $0(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $0(document).ready(function () {
        var $0videoSrc;
        $0('.btn-play').click(function () {
            $0videoSrc = $0(this).data("src");
        });
        console.log($0videoSrc);

        $0('#videoModal').on('shown.bs.modal', function (e) {
            $0("#video").attr('src', $0videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $0('#videoModal').on('hide.bs.modal', function (e) {
            $0("#video").attr('src', $0videoSrc);
        })
    });



    // Product Quantity
    $0('.quantity button').on('click', function () {
        var button = $0(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

