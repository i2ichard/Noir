$(document).ready(function() {
    "use strict"; // Start of use strict

    /* --------------------------------------------
    owl carousel calling function
    --------------------------------------------- */

    function owl_main_carousel() {
        //owl slider
        var owl = $("#main-carousel");
        owl.owlCarousel({
            nav: true, // Show next and prev buttons
            smartSpeed: 1000,
            dotsSpeed: 1000,
            dragEndSpeed: true,
            dragEndSpeed: 1000,
            singleItem: true,
            lazyLoad: true,
            pagination: false,
            items: 1,
        });
    }

    function owl_second_carousel() {
        //owl slider with no nav
        var owl = $("#second_carousel");
        owl.owlCarousel({
            nav: false, // Show next and prev buttons
            lazyLoad: true,
            smartSpeed: 1000,
            dotsSpeed: 1000,
            items: 1,
        });
    }

    function owl_loop_carousel() {
        //owl slider with no nav
        $('#loop_carousel').owlCarousel({
            nav: true, // Show next and prev buttons
            lazyLoad: true,
            responsiveClass: true,
            center: true,
            smartSpeed: 1000,
            dotsSpeed: 1000,
            items: 1.4,
            loop: true,
            margin: 20,
        });
    }

    /* --------------------------------------------
    Isotope  calling function
    --------------------------------------------- */

    function Isotope_masonry_layout() {

        // init Isotope
        var $grid = $('.masonry_layout').isotope({
            percentPosition: true,
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            transitionDuration: '0.6s',
            masonry: {
                // use element for option
                columnWidth: 0
            }
        });
        // Isotope filter
        $('.work_filter li span').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            jQuery('.work_filter li').removeClass('active');
            jQuery(this).parent().addClass('active');
            $grid.isotope({
                filter: filterValue
            });
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });

    }


    function Isotope_masonry_fitRows() {

        // init Isotope
        var $grid = $('.masonry_fitRows').isotope({
            percentPosition: true,
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: 30,

            }
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });

    }

    /* --------------------------------------------
    wow  calling function
    --------------------------------------------- */

    function wow_animated() {
        /********  wow.js *******/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 50, // distance to the element when triggering the animation (default is 0) 
            mobile: false
        });
        wow.init();

    }


    function popup_gallery_int() {
        $('.popup_gallery').magnificPopup({
            delegate: 'img',
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS

            },


            callbacks: {
                elementParse: function(qw) {
                    qw.src = qw.el.attr('src');
                }
            }

        });

    }

    /* --------------------------------------------
    Instagram feed
    --------------------------------------------- */
    function Instafeed_int() {

        var feed = new Instafeed({
            get: 'user',
            userId: 1138644,
            accessToken: '730091552.5b9e1e6.2966037e3a144c16a57b7a861a1d76d1',
            target: 'instagramfeed',
            limit: 8,
            resolution: 'low_resolution',
            template: '<li><a href="{{link}}"><img class="lazy" data-original="{{image}}" /></a></li>'
        });
        feed.run();

    }
    /* --------------------------------------------
    Instagram feed
    --------------------------------------------- */
    function superfish_menu() {
        $('.classic_nav ul.menu-nav').superfish({
            animation: {
                height: 'show'
            }, // slide-down effect without fade-in
            delay: 100 // 1.2 second delay on mouseout
        });

    }

    /* --------------------------------------------
    Page height mange
    --------------------------------------------- */

    function page_height_mange() {
        var minheight = $(window).height();
        var headerhight = $('header').outerHeight(true);
        var hightoutput = minheight - headerhight - 50;
        var height_no_pandding = minheight - headerhight;
        var half_height = hightoutput / 2;
        var thirdhaflhight = (hightoutput / 4) * 3;

        $(".full_height").css({
            'min-height': minheight,
            'height': minheight
        });

        $(".full_height_np").css({
            'min-height': height_no_pandding,
            'height': height_no_pandding
        });

        $(".thirdhalf_height").css({
            'height': thirdhaflhight
        });

        $(".halfheight_screen").css({
            'height': half_height
        });


        $(".full-screen .work-item").css({
            'min-height': hightoutput,
            'height': hightoutput
        });

    }

    function page_loading() {
        // Page loader
        $("body").imagesLoaded(function() {
            $(".page_loading div").fadeOut();
            $(".page_loading").delay(200).fadeOut("slow");

            $(".page_loading").fadeOut("slow", function() {
                $(this).remove();
            });

        });
    }

    /* --------------------------------------------
    On scroll
    --------------------------------------------- */
    if (window.innerWidth < 950) {
        $('.menu-btn').fadeIn(400, function() {
            // Animation complete
        });
    } else {
        $(window).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 120) {
                $(".menu-btn").addClass("fixed_nav");
                $('.menu-btn').fadeIn(400, function() {
                    // Animation complete
                });
            } else {
                $('.menu-btn').fadeOut(400, function() {
                    // Animation complete
                    $(".menu-btn").removeClass("fixed_nav");
                });
            }
        });
    }

    /* ---------------------------------------------
    On resize calling function
    --------------------------------------------- */
    $(window).on('resize', function() {
        "use strict"; // Start of use strict
        page_height_mange();

    }).trigger('resize');

    /* ---------------------------------------------
    Dynamic Page Replacing or loading
    --------------------------------------------- */

    if (Modernizr.history && !$('#main-carousel')) {

        $("#page-wrap").append("<div class='display-none page_loading'><div class='spinner'></div></div>").fadeIn("slow");
        var newHash = "",
            $mainContent = $("#main-content"),
            $pageWrap = $("#page-wrap-ex"),
            baseHeight = 0,
            $el;

        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        $("body").delegate("a", "click", function() {
            var _link;
            _link = $(this).attr("href");
            history.pushState(null, null, _link);
            loadContent(_link);
            return false;
        });


        function loadContent(href) {
            "use strict"; // Start of use strict

            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(href + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href$='" + href + "']").addClass("current");

                        owl_main_carousel();
                        owl_second_carousel();
                        owl_loop_carousel();
                        Isotope_masonry_layout();
                        Isotope_masonry_fitRows();
                        page_height_mange();
                        $(window).scrollTop(0);
                        $(".fit").fitVids();
                        page_loading();

                    });
                });
        }

        $(window).bind('popstate', function() {
            _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
            loadContent(_link);
        });

    } // otherwise, history is not supported, so nothing fancy here.

    /* ---------------------------------------------
    Scripts initialization
    --------------------------------------------- */
    owl_main_carousel();
    owl_second_carousel();
    owl_loop_carousel();
    popup_gallery_int();
    Isotope_masonry_layout();
    Isotope_masonry_fitRows();
    wow_animated();

    if ($("#instagramfeed").length) {
        Instafeed_int();
    }

    superfish_menu();
    page_loading();
    /******** Header Menu button *******/

    $('.menu_toggle, .overlay-content-wrap, .menu-content .menu-content-wrap .menu-nav li a').on('click', function() {
        $('.menu-content').fadeToggle(200);
    });

    /******** Filter button *******/
    $('span.filter_button').on('click', function() {
        $('.work_filter').slideToggle(200);

        $(this).text(function(i, text) {
            return text === " Hide Filter" ? "Show Filter" : " Hide Filter";
        })

    });

    /********  FitVids.js *******/
    // Target your .container, .wrapper, .post, etc.
    $(".fit").fitVids();
});
