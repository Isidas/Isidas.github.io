const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const swiperSmi = new Swiper('.smi-slider__wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.smi-slider__pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.smi-slider__button-next',
    prevEl: '.smi-slider__button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const burger = document.querySelector('.header__burger'),
      navWrapper = document.querySelector('.header__nav');

togleBurger = () => {
  burger.addEventListener('click', () =>{
    navWrapper.classList.toggle('adaptiv')
  })
}
togleBurger()
