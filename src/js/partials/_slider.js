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
});