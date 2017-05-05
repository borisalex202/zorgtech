(function($) {

    var grid = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    };
    var elements = {
        siteHeader: $('.site-header'),
        iconMenu: $('.icon-menu'),
        mobileMenu: $('.mobile-menu'),
        overlay: $('.overlay')
    };
    var options = {

    };

    elements.iconMenu.on('click', function () {
       elements.mobileMenu.toggleClass('active');
       elements.overlay.toggleClass('active');
       $('body').toggleClass('no-scroll');
    });

    elements.overlay.on('click', function () {
        $(this).removeClass('active');
        elements.mobileMenu.removeClass('active');
        $('body').removeClass('no-scroll');
    });

    elements.mobileMenu.find('.has-child > a').on('click', function () {
        var parent = $(this).parent();

        if(parent.hasClass('active')) {
            parent.removeClass('active').closest('.mobile-menu-middle').removeClass('submenu-active');
            elements.mobileMenu.find('.menu-parent > li').not(parent).fadeIn();
            parent.find('.submenu').fadeOut();
        } else {
            parent.addClass('active').closest('.mobile-menu-middle').addClass('submenu-active');
            elements.mobileMenu.find('.menu-parent > li').not(parent).fadeOut();
            parent.find('.submenu').fadeIn();
        }
    });

})(jQuery);
