(function ($) {
  "use strict";

  $(document).ready(function () {
    var $window = $(window);
    var didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $("#sticky"),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;

    $window.on("scroll", function () {
      didScroll = true;
      scrollTop = $(this).scrollTop();
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.css("top", -$mainNavHeight);
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.css("top", 0);
        }
      }
      lastScrollTop = scrollTop;
    }

    //sticky header
    function navbarFixed() {
      if ($("#sticky").length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $("#sticky").addClass("navbar_fixed");
          } else {
            $("#sticky").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();

    $(".navbar-nav > li .mobile_dropdown_icon").on("click", function (e) {
      $(this).parent().find("ul").first().toggle(300);
      $(this).parent().siblings().find("ul").hide(300);
    });

    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").on("click", function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }

    //initialize smmothscroll
    if ($("header").length) {
      $("header").smoothScroll();
    }

    if ($("#banner_animation").length > 0) {
      $("#banner_animation").parallax({
        scalarX: 10.0,
        scalarY: 7.0,
      });
    }
    if ($("#banner_animation2").length > 0) {
      $("#banner_animation2").parallax({
        scalarX: 10.0,
        scalarY: 0.0,
      });
    }
    if ($("#card_area_animation").length > 0) {
      $("#card_area_animation").parallax({
        scalarX: 10.0,
        scalarY: 0.0,
      });
    }
    if ($("#MouseMoveAnimation").length > 0) {
      $("#MouseMoveAnimation").parallax({
        scalarX: 5.0,
        scalarY: 10.0,
      });
    }

    if ($("#readOnlyClose").length) {
      $("#readOnlyClose").on("click", function () {
        $("#locationSelect").val("");
        $("#locationSelect").focus();
      });
    }

    // === Back to Top Button
    var back_top_btn = $("#back-to-top");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        back_top_btn.addClass("show");
      } else {
        back_top_btn.removeClass("show");
      }
    });

    back_top_btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });

    //initialize wow js
    new WOW({}).init();

    //initialize counterUp
    if ($(".counter span").length) {
      $(".counter span").counterUp();
    }
    if ($(".stat-counter").length) {
      $(".stat-counter").counterUp();
    }

    //initialize niceselect
    if ($("#select-lang").length) {
      $("#select-lang").niceSelect();
    }
    if ($("#select-loan-type").length) {
      $("#select-loan-type").niceSelect();
    }
    if ($("#loandetails01").length) {
      $("#loandetails01").niceSelect();
    }
    if ($("#loandetails02").length) {
      $("#loandetails02").niceSelect();
    }
    if ($("#dob-d").length) {
      $("#dob-d").niceSelect();
    }
    if ($("#dob-m").length) {
      $("#dob-m").niceSelect();
    }
    if ($("#dob-y").length) {
      $("#dob-y").niceSelect();
    }
    if ($("#sort-select").length) {
      $("#sort-select").niceSelect();
    }

    //ediatable location select
    if ($("#locationSelect").length) {
      $("#locationSelect").editableSelect();
    }

    //initialize fencybox
    if ($("[data-fancybox]").length) {
      $("[data-fancybox]").fancybox({
        animationEffect: "zoom-in-out",
      });
    }

    //initialize slick slider
    if ($(".testimonial-slider").length) {
      $(".testimonial-slider").slick({
        dots: false,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              centerMode: false,
              variableWidth: false,
            },
          },
        ],
      });
    }

    if ($(".testimonial-slider-2").length) {
      $(".testimonial-slider-2").slick({
        dots: false,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        slidesToShow: 3,
        centerMode: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        asNavFor: ".testimonial-slider-3",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    }

    if ($(".testimonial-slider-3").length) {
      $(".testimonial-slider-3").slick({
        dots: false,
        asNavFor: ".testimonial-slider-2",
        arrows: false,
        slidesToShow: 1,
        centerMode: false,
        autoplay: false,
        infinite: true,
        slidesToScroll: 1,
        fade: true,
      });
    }
    if ($(".feature-slider").length) {
      $(".feature-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".statistics-slider").length) {
      $(".statistics-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      });
    }
    if ($(".client-slider").length) {
      $(".client-slider").slick({
        dots: true,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    /* new version */
    if ($(".client-slider-2").length) {
      $(".client-slider-2").slick({
        dots: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".loan-slider").length) {
      $(".loan-slider").slick({
        dots: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".news-slider").length) {
      $(".news-slider").slick({
        dots: true,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 7500,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }

    //initilalize Telephone Input Country
    if ($("#inputPhoneNumber").length) {
      $("#inputPhoneNumber").intlTelInput({
        separateDialCode: false,
        utilsScript: "js/utils.js",
      });
    }

    //initilalize DropeZone
    if ($("#dropzone").length) {
      $("#dropzone").dropzone({
        paramName: "file",
        url: "upload-target",
      });
    }


    // /*------------ Added Dark Mode ------------*/
    // function createCookie(name, value, days) {
    //   var expires = "";
    //   if (days) {
    //     var date = new Date();
    //     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    //     expires = "; expires=" + date.toUTCString();
    //   }
    //   document.cookie = name + "=" + value + expires + "; path=/";
    // }

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(";");
    //   for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == " ") c = c.substring(1, c.length);
    //     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    //   }
    //   return null;
    // }

    // var prefersDark =
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches;
    // var selectedNightTheme = readCookie("body_dark");

    // if (
    //   selectedNightTheme == "true" ||
    //   (selectedNightTheme === null && prefersDark)
    // ) {
    //   applyNight();
    //   $(".dark_mode_switcher").prop("checked", true);
    // } else {
    //   applyDay();
    //   $(".dark_mode_switcher").prop("checked", false);
    // }

    // function applyNight() {
    //   if ($(".js-darkmode-btn .ball").length) {
    //     $(".js-darkmode-btn .ball").css("left", "26px");
    //   }
    //   $("body").addClass("body_dark");
    // }

    // function applyDay() {
    //   if ($(".js-darkmode-btn .ball").length) {
    //     $(".js-darkmode-btn .ball").css("left", "3px");
    //   }
    //   $("body").removeClass("body_dark");
    // }

    // $(".dark_mode_switcher").change(function () {
    //   if ($(this).is(":checked")) {
    //     applyNight();

    //     createCookie("body_dark", true, 999);
    //   } else {
    //     applyDay();
    //     createCookie("body_dark", false, 999);
    //   }
    // });
    // End of Dark Mode
  });

  /*--------------- Start price js--------*/
  if ($(".pricing_tab_btn .toggle").length) {
    $(".pricing_tab_btn .toggle").on("click", function () {
      $(this).toggleClass("clicked");
      $(".pricing_inner").toggleClass("active");
      $(".pricing_tab_btn").toggleClass("active");
    });
  }

  if ($(".map_list").length) {
    setInterval(function () {
      var active = $(".map_list li.active");
      active.removeClass("active");
      if (active.next("li").length == 0) {
        active.parent(".map_list").find("li:first-child").addClass("active");
      } else {
        active.next("li").addClass("active");
      }
    }, 3000);
  }
})(jQuery);

// 點擊 .nav-link 時關閉 #navbarSupportedContent 的下拉選單
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link"); // 獲取所有 nav-link
  const navbarCollapse = document.getElementById("navbarSupportedContent"); // 獲取 navbar 容器

  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      // 檢查是否點擊的是最後一個語言選擇的 nav-link
      if (index === navLinks.length - 1) {
        return; // 如果是最後一個，則不執行關閉動作
      }

      const isExpanded = navbarCollapse.classList.contains("show"); // 確認是否展開
      if (isExpanded) {
        const bootstrapCollapse =
          bootstrap.Collapse.getInstance(navbarCollapse);
        bootstrapCollapse.hide(); // 使用 Bootstrap API 收起選單
      }
    });
  });
});
