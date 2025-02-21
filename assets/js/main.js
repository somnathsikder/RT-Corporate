
// Header Scrolling 
$(document) .ready(function(){
	// sticky menu add using scroll
	$(window) .scroll(function(){
		const scroll = $(window) .scrollTop();
		console.log(scroll);
		if (scroll > 0) {
			$(".header-area") .addClass("sticky");

		}else{
			$(".header-area") .removeClass("sticky");
		}

	});
});


// Banner Swiper Slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 0,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    thumbs: {
      swiper: swiper,
    },
  });


  // Testimonial Section Slider
  var swiper = new Swiper('.js-testimonial-slider', {
    grabCursor: true,
    spaceBetween: 30,
    autoplay:{
      delay: 3000,
    },
    pagination:{
      el: '.js-testimonial-pagination',
      clickable: true
    },
    breakpoints:{
      767:{
        slidesPerView: 2
      }
    }
  });


//pricing
