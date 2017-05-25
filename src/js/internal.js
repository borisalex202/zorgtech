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
        scrollbarWidth: scrollbarWidth(),
        scroll: $(document).scrollTop()
    };
    
    @@include('./partials/_slider.js')

    var navInitScrollTop;
    $(window).on('load resize', function () {
        options.siteHeaderHeight = elements.siteHeader.outerHeight();
        options.documentWidth = $(document).width();
        if($('div').hasClass('nav-init')) {
            navInitScrollTop = $('.nav-init').offset().top - 100;
        }
    });

    $('.toggle-menu').on('click', function () {
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
                if($('.wrapper').hasClass('nav')) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 54
                    }, options.smoothScroll);
                } else if ($('.wrapper').hasClass('nav-tab')){
                    $('html, body').animate({
                        scrollTop: target.offset().top - $('.anchor-fixed').outerHeight()
                    }, options.smoothScroll);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, options.smoothScroll);
                }
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
    $('.table-flex__tr.tr_hidden').each(function () {
        $(this).data('height', $(this).outerHeight()).css({
            maxHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderWidth: 0
        });
    });
    var showTr = 0;
    $('.toggle-table').on('click', function () {
        if(showTr === 0) {
            elements.tableFlex.find('.tr_hidden').each(function () {
                var height = $(this).data('height');
                console.log(height);
               $(this).css({
                    maxHeight: height,
                    paddingTop: (options.documentWidth > grid.md ? 25 : 20),
                    paddingBottom: (options.documentWidth > grid.md ? 25 : 20),
                    borderWidth: 1
                });
            });
            showTr = 1;
        } else {
            elements.tableFlex.find('.tr_hidden').each(function () {
                $(this).css({
                    maxHeight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderWidth: 0
                });
            });
            showTr = 0;
        }
    });

    $('input, textarea')
        .blur(function() {
            if (!$(this).val()) {
                $(this).closest('.form-group').removeClass('active');
            }
        })
        .focus(function() {
            $(this).closest('.form-group').addClass('active')
        })
        .change(function(){
            var el = $(this);
            if (el.val()) {
                el.addClass('active');
                el.closest('.form-group').addClass('active');
            } else {
                el.removeClass('active');
                el.closest('.form-group').removeClass('active');
            }
        });

    var headerHeight = elements.siteHeader.outerHeight();

    $(window).on('scroll', function() {
        var scrolled = $(document).scrollTop();
        if (scrolled > headerHeight && options.documentWidth > grid.md){
            $('.wrapper').addClass('off-canvas');
        } else {
            $('.wrapper').removeClass('off-canvas');
        }

        if (scrolled > options.scroll && scrolled > headerHeight && options.documentWidth > grid.md){
            $('.wrapper').removeClass('fixed');
        } else {
            $('.wrapper').addClass('fixed');
        }
        options.scroll = $(document).scrollTop();

        if($('.wrapper').hasClass('nav')) {
            if (scrolled > navInitScrollTop  && options.documentWidth > grid.md) {
                $('.wrapper').addClass('nav-hide-header');
            } else {
                $('.wrapper').removeClass('nav-hide-header');
            }
        }
    });

    $('.open-nav').on('click', function () {
        $('.wrapper').addClass('open-nav');
    });
    $('.close-nav').on('click', function () {
        $('.wrapper').removeClass('open-nav');
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
