import { setAchivmentToLocalStorage, sendEventAnalitic } from "./main.js";
import { QUESTIONS } from "./data/4.js";

let imageFolder = "images/branch/4/";

let ChosedQuestions;
let countStep = 0;

const counterStepToHtml = () => {
  let text = `step_${"start"}`;
  if (countStep == 2) {
    text = `step_${"end"}`;
  } else if (countStep !== 0) {
    text = `step_${countStep}`;
  }
  console.log(countStep);
  $(".hide_step").html(text);
};

$(function () {
  function generateStartScreen() {
    let text = `
        <div class="quize__x__screen__first">
            <div class="quize__x__screen__content">
                <img src="images/branch/4/0.jpg">
                <div class="quize__x__screen__first__info">
                    <div class="quize__x__screen__first__title">Можете ли Вы назвать себя знатоком вкусов HEETS?</div>
                    <div class="quize__x__screen__first__text">Предлагаем угадать, какой вкус мы загадали сегодня</div>
                </div>
            </div>
            <div class="start__screen__btns">
                <button class='btn__default btn__blue__filled quize__x__item__variant js__counter js__start__quize--4'>Угадать</button>
                <a href='index.html' target="_self" class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  function startQuize() {
    // и в след строке фильтрую их на те - на которые пользователь еще не отечал
    if (getLastTastesArray(QUESTIONS).length) {
      ChosedQuestions = getLastTastesArray(QUESTIONS);
    } else {
      ChosedQuestions = QUESTIONS;
      localStorage.removeItem("tastes__quize_4");
    }

    console.log(ChosedQuestions);

    generateQuestion(ChosedQuestions);
  }

  function getLastTastesArray(questions) {
    let LocalTastesArrayPassed = localStorage.getItem("tastes__quize_4")
      ? localStorage.getItem("tastes__quize_4").split("|")
      : [];
    return questions.filter((question) => {
      return !LocalTastesArrayPassed.includes(question.name);
    });
  }

  function generateQuestion(questionArray) {
    let stepData = questionArray[0];
    let answers = `<button class='btn__default quize__x__item__variant btn__black js__show__help' data-value='0'>Хочу подсказку</button>`;

    stepData.variants.forEach((el) => {
      answers += `<button class='btn__default quize__x__item__variant btn__black js__counter js_quize__x__answer' data-value='${el[1]}'>${el[0]}</button>`;
    });
    let text = `
        <div class="quize__x__item">
            <div class="quize__x__item__title quize__x__item__title--small">Сможете назвать <br>вкус HEETS?</div>
            <div class='quize__x__item__4__content'>
                <div class="quize__x__item__image">
                    <img src='${imageFolder}list/${stepData.image}.jpg'>
                </div>
                <div class="quize__x__item__4__title js_quize__x__item__4__title">${stepData.title}</div>
                <div class="quize__x__item__4__help js_quize__x__item__4__help">
                    <div class='quize__x__item__4__help__image'>
                        <img src='${imageFolder}tastes/${stepData.image}.jpg'>
                    </div>
                    <div class='quize__x__item__4__help__info'>
                        <div class='quize__x__item__4__help__icons'>
                            <img src='${imageFolder}icons/${stepData.image}.svg'>
                        </div>
                        <div class='quize__x__item__4__help__text'> ${stepData.help}</div>
                    </div>
                </div>
            </div>
            <div class="quize__x__item__answers">
                ${answers}
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  $(document).on("click", ".js__show__help", function (e) {
    e.preventDefault();
    $(this).slideUp(150);
    $(".js_quize__x__item__4__help").fadeIn(150);
    $(".js_quize__x__item__4__title").fadeOut(150);
  });

  $(document).on("click", ".js_quize__x__answer", function (e) {
    e.preventDefault();
    showTotalScreen($(this).data("value"));
  });

  function showTotalScreen(answer) {
    sendEventAnalitic("passed_4th_scenario");
    // убираем вопрос из списка
    let tastes__quize_4 = localStorage.getItem("tastes__quize_4")
      ? localStorage.getItem("tastes__quize_4") + "|"
      : "";
    tastes__quize_4 += ChosedQuestions[0].name;
    localStorage.setItem("tastes__quize_4", tastes__quize_4);

    let awards = "";
    let titleText = "Не угадали";
    let imageAwardSize = "";
    if (answer) {
      awards = `
            <div class='quize__x__item--status__award'>
                <div class='quize__x__item--status__award__good'>Вы разбираетесь во вкусах HEETS не хуже купажистов</div>
                <div class='quize__x__item--status__award__title'>Вы заработали достижение:</div>
                <img src='images/icons/achievements/3.svg' class='quize__x__item--status__award__image'>
                <div class='quize__x__item--status__award__status quize__x__item--status__award__status--3'>Знаток вкусов</div>
            </div>`;
      titleText = "Это было непросто. <br> Но Вы отгадали!";
      imageAwardSize = " imageAwardSize";
      setAchivmentToLocalStorage(3);
    }

    let stepData = ChosedQuestions[0];
    let text = `
        <div class="quize__x__item quize__x__item--status">
           <div class='quize__x__item--status__info quize__x__item--status__info--4'>
               <div class='quize__x__item__title quize__x__item__title--total quize__x__item__title--total--4'>${titleText}</div>

                <div class="quize__x__item__4__tolal__image__wrap">
                    <div class="quize__x__item__4__tolal__image ${imageAwardSize}">
                        <img src='${imageFolder}list/${stepData.image}.jpg'>
                    </div>
                    <div class="quize__x__item__4__total">
                        <div class='quize__x__item__4__total__image'>
                            <img src='images/start/tastes/${stepData.image2}.png'>
                        </div>
                        <div class='quize__x__item__4__help__info_2'>
                            <div class='quize__x__item__4__total__title_2'>HEETS ${stepData.name}</div>
                            <div class='quize__x__item__4__total__text_2'>${stepData.text}</div>
                        </div>
                    </div>
                </div>

                ${awards}
           </div>

            <div class="quize__x__item__answers">
                <div class='btn__default btn__blue_border btn__recomendate'>
                    <div class='btn__recomendate__inner'>Рекомендуем сделать скриншот экрана, чтобы запомнить Ваш выбор!</div>
                </div>
                <a href='4.html' target="_self" class='btn__default btn__black quize__x__item__variant'>Пройти еще раз</a>
                <a href='index.html' target="_self" class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  $(document).on("click", ".js__start__quize--4", function (e) {
    e.preventDefault();
    startQuize();
  });
  $(document).on("click", ".js__counter", function (e) {
    e.preventDefault();
    countStep++;
    counterStepToHtml();
  });

  generateStartScreen();
  counterStepToHtml();
});
