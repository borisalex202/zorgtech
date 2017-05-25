var sliders = $('.slider-popular, .slider-product-main, .slider-product-nav, .slider-product-gallery, .slider-detail, .slider-production, .slider-logos');
$(window).on('load', function () {
    sliders.on('init.slick', function (event, slick) {
        $(this).closest('.preloader-container').removeClass('preloader-container').find('.preloader').remove();
    });
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
    $('.slider-product-gallery, .slider-production').slick({
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
    $('.slider-detail').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true
    });
    $('.slider-team').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider-logos').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
    if(options.documentWidth < grid.md) {
        if (!$('.slider-partner1, .slider-partner2, .slider-partner3').hasClass('slick-initialized')) {
            $('.slider-partner1, .slider-partner2, .slider-partner3').slick({
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    } else {
        if ($('.slider-partner1, .slider-partner2, .slider-partner3').hasClass('slick-initialized')) {
            $('.slider-partner1, .slider-partner2, .slider-partner3').slick('unslick');
        }
    }
});