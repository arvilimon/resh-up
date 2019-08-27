/*
Template: Rise Up - Responsive HTML5 Template
Author:Iqonicthemes 
Design and Developed by: Iqonicthemes
*/

(function($) {
    'use strict';

    jQuery(document).on('ready', function() {



        /*START MENU JS*/
        $('a.page-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.menu-top').addClass('menu-shrink');
            } else {
                $('.menu-top').removeClass('menu-shrink');
            }
        });

        /*END MENU JS*/



        /* START COUNTDOWN JS*/
        $('.iq-counter-blog').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        /* END COUNTDOWN JS */

        /*START PROGRESS BAR*/
        $('.iq-progress-bar > span').each(function() {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 2s'
            });

            setTimeout(function() {
                $this.appear(function() {
                    $this.css('width', width + '%');
                });
            }, 500);
        });
        /*END PROGRESS BAR*/

        /*START GOOGLE MAP*/
        function initialize() {
            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: new google.maps.LatLng(40.7127837, -74.00594130000002)
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: 'assets/img/map_pin.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        /*END GOOGLE MAP*/
    });



})(jQuery);