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
        linkHasChild: $('.has-child'),
        toggleSort: $('[data-toggle="sort"]'),
        toggleFilter: $('.toggle-filter'),
        filter: $('.filter-block'),
        close: $('.icon-close'),
        tableFlex: $('.table-flex.mini')
    };
    var options = {
        hoverDelay: 300,
        smoothScroll: 700,
        siteHeaderHeight: elements.siteHeader.outerHeight(),
        documentWidth: $(document).width(),
        scrollbarWidth: scrollbarWidth()
    };
    
    @@include('./partials/_slider.js')

    $(window).on('load resize', function () {
        options.siteHeaderHeight = elements.siteHeader.outerHeight();
        options.documentWidth = $(document).width();
    });

    elements.iconMenu.on('click', function () {
        elements.mobileMenu.toggleClass('active');
        elements.overlay.toggleClass('active');
        $('body').toggleClass('no-scroll');

        if(options.scrollbarWidth > 0) {
            if (elements.mobileMenu.hasClass('active')) {
                $('body, .site-header-top, .site-header-bottom').css({
                    paddingRight: options.scrollbarWidth
                });
            } else {
                $('body, .site-header-top, .site-header-bottom').css({
                    paddingRight: 0
                });
            }
        }
    });

    elements.overlay.on('click', function () {
        $(this).removeClass('active');
        elements.mobileMenu.removeClass('active');
        elements.filter.removeClass('active');
        showMainScroll();
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
        if(options.documentWidth < grid.md) {
            return false;
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
    elements.toggleSort.on('click', function () {
       var upText = $(this).data('up'),
           downText = $(this).data('down');

        $(this)
            .toggleClass('active')
            .find('span')
            .text(function(i, text){
                return text === downText ? upText : downText;
            });
    });
    elements.toggleFilter.on('click', function () {
        elements.filter.addClass('active');
        elements.overlay.addClass('active');
        hideMainScroll();
    });
    elements.close.on('click', function () {
        elements.filter.removeClass('active');
        elements.overlay.removeClass('active');
        showMainScroll();
    });
    $('[type="tel"]').mask("+7(999)999-99-99");

    elements.tableFlex.find('.table-flex__tr:nth-child(n+8)').addClass('tr_hidden');
    $('.toggle-table').on('click', function () {
        elements.tableFlex.find('.tr_hidden').slideToggle(300, function() {
            if ($(this).css('display') == 'block') $(this).css('display', 'flex');
        });
    });



    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }
    function hideMainScroll() {
        if(options.scrollbarWidth > 0) {
            $('body').addClass('no-scroll').css({
                paddingRight: options.scrollbarWidth
            });
            $('.site-header-top, .site-header-bottom').css({
                paddingRight: options.scrollbarWidth
            });
        }
    }
    function showMainScroll() {
        $('body').removeClass('no-scroll').css({
            paddingRight: 0
        });
        $('.site-header-top, .site-header-bottom').css({
            paddingRight: 0
        });
    }

})(jQuery);
