import { setAchivmentToLocalStorage,sendEventAnalitic } from './main.js';
import {
    QUESTIONS_COLOR,
    QUESTIONS_MOOD
} from './data/5.js';

let imageFolder = 'images/branch/5/';

$(function () {


    function generateStartScreen() {
        let text = `
        <div class="quize__x__screen__first">
            <div class="quize__x__screen__wrap">
                <div class="quize__x__screen__content quize__x__screen__content--small">
                    <img src="images/branch/5/0.jpg">
                    <div class="quize__x__screen__first__info">
                        <div class="quize__x__screen__first__title">Не можете <br>определиться,<br>какой вкус выбрать?</div>
                    </div>
                </div>
                <div class="quize__x__screen__path">
                    <a href="javascript:void(0)" class="js__start__quize__mood quize__x__screen__path__link quize__x__screen__path__link--1">
                        <span class="quize__x__screen__path__link__inner">Выбрать по настроению</span>
                    </a>
                    <a href="javascript:void(0)" class="js__start__quize__color quize__x__screen__path__link quize__x__screen__path__link--2">
                        <span class="quize__x__screen__path__link__inner">Выбрать по любимому цвету</span>
                    </a>
                </div>
            </div>
            <div class="start__screen__btns">
                <a href='main.html' target="main_frame" class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
        $('.js__quize').html(text);
    }


    function generateScreenMood() {


        let moodListText = '';


        QUESTIONS_MOOD.forEach((item, index) => {
            moodListText += `<div class='quize__5__mood__choose'><button data-title="${item.moodText}" data-id="${index}" class="js__start__mood__test">${item.smile}</button></div>`
        });

        let text = `
        <div class="quize__x__item quize__x__item--5">
            <div class="quize__x__item--5__wrap">
                <div class="quize__x__item__title quize__x__item__title--small">Выберите несколько эмодзи,которые соответствуют
                Вашему настроению</div>
                <div class='quize__x__item__mood__list'>
                    ${moodListText}
                </div>
            </div>

            <div class="start__screen__btns">
                <a href='javascript:void(0)' class='btn__default btn__black js__generate__startScreen'>Назад</a>
            </div>
        </div>`;
        $('.js__quize').html(text);
    }


    function generateScreenColor() {
        let colorList = ["#ED722D", "#B25442", '#B4A1CF', '#CAD74D', '#F49F7E'];
        let colorListText = '';

        colorList.forEach((color, index) => {
            colorListText +=
            `<div class='quize__5__color__choose js__start__color__test' data-id=${index} style="background:${color}">
                <div class='quize__5__color__choose__name'>${color}</div>
            </div>`
        });

        let text = `
        <div class="quize__x__item quize__x__item--5">
            <div class="quize__x__item--5__wrap">
                <div class="quize__x__item__title quize__x__item__title--small">Какой цвет нравится <br>Вам больше всего?</div>

                <div class="quize__x__item__color__image">
                    <img src="images/branch/5/color/0.jpg">
                </div>
                <div class='quize__x__item__color__list js_quize__x__item__color__list'>
                    ${colorListText}
                </div>
            </div>

            <div class="start__screen__btns">
                <a href='javascript:void(0)' class='btn__default btn__black js__generate__startScreen'>Назад</a>
            </div>
        </div>`;
        $('.js__quize').html(text);
    }

    function generateScreenMoodQuestion(id){
        let question = QUESTIONS_MOOD[id];

        let text = `
        <div class="quize__x__item quize__x__item--5">
            <div class="quize__x__item--5__wrap">

                <div class="quize__x__item__mood__top quize__x__item__mood__top--${id}">
                    <div class='quize__x__item__mood__smile'>${question.smile}</div>
                    <div class='quize__x__item__mood__top_small_title'>Ваше настроение:</div>
                    <div class='quize__x__item__mood__top_small_text'>${question.moodText}</div>
                </div>

                <div class="quize__x__item__color_question__wrap quize__x__item__color_question__wrap--mood">
                    <div class="quize__x__item__color_question__inner">
                        <img src='images/start/tastes/${question.image2}.png' class='quize__x__item__color_question__image__top'>
                        <img src='${imageFolder}mood/list/${question.image}.jpg' class='quize__x__item__color_question__image__bg'>
                        <div class='quize__x__item__color_question__info'>
                            <div class='quize__x__item__color_question__text'>${question.text}</div>
                            <div class='quize__x__item__color_question__image__wrap'>
                                <img src='${imageFolder}mood/icons/${question.image}.svg' class='quize__x__item__color_question__image'>
                                <div class='quize__x__item__color_question__title'>${question.name}</div>
                            </div>
                        </div>
                    </div>
                    <div class='quize__x__item__color_question__pack__link'>
                        <div class='btn__default btn__blue_border btn__recomendate'>
                            <div class='btn__recomendate__inner'>Рекомендуем сделать скриншот экрана, чтобы запомнить Ваш выбор!</div>
                        </div>
                    </div>
                    <div class="quize__x__item__color_question__pack__text">
                        <b>Хотите чего-то другого?</b><br>Выбрать то, что понравится именно Вам, поможет наш «Гид по вкусам»
                    </div>
                </div>
            </div>

            <div class="start__screen__btns">
                <div class='start__screen__btns__row'>
                    <a href='javascript:void(0)' class='btn__default btn__black js__total__screen'>Назад</a>
                    <a target='_blank' href='https://cloud.mc.iqos.ru/taste-advisor?qs=2495f8ad5a6e2c527997f08f9b0a3670f77cf95a11cfe04d' class='btn__default btn__blue__filled js__total__screen'>Подробнее</a>
                </div>
            </div>
        </div>`;
        $('.js__quize').html(text);
    }

    function generateScreenColorQuestion(id){
        let question = QUESTIONS_COLOR[id];

        let text = `
        <div class="quize__x__item quize__x__item--5">
            <div class="quize__x__item--5__wrap">
                <div class="quize__x__item__title quize__x__item__title--small">Цвет настроения <br> и вкуса:</div>

                <div class="quize__x__item__color_question__wrap">
                    <div class="quize__x__item__color_question__inner">
                        <img src='images/start/tastes/${question.image2}.png' class='quize__x__item__color_question__image__top'>
                        <img src='${imageFolder}color/list/${question.image}.jpg' class='quize__x__item__color_question__image__bg'>
                        <div class='quize__x__item__color_question__info'>
                            <div class='quize__x__item__color_question__text'>${question.text}</div>
                            <img src='${imageFolder}color/icons/${question.image}.svg' class='quize__x__item__color_question__image'>
                            <div class='quize__x__item__color_question__title'>${question.name}</div>
                        </div>
                    </div>
                    <div class='quize__x__item__color_question__pack__link'>
                        <div class='btn__default btn__blue_border btn__recomendate'>
                            <div class='btn__recomendate__inner'>Рекомендуем сделать скриншот экрана, чтобы запомнить Ваш выбор!</div>
                        </div>
                    </div>
                    <div class="quize__x__item__color_question__pack__text">
                        <b>Хотите чего-то другого?</b><br>Выбрать то, что понравится именно Вам, поможет наш «Гид по вкусам»
                    </div>
                </div>
            </div>

            <div class="start__screen__btns">
                <div class='start__screen__btns__row'>
                    <a href='javascript:void(0)' class='btn__default btn__black js__total__screen'>Назад</a>
                    <a target='_blank' href='https://cloud.mc.iqos.ru/taste-advisor?qs=2495f8ad5a6e2c527997f08f9b0a3670f77cf95a11cfe04d' class='btn__default btn__blue__filled js__total__screen'>Подробнее</a>
                </div>
            </div>
        </div>`;
        $('.js__quize').html(text);

    }



    function showTotalScreen(){
        sendEventAnalitic('passed_5th_scenario')
        setAchivmentToLocalStorage(5)
        let text =`
        <div class="quize__x__item quize__x__item--status">
        <div class='quize__x__item--status__info quize__x__item--status__info--3'>
             <div class='quize__x__item--status__info__inner-total'>
                 <div class='quize__x__item__title quize__x__item__title--total quize__x__item__title--total--5'>В поисках нового?</div>
                 <div class='quize__x__item__title quize__x__item__title--subtotal quize__x__item__title--subtotal--5'>В коллекции стиков HEETS<br>
                 Вы сможете выбрать вкус на Ваш вкус</div>

                 <div class='quize__x__item--status__award'>
                     <div class='quize__x__item--status__award__title'>Вы заработали достижение:</div>
                     <img src='images/icons/achievements/5.svg' class='quize__x__item--status__award__image'>
                     <div class='quize__x__item--status__award__status quize__x__item--status__award__status--5'>Сам себе купажист</div>
                 </div>

             </div>
         </div>
         <div class="quize__x__item__answers">
             <a href='main.html' target="main_frame" class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
         </div>
     </div>`;
        $('.js__quize').html(text);
    }




    $(document).on('click', '.js__total__screen', function (e) {
        showTotalScreen()
    });

    $(document).on('click', '.js__start__mood__test', function (e) {
        e.preventDefault();
        generateScreenMoodQuestion($(this).data('id'))
    });

    $(document).on('click', '.js__start__color__test', function (e) {
        e.preventDefault();
        generateScreenColorQuestion($(this).data('id'));
    });




    $(document).on('click', '.js__generate__startScreen', function (e) {
        e.preventDefault();
        generateStartScreen()
    });


    $(document).on('click', '.js__start__quize__mood', function (e) {
        e.preventDefault();
        generateScreenMood()
    });

    $(document).on('click', '.js__start__quize__color', function (e) {
        e.preventDefault();
        generateScreenColor()
    });





    generateStartScreen()
})