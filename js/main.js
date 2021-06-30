const btnMenu = document.querySelector(".btn-mobile");

btnMenu.addEventListener('click', () =>{
    const nav = document.querySelector('.nav');

    nav.classList.toggle("active");
})

// Main Slider
const mainSlide = new Swiper('.main-slider', {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  });

  // Bicycle Shop Slide
  const bicycleSlide = new Swiper(".bicycle-shop-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.box-slider .btn-next.bic',
      prevEl: '.box-slider .btn-prev.bic',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      850: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  // Components Shop Slide
  const componentsSlide = new Swiper(".components-shop-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.components .box-slider .btn-next.comp',
      prevEl: '.components .box-slider .btn-prev.comp',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      850: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  // Acessories Shop Slide
  const acessoriesSlide = new Swiper(".acessories-shop-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.acessories .box-slider .btn-next.aces',
      prevEl: '.acessories .box-slider .btn-prev.aces',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      850: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  