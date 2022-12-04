/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const aboutWrapper = document.querySelector('.about');
const stagesWrapper = document.querySelector('.stages');
const investmentsWrapper = document.querySelector('.investments');
const projectsWrapper = document.querySelector('.project');
const processWrapper = document.querySelector('.process');
const productsWrapper = document.querySelector('.products');
const plusesWrapper = document.querySelector('.pluses');
const vantageWrapper = document.querySelector('.vantage');
const apperanceWrapper = document.querySelector('.apperance');
const paybackWrapper = document.querySelector('.payback');
const recastWrapper = document.querySelector('.recast');
const ownWrapper = document.querySelector('.own');
const programsWrapper = document.querySelector('.programs');
const titleFinmodel = new Typed('.finmodel__title', {
  strings: ["Переработка мусора <br> в востребованные продукты энергетики"],
  typeSpeed: 10,
  fadeOut: true,
  fadeOutDelay: 500,
  showCursor: false
});
// const textAbout1 = new Typed('.about__text--one', {
//   strings: ["Это те самые прибыльные <br> мусорные технологии, которых <br> все говорили, а мы  взяли и сделали!"],
//   typeSpeed: 10,
//   fadeOut: true,
//   fadeOutDelay: 0,
//   showCursor: false,
//   loop: false,
//   shuffle: false,
//   loopCount: 1,

// });
// const textAbout2 = new Typed('.about__text--two', {
//   strings: ["А теперь хотим масштабировать <br> и развивать это направление, <br> предоставив вам нашу технологии <br> и долю в быстроокупаемом бизнес проекте"],
//   typeSpeed: 10,
//   fadeOut: true,
//   fadeOutDelay: 0,
//   showCursor: false,
//   loop: false,
//   shuffle: false,
//   loopCount: 1,
// });

// FAQ

const faqBtn1 = document.querySelector('.faq__item--btn--first'),
  faqBtn2 = document.querySelector('.faq__item--btn--second'),
  faqBtn3 = document.querySelector('.faq__item--btn--three'),
  faqBtn4 = document.querySelector('.faq__item--btn--four'),
  faqContent1 = document.querySelector('.faq__item--content--first'),
  faqContent2 = document.querySelector('.faq__item--content--second'),
  faqContent3 = document.querySelector('.faq__item--content--three'),
  faqContent4 = document.querySelector('.faq__item--content--four'),
  faqTitle1 = document.querySelector('.faq__item--title--first'),
  faqTitle2 = document.querySelector('.faq__item--title--second'),
  faqTitle3 = document.querySelector('.faq__item--title--three'),
  faqTitle4 = document.querySelector('.faq__item--title--four'),
  burgerBtn = document.querySelector('.menu__burger'),
  pirolizPng = document.querySelector('.piroliz__png');
pirolizSvg = document.querySelector('.piroliz__svg');
burgerMenu = document.querySelector('.menu');
function ToggleClass1() {
  faqBtn1.addEventListener('click', e => {
    faqBtn1.classList.toggle('faq__item--btn__open');
    faqContent1.classList.toggle('visually-hidden');
    faqTitle1.classList.toggle('faq__item--title__open');
  });
}
function ToggleClass2() {
  faqBtn2.addEventListener('click', e => {
    faqBtn2.classList.toggle('faq__item--btn__open');
    faqContent2.classList.toggle('visually-hidden');
    faqTitle2.classList.toggle('faq__item--title__open');
  });
}
function ToggleClass3() {
  faqBtn3.addEventListener('click', e => {
    faqBtn3.classList.toggle('faq__item--btn__open');
    faqContent3.classList.toggle('visually-hidden');
    faqTitle3.classList.toggle('faq__item--title__open');
  });
}
function ToggleClass4() {
  faqBtn4.addEventListener('click', e => {
    faqBtn4.classList.toggle('faq__item--btn__open');
    faqContent4.classList.toggle('visually-hidden');
    faqTitle4.classList.toggle('faq__item--title__open');
  });
}
ToggleClass1();
ToggleClass2();
ToggleClass3();
ToggleClass4();

////////////////////////////////////////
const toggleBurger = () => {
  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('hide');
    burgerBtn.classList.toggle('active__burger');
  });
};
toggleBurger();
setTimeout(() => {
  pirolizPng.classList.remove('hide');
  pirolizSvg.classList.add('hide');
}, 2000);
const animateBlockAbout = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.about__block--one');
    let el2 = document.querySelector('.about__block--two');
    let el3 = document.querySelector('.about__block--fhree');
    let el4 = document.querySelector('.about__block--four');
    let t1 = document.querySelector('.about__text--one');
    let t2 = document.querySelector('.about__text--two');
    setTimeout(() => {
      el1.classList.add('animate__zoomIn');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__zoomIn');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__zoomIn');
      el3.classList.add('block-visible');
    }, 1000);
    setTimeout(() => {
      el4.classList.add('animate__zoomIn');
      el4.classList.add('block-visible');
    }, 1500);
    setTimeout(() => {
      t1.classList.add('block-visible');
      t2.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t2.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
      t2.classList.add('tracking-in-expand-fwd');
    }, 2000);
  });
};
animateBlockAbout(aboutWrapper);
const animateBlockStages = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.stages__item--first');
    let el2 = document.querySelector('.stages__item--second');
    let el3 = document.querySelector('.stages__item--three');
    gsap.to("#stages__title", {
      duration: 1,
      text: "Как это работает?",
      delay: 1
    });
    gsap.to("#stages__descr", {
      duration: 2,
      text: "Мы производим пиролизные установки для утилизации и переработки отходов в продукты энергетики.",
      delay: 1
    });
    setTimeout(() => {
      el1.classList.add('animate__zoomIn');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__zoomIn');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__zoomIn');
      el3.classList.add('block-visible');
    }, 1000);
  });
};
animateBlockStages(stagesWrapper);
const animateBlockInvestments = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.investments__item--first');
    let el2 = document.querySelector('.investments__item--second');
    let el3 = document.querySelector('.investments__item--three');
    gsap.to("#investments__title", {
      duration: 2,
      text: "Кому выгодно инвестировать <br> в наш проект",
      ease: "none"
    });
    setTimeout(() => {
      el1.classList.add('animate__zoomIn');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__zoomIn');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__zoomIn');
      el3.classList.add('block-visible');
    }, 1000);
  });
};
animateBlockInvestments(investmentsWrapper);
const animateBlockProject = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.project__item--first');
    let el2 = document.querySelector('.project__item--second');
    let el3 = document.querySelector('.project__item--three');
    let el4 = document.querySelector('.project__item--four');
    let t1 = document.querySelector('.project__descr');
    let t2 = document.querySelector('.project__title');
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__fadeInLeft');
      el3.classList.add('block-visible');
    }, 1000);
    setTimeout(() => {
      el4.classList.add('animate__animated');
      el4.classList.add('animate__fadeInRight');
      el4.classList.add('block-visible');
    }, 1500);
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
      t2.classList.add('block-visible');
      t2.classList.add('tracking-in-expand-fwd');
      t2.classList.add('animate__animated');
    }, 0);
  });
};
animateBlockProject(projectsWrapper);
const animateBlockProcess = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.process__inner--first');
    let el2 = document.querySelector('.process__inner--second');
    let t1 = document.querySelector('.process__title');
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
    }, 0);
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
  });
};
animateBlockProcess(processWrapper);
const animateBlockProducts = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.products__item--first');
    let el2 = document.querySelector('.products__item--second');
    let el3 = document.querySelector('.products__item--three');
    let el4 = document.querySelector('.products__item--four');
    let el5 = document.querySelector('.products__item--five');
    let t1 = document.querySelector('.products__title');
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
    }, 0);
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInTopLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__fadeInLeft');
      el3.classList.add('block-visible');
    }, 1000);
    setTimeout(() => {
      el4.classList.add('animate__animated');
      el4.classList.add('animate__fadeInBottomLeft');
      el4.classList.add('block-visible');
    }, 1500);
    setTimeout(() => {
      el5.classList.add('animate__animated');
      el5.classList.add('animate__fadeInDown');
      el5.classList.add('block-visible');
    }, 2000);
  });
};
animateBlockProducts(productsWrapper);
const animateBlockPluses = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.pluses__item--first');
    let el2 = document.querySelector('.pluses__item--second');
    let el3 = document.querySelector('.pluses__item--three');
    gsap.to("#pluses__title", {
      duration: 2,
      text: "Основные плюсы пиролизной <br> утилизации отходов",
      ease: "none"
    });
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__zoomIn');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__zoomIn');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__zoomIn');
      el3.classList.add('block-visible');
    }, 1000);
  });
};
animateBlockPluses(plusesWrapper);
const animateBlockVantage = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.vantage__item--first');
    let el2 = document.querySelector('.vantage__item--second');
    let el3 = document.querySelector('.vantage__item--three');
    let el4 = document.querySelector('.vantage__item--four');
    let el5 = document.querySelector('.vantage__item--five');
    let el6 = document.querySelector('.vantage__item--six');
    gsap.to("#vantage__title", {
      duration: 2,
      text: "Преимущества наших <br> пиролизных установок",
      ease: "none"
    });
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInTopLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__fadeInLeft');
      el3.classList.add('block-visible');
    }, 1000);
    setTimeout(() => {
      el4.classList.add('animate__animated');
      el4.classList.add('animate__fadeInBottomLeft');
      el4.classList.add('block-visible');
    }, 1500);
    setTimeout(() => {
      el5.classList.add('animate__animated');
      el5.classList.add('animate__fadeInDown');
      el5.classList.add('block-visible');
    }, 2000);
    setTimeout(() => {
      el6.classList.add('animate__animated');
      el6.classList.add('animate__fadeInDown');
      el6.classList.add('block-visible');
    }, 2500);
  });
};
animateBlockVantage(vantageWrapper);
const animateBlockApperance = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el2 = document.querySelector('.apperance__img--first');
    let el1 = document.querySelector('.apperance__img--second');
    let t1 = document.querySelector('.apperance__title');
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
    }, 0);
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
  });
};
animateBlockApperance(apperanceWrapper);
const animateBlockPayback = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.payback__item--first');
    let el2 = document.querySelector('.payback__item--second');
    let el3 = document.querySelector('.payback__item--three');
    let t1 = document.querySelector('.payback__title');
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
    }, 0);
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__zoomIn');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__zoomIn');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__zoomIn');
      el3.classList.add('block-visible');
    }, 1000);
  });
};
animateBlockPayback(paybackWrapper);
const animateBlockRecast = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.recast__item--first');
    let el2 = document.querySelector('.recast__item--second');
    let el3 = document.querySelector('.recast__item--three');
    let el4 = document.querySelector('.recast__item--four');
    let el5 = document.querySelector('.recast__bg');
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInTopLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__fadeInLeft');
      el3.classList.add('block-visible');
    }, 1000);
    setTimeout(() => {
      el4.classList.add('animate__animated');
      el4.classList.add('animate__fadeInBottomLeft');
      el4.classList.add('block-visible');
    }, 1500);
    setTimeout(() => {
      el5.classList.add('animate__animated');
      el5.classList.add('animate__fadeInDown');
      el5.classList.add('block-visible');
    }, 2000);
  });
};
animateBlockRecast(recastWrapper);
const animateBlockOwn = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    let el1 = document.querySelector('.own__first--item__first');
    let el2 = document.querySelector('.own__first--item__second');
    let el3 = document.querySelector('.own__first--item__three');
    let t1 = document.querySelector('.own__title');
    setTimeout(() => {
      t1.classList.add('block-visible');
      t1.classList.add('animate__animated');
      t1.classList.add('tracking-in-expand-fwd');
    }, 0);
    setTimeout(() => {
      el1.classList.add('animate__animated');
      el1.classList.add('animate__fadeInLeft');
      el1.classList.add('block-visible');
    }, 0);
    setTimeout(() => {
      el2.classList.add('animate__animated');
      el2.classList.add('animate__fadeInRight');
      el2.classList.add('block-visible');
    }, 500);
    setTimeout(() => {
      el3.classList.add('animate__animated');
      el3.classList.add('animate__fadeInLeft');
      el3.classList.add('block-visible');
    }, 1000);
  });
};
animateBlockOwn(ownWrapper);
const animateBlockPrograms = wrapper => {
  wrapper.addEventListener('mouseover', () => {
    gsap.to("#programs__title", {
      duration: 2,
      text: "Мы предлагаем 2 инвестиционные программы на выбор",
      ease: "none"
    });
  });
};
animateBlockPrograms(programsWrapper);

//  Animate

const mySvg = new Vivus('mySvg', {
  type: 'sync',
  duration: 150,
  start: 'autostart'
});
const pdffull1 = new Vivus('pdffuel1', {
  type: 'sync',
  duration: 200
});
const pdffull2 = new Vivus('pdffuel2', {
  type: 'sync',
  duration: 200
});
const finmodelSvgTop = new Vivus('finmodelSvgTop', {
  type: 'sync',
  duration: 150
});
const finmodelSvgBottom = new Vivus('finmodelSvgBottom', {
  type: 'sync',
  duration: 150
});
const finmodelSvgAdaptiv = new Vivus('finmodelSvgAdaptiv', {
  type: 'sync',
  duration: 150
});
/******/ })()
;
//# sourceMappingURL=main.js.map