$(window).on('load', function () {
    $('.slider-popular').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider-product-main').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        asNavFor: '.slider-product-nav',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('.slider-product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-product-main',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
    });
    $('.slider-product-gallery').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false
    });
    $('.product-gallery-item').on('click', function () {
        var goTo = $(this).data('go-to');

        $('.slider-product-gallery').slick('slickGoTo', goTo);
        setTimeout(function () {
            $('.slider-product-gallery').slick('setPosition');
        }, 300);
    });
});
$(window).on('load resize', function () {
    if(options.documentWidth < grid.md) {
        if (!$('.product-gallery-container').hasClass('slick-initialized')) {
            $('.product-gallery-container').slick({
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                dots: true
            })
        }
    } else {
        if ($('.product-gallery-container').hasClass('slick-initialized')) {
            $('.product-gallery-container').slick('unslick');
        }
    }
});