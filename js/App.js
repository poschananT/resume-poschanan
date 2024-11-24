// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
// const {neonCursor} = require ('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js')

// neonCursor({
//   el: document.getElementById('hightlight'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })

$(function () {
  var swiper = new Swiper(".ports", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    lazy: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      1025: {
        slidesPerView: 3,
      },
    },
  });

  $('.menu-scroll').on('click', function (e) {
    e.preventDefault()
    // var sec_jump = $(this).attr('href');
    // var anchor = $(sec_jump).offset().top;
    // var header = $('#header').innerHeight()
    // $('html, body').animate({
    //   scrollTop: anchor - header
    // }, 'slow');

    $('.section').removeClass('active');
    $($(this).attr('href')).addClass('active')

    $('.menu-scroll').removeClass('active');
    $(this).addClass('active')

    if($(this).attr('href') == "#hightlight") {
      $('.box-social').removeClass('active');
    } else {
      $('.box-social').addClass('active')
    }

    $('#page .section.active').scroll(function () {
      if ($('#page .section.active').scrollTop() == 0) {
        $('header').addClass('top-pages')
      } else {
        $('header').removeClass('top-pages')
      }
    })
  })

  if (typeof $.magnificPopup === "object") {
    $(".open-popup").on("click", function (e) {
      e.preventDefault();
      $.magnificPopup.open({
        items: {
          src: $(this).attr("href")
        },
        type: "inline",
        mainClass: "popup-open",
        overflowY: "scroll",
        closeMarkup: '<button type="button" class="mfp-close">x</button>',
        autoFocusLast: false,
        fixedContentPos: true,
      });
    });
  }

  // Add event listener
  // const elem = document.querySelector(".hightlight");
  // function parallax(e) {
  //   let _w = window.innerWidth / 2;
  //   let _h = window.innerHeight / 2;
  //   let _mouseX = e.clientX;
  //   let _mouseY = e.clientY;
  //   let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  //   let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  //   let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  //   let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  //   elem.style.backgroundPosition = x;
  // }
  // document.addEventListener("mousemove", parallax);


  if ($('#page .section.active').scrollTop() == 0) {
    $('header').addClass('top-pages')
  } else {
    $('header').removeClass('top-pages')
  }
})

$('#page .section.active').scroll(function () {
  if ($('#page .section.active').scrollTop() == 0) {
    $('header').addClass('top-pages')
  } else {
    $('header').removeClass('top-pages')
  }
})