/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
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
const aboutWrapper = document.querySelector('.about');
const stagesWrapper = document.querySelector('.stages');
const recastWrapper = document.querySelector('.recast');
const ownWrapper = document.querySelector('.own');
const animateBlock = (wrapper, block, animateClass) => {
  wrapper.addEventListener('mouseover', () => {
    let el = document.querySelectorAll(block);
    el.forEach(item => {
      item.classList.add(animateClass);
    });
  });
  // wrapper.addEventListener('mouseout', () => {
  //   let el = document.querySelectorAll(block);
  //   el.forEach(item => {
  //     item.classList.remove(animateClass)
  //   })
  // })
};

animateBlock(aboutWrapper, '.about__block', 'animate__zoomIn');
animateBlock(stagesWrapper, '.stages__item', 'animate__zoomIn');
animateBlock(recastWrapper, '.recast__bg', 'animate__fadeInUp');
animateBlock(ownWrapper, '.own__first--item__first', 'animate__bounceInLeft');
animateBlock(ownWrapper, '.own__first--item__second', 'animate__bounceInRight');
animateBlock(ownWrapper, '.own__first--item__three', 'animate__bounceInLeft');
animateBlock(ownWrapper, '.own__second--item--first', 'animate__bounceInDown');
animateBlock(ownWrapper, '.own__second--item--second', 'animate__bounceInUp');
animateBlock(ownWrapper, '.own__second--item--three', 'animate__bounceInDown');
const ownTitle = document.querySelectorAll('.own__second--item__title');
const ownSubtitle = document.querySelectorAll('.own__second--item__text');
const recastTitle = document.querySelectorAll('.recast__item--title');
const recastSubtitle = document.querySelectorAll('.recast__item--descr');
const animateText = (wrapper, title, subtitle) => {
  wrapper.addEventListener('mouseover', () => {
    title.forEach(item => {
      item.classList.add('tracking-in-contract');
    });
    subtitle.forEach(item => {
      item.classList.add('text-focus-in');
    });
  });
  // wrapper.addEventListener('mouseout', () => {
  //   contentTitle.forEach(item => {
  //     item.classList.remove('tracking-in-contract')
  //   })
  //   contentDescr.forEach(item => {
  //     item.classList.remove('text-focus-in')
  //   })
  // })
};

animateText(ownWrapper, ownTitle, ownSubtitle);
animateText(recastWrapper, recastTitle, recastSubtitle);
//  Animate

const mySvg = new Vivus('mySvg', {
  type: 'sync',
  duration: 200,
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