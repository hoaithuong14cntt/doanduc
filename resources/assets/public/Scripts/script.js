﻿(function($){"use strict";function isIE(){var myNav=navigator.userAgent.toLowerCase();return(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;}function toggleMobileNavigation(){var navbar=$("#navbar");var navLinks=$("#navbar > ul > li > a:not(.dropdown-toggle)");var openBtn=$(".navbar-header .open-btn");var closeBtn=$("#navbar .close-navbar");openBtn.on("click",function(){if(!navbar.hasClass("slideInn")){navbar.addClass("slideInn");}return false;})
closeBtn.on("click",function(){if(navbar.hasClass("slideInn")){navbar.removeClass("slideInn");}return false;})
navLinks.on("click", function () { if (navbar.hasClass("slideInn")) { navbar.removeClass("slideInn"); } return false; })
} toggleMobileNavigation(); function bgParallax() { if ($(".parallax").length) { $(".parallax").each(function () { var height = $(this).position().top; var resize = height - $(window).scrollTop(); var doParallax = -(resize / 5); var positionValue = doParallax + "px"; var img = $(this).data("bg-image"); $(this).css({ backgroundImage: "url(" + img + ")", backgroundPosition: "50%" + positionValue, backgroundSize: "cover" }); }); } } function sliderBgSetting() { if ($(".hero-slider .slide").length) { $(".hero-slider .slide").each(function () { var $this = $(this); var img = $this.children(img); var imgSrc = img.attr("src"); $this.css({ backgroundImage: "url(" + imgSrc + ")", backgroundSize: "cover", backgroundPosition: "center center" }) }); } } function parallaxFlower() { if ($(".parallax-flower").length) { $(".parallax-flower").each(function () { var height = $(this).position().top; var resize = height - $(window).scrollTop(); var doParallax = -(resize / 3); var pValueTopImg = doParallax + "px"; var pvalueBtmImg = doParallax + "px"; var img1 = $(this).data("bg-image-top"); var img2 = $(this).data("bg-image-bottom"); $(this).css({ backgroundImage: "url(" + img1 + ")" + ", " + "url(" + img2 + ")", backgroundPosition: "0%" + pValueTopImg + ", " + "100%" + pvalueBtmImg }); }); } } function preloader() { if ($('.preloader').length) { $('.preloader').delay(100).fadeOut(500, function () { wow.init(); sliderBgSetting(); if ($(".hero-slider").length) { $(".hero-slider").owlCarousel({ items: 1, autoplay: true, loop: true, animateOut: 'fadeOut' }); } }); } } var sections = $("section"), nav = $("#navbar"), nav_height = nav.outerHeight(); function activeMenuItem() { var cur_pos = $(window).scrollTop() + 2; sections.each(function () { var top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight(); if (cur_pos >= top && cur_pos <= bottom) { nav.find("ul > li > a").parent().removeClass("active"); nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active"); } else if (cur_pos === 2) { nav.find("ul > li > a").parent().removeClass("active"); } }); } $(function () { $("#navbar > ul > li > a:not(.dropdown-toggle)").on("click", function () { if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) { var target = $(this.hash); target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); if (target.length) { $("html, body").animate({ scrollTop: target.offset().top - 60 }, 1000, "easeInOutExpo"); return false; } } return false; }); }); $(window).on("scroll", function () { var header = $("#header"); var scroll = $(window).scrollTop(); var top = $(".hero").height(); if (scroll > top) { header.addClass("sticky"); } else { header.removeClass("sticky"); } }); var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }); if ($("#clock").length) { var todaysDate = new Date(); console.log(todaysDate); var marrigeDate = new Date(2017, 2, 5); console.log(marrigeDate); $("#clock").countdown({ until: marrigeDate }).on('update.countdown', function (event) { $(this).addClass("asdf"); }).on('finish.countdown', function (event) { console.log("111111111"); }); } function eventClothFadeOut() { if ($(".events .event-boxes").length) { var eventBoxes = $('.event-boxes'); var leftHalf = eventBoxes.find(".left-half"); var rightHalf = eventBoxes.find(".right-half"); var clip = eventBoxes.find(".clip"); if (isIE() && !isIE() < 10) { leftHalf.css({ left: "-100%" }); rightHalf.css({ right: "-100%" }); clip.css({ opacity: 0 }) } else { leftHalf.css({ left: 0 }); rightHalf.css({ right: 0 }); } eventBoxes.appear(); $(document.body).on('appear', '.event-boxes', function () { if (!leftHalf.hasClass('appeared') || rightHalf.hasClass("appeared")) { leftHalf.addClass('appeared slideOutLeft'); rightHalf.addClass('appeared slideOutRight'); clip.addClass('appeared clip-fade-out'); } }); $(document.body).on('disappear', '.event-boxes', function () { if (rightHalf.hasClass('appeared') || leftHalf.hasClass('appeared')) { rightHalf.removeClass('appeared slideOutRight'); leftHalf.removeClass('appeared slideOutLeft'); clip.removeClass('appeared clip-fade-out'); } }); }; } eventClothFadeOut(); if ($(".bquotes-slider").length) { $(".bquotes-slider").owlCarousel({ items: 1, loop: true }); } if ($(".groomsmen-slider").length) { $(".groomsmen-slider").owlCarousel({ items: 1, loop: true, nav: true, navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'], dots: false, mouseDrag: false }); } if ($(".bridesmaids-slider").length) { $(".bridesmaids-slider").owlCarousel({ items: 1, loop: true, nav: true, navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'], dots: false, mouseDrag: false }); }
    if ($(".fancybox").length) {
    $(".fancybox").fancybox(
        {
            openEffect: "elastic", closeEffect: "elastic", wrapCSS: "project-fancybox-title-style",
            beforeShow: function () {
                
                // Add FaceBook like button
                this.title += '<iframe src="//www.facebook.com/plugins/share_button.php?href=/Home/ShareImage?url=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';

                // Add FaceBook like button
                this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=/Home/ShareImage?url=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
            },
            afterShow: function () {                
            },
            helpers: {
                title: {
                    type: 'inside'
                }
            }
        });
    } function masonryGridSetting() { if ($('.masonry-gallery').length) { var $grid = $('.masonry-gallery').masonry({ itemSelector: '.grid-item', columnWidth: '.grid-item', percentPosition: true }); $grid.imagesLoaded().progress(function () { $grid.masonry('layout'); }); } } masonryGridSetting(); function map() { var locations = [['Nhà Trai', 15.865428, 108.280153, 1], ['Nhà Gái', 15.8572756, 108.2759987, 2], ]; var map = new google.maps.Map(document.getElementById('map'), { center: new google.maps.LatLng(15.865428, 108.280153), zoom: 12, scrollwheel: false, mapTypeId: google.maps.MapTypeId.ROADMAP }); var infowindow = new google.maps.InfoWindow(); var marker, i; for (i = 0; i < locations.length; i++) { marker = new google.maps.Marker({ position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map, icon: 'images/map-marker.png' }); google.maps.event.addListener(marker, 'click', (function (marker, i) { return function () { infowindow.setContent(locations[i][0]); infowindow.open(map, marker); } })(marker, i)); } }; if ($("#rsvp-form").length) { $("#rsvp-form").validate({ rules: { Name: { required: true, minlength: 2 }, Unit: "required", Guest: { required: true }, Event: { required: true } }, messages: { Name: "Vui lòng nhập tên của bạn", Unit: "Vui lòng nhập tên đơn vị của bạn", Guest: "Vui lòng chọn bạn đồng hành với bạn", Event: "Vui lòng chọn nơi bạn tham gia" }, submitHandler: function (form) { $.ajax({ type: "POST", url: "/Home/SendMail", data: $(form).serialize(), beforeSend: function () { $('#btnConfirm').addClass('disabled'); $('#loader').css('display', 'block'); }, success: function () { $('#btnConfirm').removeClass('disabled'); $("#loader").hide(); $("#success").slideDown("slow"); setTimeout(function () { $("#success").slideUp("slow"); }, 5000); form.reset(); }, error: function () { $("#loader").hide(); $("#error").slideDown("slow"); setTimeout(function () { $("#error").slideUp("slow"); }, 5000); } }); return false; } }); } $(window).on('load', function () { preloader(); bgParallax(); sliderBgSetting(); parallaxFlower(); masonryGridSetting(); if ($(".map").length) { map(); } }); $(window).on("scroll", function () { activeMenuItem(); bgParallax(); parallaxFlower(); });
})(window.jQuery);