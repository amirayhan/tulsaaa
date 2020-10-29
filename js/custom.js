$(function () {
    "use strict";
    
    var html_body = $('html,body');
    
    //preloader js
        jQuery(window).load('body', function () {
            setTimeout(function () {
                jQuery('.preloader').addClass('complete');
            }, 1000);
        });

    //variable
    /*var html_body = $('html,body');
    var backtotop = $('.back2top');
    var header_fix = $('.position-fixed'); */

    // preloader js
    /*$('body').addClass('active_preloader');
    $(window).on('load', function() { 
      $('.preloader').fadeOut();
      $('.preloader-ripple').delay(350).fadeOut('slow');
      $('body').removeClass('active_preloader');
    });*/



    //backtotop js
    /*backtotop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });*/


    //header fixed
    /*$(window).on('scroll', function () {
       
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            header_fix.addClass("bg");
        } else {
            header_fix.removeClass('bg');
        }

        if (scrolling > 300) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });*/


    //banner slick slider js
    /*$('.banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    
                }
    },
            {
                breakpoint: 600,
                settings: {
                    
                    dots: false,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                }
    }
        ]
    });*/

    //header and back2top
    function Styleheader() {
        if ($('header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('header');
            var scroll = $('.back2top');
            if (windowpos >= 110) {
                siteHeader.addClass('header_fixed');
                scroll.addClass('open');
            } else {
                siteHeader.removeClass('header_fixed');
                scroll.removeClass('open');
            }
        }
    }
    Styleheader();

    // Scroll to a Specific Div
    if ($('.scroll_target').length) {
        $(".scroll_target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    $('.scroll_target','.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });

    // When document is Scrollig, do
    $(window).on('scroll', function () {
        Styleheader();
    });

    //about skill barfiller js
    $("#banner .banner_content .cd-headline").waypoint(function (direction) {
        if (direction == "down") {
            $('#bar1').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar2').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 1500,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar3').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 2000,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
            $('#bar4').barfiller({

                // color of bar
                barColor: '#2C2D32',

                // shows a tooltip
                tooltip: true,

                // duration in ms
                duration: 2500,

                // re-animate on resize
                animateOnResize: true,

                // custom symbol
                symbol: "%"

            });
        }
    });


    //counter js
    $('.count').counterUp({
        delay: 10,
        time: 2000,
    });

    //portfolio lightbox js
    var gallery = $('#portfolio a').simpleLightbox({
        showCounter: false,
        captions: false,
    });


    //portfolio mixitup js
    /*var mixer = mixitup('.portfolio_img');*/


    //portfolio venobox js
    /*$('.venobox').venobox();*/


    //portfolio header active js
    /*$(document).on('click', '#portfolio .portfolio_catagury ul li', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });*/


    //testimonial slick slider js
    $('.testimonial_content').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    //partner slick slider js
    $('.partner_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    arrows: false,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    arrows: false,
                }
    }
        ]
    });



    //animation scroll js
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });
    
    //color picker js;
    $('.colors_icon').click(function(){
        $('.colors').toggleClass('colors_open');
    });

    $('.colors .yellow').click(function(){
        $('body').addClass('c2').removeClass('c3, c4');
    });
    
    $('.colors .green').click(function(){
        $('body').addClass('c3').removeClass('c2, c4');
    });
    
    $('.colors .blue').click(function(){
    $('body').addClass('c4').removeClass(' c2, c3');
    });
    
    $('.colors .c1').click(function(){
        $('body').removeClass('c2, c3, c4,');
    });

});