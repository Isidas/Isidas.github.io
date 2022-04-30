'use strict';

const burger = document.querySelector('.menu__burger'),
	  nav    = document.querySelector('.menu__navigation');

function showBurger () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('active');
		burger.classList.toggle('toggle');
	});
}
showBurger();


new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clikable: true
	},
	slidesPerView: 4,
});

new Swiper('.swiper2', {
	navigation: {
	  nextEl: '.feedback-swiper-button-next',
	  prevEl: '.feedback-swiper-button-prev',
	},
	pagination: {
		el: '.feedback-swiper-pagination',
		clikable: true
	},
	slidesPerView: 3,

});

const forms = document.querySelectorAll('input'),
      btnForm = document.querySelector('.btn-form');


const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

btnForm.addEventListener('click', () => {
    forms.forEach(item => {
        postData(item);
    });
});



function postData(form) {
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'multipart/form-data');
        const formData = new FormData(form);

        request.send(formData);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });
    });
}



