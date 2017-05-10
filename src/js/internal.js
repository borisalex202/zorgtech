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
        overlay: $('.overlay'),
        linkHasChild: $('.has-child')
    };
    var options = {
        hoverDelay: 300,
        smoothScroll: 700,
        siteHeaderHeight: elements.siteHeader.outerHeight()
    };
    
    @@include('./partials/_slider.js')

    $(window).on('load resize', function () {
        options.siteHeaderHeight = elements.siteHeader.outerHeight();
    });

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

    elements.linkHasChild
        .mouseover(function(){
            $(this).addClass('hover');
        })
        .mouseleave(function(){
            setTimeout(function(){ elements.linkHasChild.removeClass('hover') }, options.hoverDelay);
        });

    $('.smooth-scroll').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - options.siteHeaderHeight
                }, options.smoothScroll);
                return false;
            }
        }
    });

})(jQuery);
