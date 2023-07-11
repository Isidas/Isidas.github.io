import { setAchivmentToLocalStorage, sendEventAnalitic } from "./main.js";
import { QUESTIONS, QUESTIONSMAPPING } from "./data/3.js";

let imageFolder = "images/branch/3/";

$(function () {
  let questionsThis;
  let step;
  let countStep = 0;
  const counterStepToHtml = () => {
    let text = `step_${"start"}`;
    if (countStep == 4) {
      text = `step_${"end"}`;
    } else if (countStep !== 0) {
      text = `step_${countStep}`;
    }
    console.log(countStep);
    $(".hide_step").html(text);
    console.log(countStep, "countStep");
    console.log(counterMaxNum.length, "counterMaxNum");
  };
  function generateStartScreen() {
    step = 0;
    let text = `
        <div class="quize__x__screen__first">
            <div class="quize__x__screen__content">
                <img src="${imageFolder}/0.jpg">
                <div class="quize__x__screen__first__info">
                    <div class="quize__x__screen__first__title">В мире HEETS есть те, кто разделяет Ваши вкусы </div>
                    <div class="quize__x__screen__first__text">Мы расскажем, какие вкусы HEETS выбирают в дополнение к вкусам-фаворитам</div>
                </div>
            </div>
            <div class="start__screen__btns">
                <button class='btn__default btn__blue__filled quize__x__item__variant js__counter js__start__quize--3'>Узнать</button>
                <a href='index.html' target="main_frame" class='btn__default btn__black quize__x__item__variant'>Назад на главную</a>
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  function generateQuestion() {
    let question = questionsThis[step];

    let text = `
        <div class="quize__x__item__3">
            <div class='quize__x__item__title quize__x__item__title__3'>Персональная подборка<br>вкусов для Вас</div>
            <div class='quize__x__item__3__inner'>
                <div class='quize__x__item__3__inner_x'>
                    <img src='${imageFolder}list/${question.image}.jpg' class='quize__x__item__3__image__bg'>
                    <img src='images/start/tastes/${question.image2}.png' class='quize__x__item__3__image__top'>
                    <div class='quize__x__item__3__title__inner'>HEETS ${question.nameText}</div>
                </div>
                <div class='quize__x__item__3__row__info'>
                    <div class='quize__x__item__3__row__icon'>
                        <img src='${imageFolder}icons/${question.image}.svg' class='quize__x__item__3__image__icon'>
                    </div>
                    <div class='quize__x__item__3__row__text'>${question.text}</div>
                </div>
                <div class='quize__x__item__3__text__inner'>${question.text2}</div>
            </div>


            <div class="start__screen__btns">
                <div class='btn__default btn__blue_border btn__recomendate'>
                    <div class='btn__recomendate__inner'>Рекомендуем сделать скриншот экрана, чтобы запомнить Ваш выбор!</div>
                </div>

                <div class='start__screen__btns__row'>
                    <a href='javascript:void(0)' target="main_frame" class='btn__default js__counter_back btn__black js__prev__step'>Назад</a>
                    <a href='javascript:void(0)' target="main_frame" class='btn__default btn__blue__filled js__counter js__next__step'>Следующий вкус</a>
                </div>
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  function generateTotalScreen() {
    sendEventAnalitic("passed_3rd_scenario");
    setAchivmentToLocalStorage(4);

    let text = `
        <div class="quize__x__item quize__x__item--status">
           <div class='quize__x__item--status__info quize__x__item--status__info--3'>
                <div class='quize__x__item--status__info__inner-total'>
                    <div class='quize__x__item__title quize__x__item__title--total quize__x__item__title--total--3'>Когда дело доходит до стиков HEETS, у Вас точно есть из чего выбрать</div>


                    <div class='quize__x__item--status__award'>
                        <div class='quize__x__item--status__award__title'>Вы заработали достижение:</div>
                        <img src='images/icons/achievements/4.svg' class='quize__x__item--status__award__image'>
                        <div class='quize__x__item--status__award__status quize__x__item--status__award__status--4'>Пытливый исследователь</div>
                    </div>

                    <div class='quize__x__item--status__award_3_image'>
                        <img src='images/branch/3/end.jpg'>
                    </div>

                    <div class='quize__x__item--status__award_3_add__title'>
                        А ещё выбрать из всего разнообразия вкусов<br>
                        <b>Вам поможет «Гид по вкусам»</b>
                    </div>
                </div>
            </div>
            <div class="quize__x__item__answers">
                <a href='index.html' target="main_frame" class='btn__default btn__black quize__x__item__variant'>На главную</a>
                <a href='https://cloud.mc.iqos.ru/taste-advisor?qs=2495f8ad5a6e2c527997f08f9b0a3670f77cf95a11cfe04d' target='_blank' class='btn__default btn__blue__filled quize__x__item__variant js__close_bot'>Подробнее</a>
            </div>
        </div>`;
    $(".js__quize").html(text);
  }

  $(document).on("click", ".js__prev__step", function (e) {
    e.preventDefault();
    step--;
    if (step >= 0) {
      generateQuestion(step);
    } else {
      generateStartScreen();
    }
  });

  $(document).on("click", ".js__next__step", function (e) {
    e.preventDefault();
    step++;
    if (step < questionsThis.length) {
      generateQuestion(step);
    } else {
      generateTotalScreen();
    }
  });

  $(document).on("click", ".js__start__quize--3", function (e) {
    e.preventDefault();
    questionsThis = getQuestionList();
    // console.log(questionsThis)
    generateQuestion(step);
  });

  function getQuestionList() {
    // получаем выбранные вкусы
    let tastesChoosedUser = localStorage.getItem("tastes")
      ? localStorage.getItem("tastes").toLowerCase().split("|")
      : [];

    // получаю  массив с выбранными вкусами и еще данными

    console.log(tastesChoosedUser, "array");
    let questionLikeArrays = QUESTIONSMAPPING.filter((question) => {
      return tastesChoosedUser.includes(question.name.toLowerCase());
    });

    //  получаю весь массив похожих вкусов
    let questionLikeSimple = [];
    questionLikeArrays.forEach(function (item) {
      questionLikeSimple.push(...item.list);
    });

    // оставляем только уникальные значения
    let uniqTastes = [...new Set(questionLikeSimple)];

    console.log(uniqTastes);

    // убираем вкусы которые пользователь выбрал сначала
    let likeTastes = [];
    let choosedUser;
    uniqTastes.forEach(function (item) {
      choosedUser = false;
      tastesChoosedUser.forEach(function (itemChoosedUser) {
        if (itemChoosedUser.toLowerCase() == item.toLowerCase())
          choosedUser = true;
      });

      if (!choosedUser) likeTastes.push(item.toLowerCase());
    });

    console.log(likeTastes);
    // получаем окончательный список вопросов исходя из выбора пользователя

    let questions = [];
    likeTastes.forEach(function (tasteName) {
      QUESTIONS.forEach(function (question) {
        if (question.name.toLowerCase() == tasteName) questions.push(question);
      });
    });

    console.log(questions);

    let questionsBeforeLocal = questions;

    let passedQuestions = localStorage.getItem("tastes__quize_3_0")
      ? localStorage.getItem("tastes__quize_3_0").split("|")
      : [];
    questions = questions.filter((question) => {
      return !passedQuestions.includes(question.name);
    });

    console.log("yet local");
    console.log(passedQuestions);

    questions = questions.slice(0, 3);

    console.log("questions.length");
    console.log(questions.length);

    if (questions.length < 3) {
      let yetNeed = 3 - questions.length;
      for (let index = 0; index < yetNeed; index++) {
        questions.push(questionsBeforeLocal[index]);
        localStorage.setItem("tastes__quize_3_0", "");
      }
    }

    console.log("questions.slice");
    console.log(questions);

    let tastes__quize_3 = localStorage.getItem("tastes__quize_3_0")
      ? localStorage.getItem("tastes__quize_3_0") + "|"
      : "";
    questions.forEach(function (question) {
      tastes__quize_3 += question.name + "|";
    });
    tastes__quize_3 = tastes__quize_3.substring(0, tastes__quize_3.length - 1);
    localStorage.setItem("tastes__quize_3_0", tastes__quize_3);

    return questions;
  }
  $(document).on("click", ".js__counter", function (e) {
    e.preventDefault();
    countStep++;
    counterStepToHtml();
  });
  $(document).on("click", ".js__counter_back", function (e) {
    e.preventDefault();
    countStep--;
    counterStepToHtml();
  });
  generateStartScreen();
  counterStepToHtml();
});
