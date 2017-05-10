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
});