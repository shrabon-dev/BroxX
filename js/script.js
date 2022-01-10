$(function () {

    "use strict";

    // =====Pre Loader===== //
     
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // ======Menufix===== //

    //    var navoff = $(".main_menu").offset().top;
    //
    //    $(window).scroll(function () {
    //        var scrolling = $(this).scrollTop();
    //
    //        if (scrolling > navoff) {
    //            $(".main_menu").addClass("menu_fix");
    //        } else {
    //            $(".main_menu").removeClass("menu_fix");
    //        }
    //    });


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });

  
    // ======Slick Slider===== //

    $('.slider__img').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });
    $('.client__img__slider').slick({
        centerMode: true,
        centerPadding:"0px",
        dots: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        asNavFor:'.client__review__slider',
        nextArrow:'<i class="fas fa-chevron-down prev"></i>',
        prevArrow:'<i class="fas fa-chevron-up next"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                   vertical:false,

                }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:false,

        }
}
  ]

    });
    $('.client__review__slider').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor:'.client__img__slider',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });



    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });


//  $(".menu__icon").Click(function(){
//      $(".fa-ellipsis-v").addClass("color__icon")
//  })
    // =====Aos Js===== n//

    AOS.init();



});
setTimeout(function(){
  $(".preloader").fadeOut()
},4000)

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },3000)
})

$(window).scroll(function(){
    if($(window).scrollTop()>300){
      $(".menu").addClass("fixed__menu")
    }else(
        $(".menu").removeClass("fixed__menu")
    )

})


// $(window).scroll(function(){
//     if($(window).scrollTop()>750){
//       $(".backtotop").fadeIn()
//     }else(
//       $(".backtotop").fadeOut()
//     )
 
//     if($(window).scrollTop()>300){
//       $(".menu").addClass("fixedmenu")
//     }else(
//       $(".menu").removeClass("fixedmenu")
//     )
    


//   })
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".red").click(function(){
    $(".style").attr("href","css/style.css")
})
$(".white").click(function(){
    $(".style").attr("href","css/style__white.css")
})
$(".orange").click(function(){
    $(".style").attr("href","css/style__dark__green.css")
})


