import { setAchivmentToLocalStorage, sendEventAnalitic } from "./main.js";
import { QUESTION, TOTALscreen } from "./data/1.js";

let imageFolder = "images/branch/1/";

$(function () {
  let countCorrectAnswer = 0;
  let step = 0;
  let countStep = 0;

  function startQuize() {
    generateQuestion(step);
  }

  const counterStepToHtml = () => {
    let text = `step_${"start"}`;
    if (step == QUESTION.length) {
      text = `step_${"end"}`;
    } else if (countStep !== 0) {
      text = `step_${step + 1}`;
    }
    $(".hide_step").html(text);
  };
  function generateQuestion() {
    let stepData = QUESTION[step];
    let answers = "";
    stepData.variants.forEach((el) => {
      answers += `<button class='btn__default quize__x__item__variant js__counter btn__black' data-value='${el[1]}'>${el[0]}</button>`;
    });
    let text = `
        <div class="quize__x__item">
            <div class="quize__x__item__title">${stepData.title}</div>
            <div class="quize__x__item__image">
                <img src='${imageFolder}${stepData.image}'>
            </div>
            <div class="quize__x__item__answers js_quize__x__item__answers">
                ${answers}
            </div>
        </div>`;
    $(".js__quize__1").html(text);
  }

  function generateStartScreen() {
    let text = `
        <div class="quize__x__screen__first">
            <div class="quize__x__screen__content">
                <img src="images/branch/1/0.jpg">
                <div class="quize__x__screen__first__info">
                    <div class="quize__x__screen__first__title">Табачный лист проходит долгий путь, чтобы оказаться в стике HEETS</div>
                    <div class="quize__x__screen__first__text">Как проходит отбор табака, и кто этим занимается – Вы можете узнать из нашего квиза</div>
                </div>
            </div>
            <div class="start__screen__btns">
                <button class='btn__default btn__blue__filled quize__x__item__variant js__counter js__start__quize--1'>Начать</button>
                <a href='index.html' class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize__1").html(text);
  }

  function checkAnswer(answer) {
    countCorrectAnswer += parseInt(answer.data("value"));
    if (answer.data("value")) {
      showCorrectScreen();
    } else {
      showWrongScreen();
    }
  }

  function showCorrectScreen() {
    let stepData = QUESTION[step].correct;
    let titleLink =
      step == QUESTION.length - 1 ? "Посмотреть результат" : "Следующий вопрос";
    let text = `
        <div class="quize__x__item quize__x__item--status">
           <div class='quize__x__item--status__info'>
                <div class='quize__x__item--status__info__inner'>
                    <div class='quize__x__item--status__icon'>
                        <img src='images/icons/correct.svg'>
                    </div>
                    <div class='quize__x__item--status__title'>${stepData.title}</div>
                    <div class='quize__x__item--status__text'>${stepData.text}</div>
                </div>
           </div>
            <div class="quize__x__item__answers">
                <button class='btn__default btn__blue__filled js__counter js___quize--1__next quize__x__item__variant'>${titleLink}</button>
                <a href='index.html' class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize__1").html(text);
  }

  function showWrongScreen() {
    let stepData = QUESTION[step].wrong;
    let titleLink =
      step == QUESTION.length - 1 ? "Посмотреть результат" : "Следующий вопрос";
    let text = `
        <div class="quize__x__item quize__x__item--status">
           <div class='quize__x__item--status__info'>
                <div class='quize__x__item--status__info__inner'>
                    <div class='quize__x__item--status__icon'>
                        <img src='images/icons/wrong.svg'>
                    </div>
                    <div class='quize__x__item--status__title'>${stepData.title}</div>
                    <div class='quize__x__item--status__text'>${stepData.text}</div>
                </div>
           </div>
            <div class="quize__x__item__answers">
                <button class='btn__default btn__blue__filled js__counter js___quize--1__next quize__x__item__variant'>${titleLink}</button>
                <a href='index.html' class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize__1").html(text);
  }

  function showTotalScreen() {
    let yetBtn = "";
    let awards = "";
    sendEventAnalitic("passed_1st_scenario");

    if (countCorrectAnswer <= 5) {
      yetBtn = `<a href='1.html' class='btn__default btn__blue__filled quize__x__item__variant'>Пройти ещё раз</a>`;
    }

    if (countCorrectAnswer > 5) {
      awards = `
            <div class='quize__x__item--status__award'>
                <div class='quize__x__item--status__award__title'>Вы заработали достижение:</div>
                <img src='images/icons/achievements/1.svg' class='quize__x__item--status__award__image'>
                <div class='quize__x__item--status__award__status'>Маэстро в мире табаков</div>
            </div>`;
      setAchivmentToLocalStorage(1);
    }
    let TotalData = TOTALscreen[countCorrectAnswer];
    console.log(countCorrectAnswer);
    console.log(TOTALscreen);
    console.log(TotalData);
    let text = `
        <div class="quize__x__item quize__x__item--status">
           <div class='quize__x__item--status__info'>
                <div class='quize__x__item--status__info__inner-total'>
                    <div class='quize__x__item--status__icon'>
                        <img src='images/icons/check.svg'>
                    </div>
                    <div class='quize__x__item--total__answer'>${countCorrectAnswer} из ${QUESTION.length}</div>
                    <div class='quize__x__item__title quize__x__item__title--total'>${TotalData.title}</div>
                    <div class='quize__x__item--status__text'>${TotalData.text}</div>
                    ${awards}
                </div>
            </div>
            <div class="quize__x__item__answers">
                ${yetBtn}
                <a href='index.html'  class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize__1").html(text);
  }

  $(document).on("click", ".js___quize--1__next", function (e) {
    e.preventDefault();
    // countStep++;
    step++;
    console.log("step and lenght - " + step);
    console.log("countCorrectAnswer - " + countCorrectAnswer);
    if (step <= QUESTION.length - 1) {
      generateQuestion(step);
    } else {
      showTotalScreen();
      console.log(countCorrectAnswer);
    }
  });

  $(document).on("click", ".js_quize__x__item__answers button", function (e) {
    e.preventDefault();
    checkAnswer($(this));
  });

  $(document).on("click", ".js__start__quize--1", function (e) {
    e.preventDefault();
    // countStep++;
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
