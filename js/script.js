'use strict';

class DutBgc {
	constructor(wrapper, countDut) {
		this.wrapper     = document.querySelector(wrapper);
		this.bgContainer = this.wrapper.querySelector('.duts-bg');
		this.countDut    = countDut;
	}

	createDut() {
		for (let i = 0; i <= this.countDut; i ++) {
			const el = document.createElement('div');
			el.classList.add(`dutbg-${Math.floor(Math.random()*5)}`);
			this.bgContainer.append(el);
		}
	}
}

const dut = new DutBgc('.advantages', 430);
			dut.createDut();

const surveyDutBg = new DutBgc('.survey', 530);
			surveyDutBg.createDut();

const videoblockDutBg = new DutBgc('.videoblock', 400);
			videoblockDutBg.createDut();

const footerDutBg = new DutBgc('.footer', 200);
			footerDutBg.createDut();





class SurveySlider {
	constructor(survey, prevBtn, nextBtn) {
		this.survey = document.querySelectorAll(survey);
		this.prev    = document.querySelectorAll(prevBtn);
		this.next   = document.querySelectorAll(nextBtn);
	}
	nextSlide() {
		let a = 0;
		this.prev.forEach((item) => {
			item.addEventListener ('click', () => {
				if (a != 0) {
					this.survey[a].classList.remove('active');
					this.survey[--a].classList.add('active');
				}
			});
		});
		this.next.forEach((item) =>{
			item.addEventListener('click', () => {
				this.survey[++a].classList.add('active');
				this.survey[a-1].classList.remove('active');
			});
		});
	}
}

const survey = new SurveySlider('.survey__frame', '.prev', '.next');
			survey.nextSlide();

const surveyMobile = new SurveySlider('.survey__mobile-block', '.prev-mobile', '.next-mobile');
		  surveyMobile.nextSlide();


class Slider {
	constructor(wrapper, wrapperBtn, widthSlide, countSlides) {
		this.wrapper = document.querySelector(wrapper);
		this.wrapperBtn = document.querySelector(wrapperBtn);
		this.slide = this.wrapper.querySelectorAll('.slide');
		this.prevBtn = this.wrapperBtn.querySelector('.arrow-left');
		this.nextBtn = this.wrapperBtn.querySelector('.arrow-right');
		this.widthSlide = widthSlide;
		this.countSlides = countSlides;
		this.offset = 0;
		this.nextBtn.addEventListener('click', () => {
			this.showNextSlide();
		});
		this.prevBtn.addEventListener('click', () => {
			this.showPrevSlide();
		});
	}

	showNextSlide() {
		this.offset = this.offset + this.widthSlide;
		if (this.offset > (this.widthSlide * this.slide.length) - this.widthSlide * this.countSlides) {
			this.offset = 0;
		}
		this.wrapper.style.left = -this.offset + 'px';
	}

	showPrevSlide() {
		this.offset = this.offset - this.widthSlide;
		if (this.offset < 0) {
			this.offset = (this.widthSlide * this.slide.length)- this.widthSlide*this.countSlides;
		}
		this.wrapper.style.left = -this.offset + 'px';
	}
}


const slider = new Slider('.slider-section', '.portfolio-section-btns', 570, 2);
			slider.showNextSlide();
			slider.showPrevSlide();

const videoSlider = new Slider('.videoblock-slider-line','.videoblock-header-arrows', 285, 4);
			videoSlider.showNextSlide();
			videoSlider.showPrevSlide();

const burger     = document.querySelector('.header__menu-burger'),
			burgerMenu = document.querySelector('.header__menu-links');

function showBurger() {
	burger.addEventListener('click', () => {
		burgerMenu.classList.toggle('nav-active');
		burger.classList.toggle('burger-toggle');
	});
}
showBurger();

 