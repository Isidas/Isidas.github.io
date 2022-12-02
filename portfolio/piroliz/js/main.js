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
const toggleBurger = () => {
  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('hide');
    burgerBtn.classList.toggle('active__burger');
  });
};
toggleBurger();

//  Animate

const mySvg = new Vivus('mySvg', {
  type: 'sync',
  duration: 200
});
const pdffull1 = new Vivus('pdffuel1', {
  type: 'sync',
  duration: 200
});
const pdffull2 = new Vivus('pdffuel2', {
  type: 'sync',
  duration: 200
});
/******/ })()
;
//# sourceMappingURL=main.js.map