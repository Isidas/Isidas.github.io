// set api url test or prod
let URL_API =
  window.location.host == "iqos-nlu-test.cleverbots.ru"
    ? "https://iqosmeetingbot.cleverbots.ru/"
    : "https://iqosmeetingbot-test.cleverbots.ru/";

URL_API += "api/actions/web_bot/detail";

const tastes = [
  {
    id: "1",
    title: "Bronze Selection",
    img: "1.png",
  },
  {
    id: "10",
    title: "Purple Wave",
    img: "12.png",
  },
  {
    id: "2",
    title: "Amber Selection",
    img: "3.png",
  },
  {
    id: "11",
    title: "Summer Breeze",
    img: "13.png",
  },
  {
    id: "3",
    title: "Slate Selection",
    img: "4.png",
  },
  {
    id: "12",
    title: "Teak Selection",
    img: "2.png",
  },
  {
    id: "4",
    title: "Gold Selection",
    img: "5.png",
  },
  {
    id: "13",
    title: "Tropical Swift",
    img: "10.png",
  },

  {
    id: "5",
    title: "Ruby Fuse",
    img: "6.png",
  },
  {
    id: "14",
    title: "Creations Apricity",
    img: "15.png",
  },

  {
    id: "6",
    title: "Satin Fuse",
    img: "8.png",
  },

  {
    id: "15",
    title: "Creations Yugen",
    img: "17.png",
  },

  {
    id: "7",
    title: "Amarelo Fuse",
    img: "7.png",
  },
  {
    id: "16",
    title: "Creations Glaze",
    img: "14.png",
  },
  {
    id: "8",
    title: "Turquoise selection",
    img: "9.png",
  },
  {
    id: "17",
    title: "Creations Noor",
    img: "16.png",
  },

  {
    id: "9",
    title: "Green Zing",
    img: "11.png",
  },
];

const testList = [
  {
    title: "С чистого листа",
    link: "1.html",
  },
  {
    title: "Квиз «Вкус изнутри»",
    link: "2.html",
  },
  {
    title: "В Вашем вкусе",
    link: "3.html",
  },
  {
    title: "Угадать с первой ноты",
    link: "4.html",
  },
  {
    title: "Вкус Вашего настроения",
    link: "5.html",
  },
];

const achievements = [
  {
    id: 1,
    title: "Маэстро в мире табаков",
    text: "За прохождение механики «С чистого листа»",
    img: "1.svg",
    status: 0,
  },
  {
    id: 2,
    title: "Инженер инноваций",
    text: "За прохождение механики «Вкус изнутри»",
    img: "2.svg",
    status: 0,
  },
  {
    id: 3,
    title: "Знаток вкусов",
    text: "За прохождение механики «Угадать с первой ноты»",
    img: "3.svg",
    status: 0,
  },
  {
    id: 4,
    title: "Пытливый исследователь",
    text: "За прохождение механики «В Вашем вкусе»",
    img: "4.svg",
    status: 0,
  },
  {
    id: 5,
    title: "Сам себе купажист",
    text: "За прохождение механики «Вкус Вашего настроения»",
    img: "5.svg",
    status: 0,
  },
  {
    id: 6,
    title: "Эксперт по вкусам",
    text: "За прохождение всех механик",
    img: "6.svg",
    status: 0,
  },
];

$(function () {
  function createScreenChooseTaste_1() {
    document.title = "Готовы стать настоящим экспертом?";
    let text = `<div class="start__screen js_start__screen" data-number='1'>
            <div class="container">
                <div class="start__screen__top">
                    <div class="start__screen__top__text">Готовы стать настоящим экспертом в мире вкусов HEETS, узнать больше о разных сортах табака, открыть новые грани вкуса?</div>
                    <img src='images/start/bg/1.jpg' class="start__screen__top__image">
                </div>
                <div class="start__screen__content">
                    <div class="start__screen__content__title">
                        Чтобы начать, укажите
                        <b class="__blue">Ваши любимые вкусы HEETS:</b>
                    </div>
                    <div class="start__screen__content__list">
                        <div class="taste__choose__list js_taste__choose__list">
                            ${createTastesList()}
                        </div>
                    </div>

                </div>
                <div class="start__screen__btns">
                    <button class='btn__default btn__blue js_btn__choose__list js_set__tastes__local js__change__screen' data-numberscreen='2' disabled>Подтвердить выбор</button>
                </div>
            </div>
        </div>`;
    $(".js_start__screen__list").html(text);
  }

  function createScreenMenu() {
    document.title = "IQOS Служба Заботы";
    let text = `<div class="start__screen js_start__screen" data-number='2'>
            <div class="container">
                <div class="start__screen__top">
                    <div class="start__screen__top__text">С чего Вы хотите начать путешествие в мир вкусов?</div>
                    <img src='images/start/bg/2.jpg' class="start__screen__top__image">
                </div>
                <div class="start__screen__content">
                    <div class="list__test">
                        ${createTestList()}
                    </div>
                </div>
                <div class="start__screen__btns">
                    <button class='btn__default btn__black js__change__screen' data-numberscreen='3'>Прогресс и достижения</button>
                    <button class='btn__default btn__black js__change__screen' data-numberscreen='4'>Выбрать любимый вкус</button>
                </div>
            </div>
        </div>`;

    $(".js_start__screen__list").html(text);
  }

  function createScreenAchivments() {
    sendEventAnalitic("btn_progress_and_achieve");
    let text = `<div class="start__screen js_start__screen" data-number='3'>
            <div class="container">
                <div class="top__achievement js_top__achievement">
                    ${topAchievements()}
                </div>

                <div class="start__screen__content">
                    <div class="list__achievement js_list__achievement">
                        ${createAchievementsList()}
                    </div>
                </div>
                <div class="start__screen__btns js_start__screen__btns">
                    <button class='btn__default btn__blue js__change__screen' data-numberscreen='2'>Назад</button>
                </div>
            </div>
        </div>`;

    $(".js_start__screen__list").html(text);
  }

  function createScreenChooseTaste_2() {
    document.title = "Ваши любимые вкусы";
    sendEventAnalitic("btn_choose_taste");
    let text = `<div class="start__screen js_start__screen" data-number='4'>
            <div class="container">
                <div class="start__screen__top">
                    <div class="start__screen__top__text">
                        Ошиблись <br>с выбором в начале?
                        <span class="start__screen__top__text--add">Попробовали новый вкус, <br>и он Вам понравился?</span>
                    </div>
                    <img src='images/start/bg/3.png' class="start__screen__top__image">
                </div>
                <div class="start__screen__content">
                    <div class="start__screen__content__title">
                        Любимые вкусы можно <br>указать заново:
                    </div>
                    <div class="start__screen__content__list">
                        <div class="taste__choose__list js_taste__choose__list">
                            ${createTastesList()}
                        </div>
                    </div>

                </div>
                <div class="start__screen__btns">
                    <button class='btn__default btn__black js__change__screen' data-numberscreen='2'>Назад</button>
                    <button class='btn__default btn__blue js_btn__choose__list js_set__tastes__local js__change__screen' data-numberscreen='2'>Выбрать вкусы</button>
                </div>
            </div>
    </div>`;

    $(".js_start__screen__list").html(text);
  }

  function createStartScreen() {
    let LocalTastes = localStorage.getItem("tastes");

    // if choose tastes - show menu else - choose taste
    if (!LocalTastes) {
      createScreenChooseTaste_1();
    } else {
      createScreenMenu();
    }
  }

  //

  function changeScreen(newScreenNumber) {
    switch (newScreenNumber) {
      case 1:
        createScreenChooseTaste_1();
        break;
      case 2:
        createScreenMenu();
        break;
      case 3:
        if (checkLastAchivment()) {
          showTotalScreen();
        } else {
          createScreenAchivments();
        }
        break;
      case 4:
        createScreenChooseTaste_2();
        break;
      default:
        createScreenMenu();
        break;
    }
  }

  $(document).on("click", ".js__change__screen", function (e) {
    e.preventDefault();
    // location.reload();
    changeScreen($(this).data("numberscreen"));
  });

  function checkLastAchivment() {
    let LocalAchivmentsArray = localStorage.getItem("achievements")
      ? JSON.parse(localStorage.getItem("achievements"))
      : [];

    if (LocalAchivmentsArray.length == achievements.length - 1) return true;
    return false;
  }

  // экран достижений шапка
  function topAchievements() {
    let text = "";

    //
    let LocalAchivmentsArray = localStorage.getItem("achievements")
      ? JSON.parse(localStorage.getItem("achievements"))
      : [];
    let count = LocalAchivmentsArray.reduce(
      (total, item) => total + item.status,
      0
    );

    if (count == achievements.length - 1) count++;

    let countmax = achievements.length;

    let percent = (parseFloat(count / countmax) * 100).toFixed(0);

    achievements.forEach((item) => {});
    text += `
            <div class="top__achievement__image"><img src="images/icons/star.svg" alt="star"></div>
            <div class="top__achievement__title">Ваш прогресс</div>
            <div class="top__achievement__percent">${percent} %</div>
            <div class="top__achievement__text">Вы получили ${count} из ${countmax} достижений</div>
        `;
    return text;
  }

  // вывод списка достижний
  function createAchievementsList() {
    let text = "";
    let LocalAchivmentsArray = localStorage.getItem("achievements")
      ? JSON.parse(localStorage.getItem("achievements"))
      : [];
    let checkAchievements = (itemID, LocalAchivmentsArray) => {
      let achived = false;
      LocalAchivmentsArray.forEach((achievement) => {
        if (achievement.id == itemID && achievement.status) {
          achived = true;
          return true;
        }
      });
      return achived;
    };

    achievements.forEach((item) => {
      let achievementStatus = checkAchievements(item.id, LocalAchivmentsArray)
        ? ""
        : " no--active";

      text += `
            <div class='achievement__item${achievementStatus}'>
                <div class='achievement__item__image'>
                    <img src='images/icons/achievements/${item.img}'>
                </div>
                <div class='achievement__item__info'>
                    <div class='achievement__item__title'>${item.title}</div>
                    <div class='achievement__item__text'>${item.text}</div>
                </div>
            </div>

            `;
    });
    return text;
  }

  // set tastes to localstorage
  $(document).on("click", ".js_set__tastes__local", function (e) {
    let choosedTastesArray = [];
    $(this)
      .closest(".js_start__screen")
      .find(".js_taste__choose__list")
      .find("input:checked")
      .each(function () {
        choosedTastesArray.push({
          title: $(this).val(),
          id: $(this).data("id"),
        });
      });

    choosedTastesArray.sort(sortFunction);

    function sortFunction(a, b) {
      if (parseInt(a.id) === parseInt(b.id)) {
        return 0;
      } else {
        return parseInt(a.id) < parseInt(b.id) ? -1 : 1;
      }
    }

    let text = "";
    console.log(choosedTastesArray);
    choosedTastesArray.forEach((taste) => {
      console.log(taste.title);
      text += taste.title + "|";
    });

    console.log(text);

    text = text.substring(0, text.length - 1);
    localStorage.setItem("tastes__quize_3_0", "");
    localStorage.setItem("tastes", text);
  });

  // check choose taste and acces to btn

  $(document).on("change", ".js_taste__choose__list input", function (e) {
    let countTasteChecked = $(this)
      .closest(".js_taste__choose__list")
      .find("input:checked").length;
    let btnTaste = $(this)
      .closest(".js_start__screen")
      .find(".js_btn__choose__list");

    if (countTasteChecked == 0 || countTasteChecked > 3) {
      btnTaste.attr("disabled", true);
    } else {
      btnTaste.attr("disabled", false);
    }

    console.log(countTasteChecked);

    if (countTasteChecked > 3)
      showMessage("Вы можете выбрать от 1 до 3х вкусов");
    else {
      removeMessageTasteMessage();
    }
  });

  function showMessage(message) {
    if (!$(".js_message__popup").length) {
      let text = `
                <div class='message__popup js_message__popup'>
                    <div class='container'>
                        <button class='js_message__popup__close message__popup__close'></button>
                        <div class='message__popup__inner'>
                            <div class='message__popup__text'>${message}</div>
                            <button class='message__popup__btn js_message__popup__close'>Закрыть</button>
                        </div>
                    </div>

                </div>
            `;

      $("body").append(text);

      setTimeout(function () {
        $(".js_message__popup").addClass("active");
      }, 250);
    }
  }

  function removeMessageTasteMessage() {
    if ($(".js_message__popup").length) {
      $(".js_message__popup").removeClass("active");
      setTimeout(function () {
        $(".js_message__popup").remove();
      }, 250);
    }
  }

  function showTotalScreen() {
    setAchivmentToLocalStorage(6);
    let text = `
            <div class="total__achivment__x">
                <div class="container">
                    <div class="quize__x__item quize__x__item--status">
                    <div class='quize__x__item--status__info quize__x__item--status__info--3'>
                        <div class='quize__x__item--status__info__inner-total'>
                            <div class='quize__x__item__title quize__x__item__title--total quize__x__item__title--total--5'>Каждый вкус в коллекции стиков HEET —это кропотливая работа множества людей по всему миру: от сбора табака до создания стика</div>
                            <div class='quize__x__item__title quize__x__item__title--subtotal quize__x__item__title--subtotal--5'>Теперь Вы знаете о разнообразии
                            вкусов HEETS еще больше!</div>

                            <div class='quize__x__item--status__award'>
                                <div class='quize__x__item--status__award__title'>Вы заработали достижение:</div>
                                <img src='images/icons/achievements/6.svg' class='quize__x__item--status__award__image'>
                                <div class='quize__x__item--status__award__status quize__x__item--status__award__status--6'>Эксперт по вкусам</div>
                            </div>

                        </div>
                    </div>
                    <div class="quize__x__item__answers">
                        <button class='btn__default btn__black js__change__screen' data-numberscreen='3'>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>`;
    $(".js_start__screen__list").html(text);
  }

  $(document).on("click", ".js_message__popup__close", function (e) {
    removeMessageTasteMessage();
  });

  // generate menu
  function createTestList() {
    let text = "";
    testList.forEach((test) => {
      text += `<a href='tg://openurl?url=${test.link}' class="test__choose__item">${test.title}</a>`;
    });
    return text;
  }

  // generate tastes
  function createTastesList() {
    let text = "";
    let LocalTastesArray = localStorage.getItem("tastes")
      ? localStorage.getItem("tastes").split("|")
      : [];

    tastes.forEach((taste) => {
      let checked = LocalTastesArray.includes(taste.title) ? " checked" : "";
      text += `<label class="taste__choose__item">
                    <input data-id="${taste.id}" type="checkbox" name="tastes" value="${taste.title}"${checked}>
                    <div class="taste__choose__item__value">
                        <img src="images/start/tastes/${taste.img}" alt="${taste.title}">
                    </div>
                </label>`;
    });
    return text;
  }

  if ($(".js_start__screen__list").length) createStartScreen();
  console.log(document.title);
});

export function checkAchivmentToLocalStorage(idAchivment) {
  let LocalAchivmentsArray = localStorage.getItem("achievements")
    ? JSON.parse(localStorage.getItem("achievements"))
    : [];
  let LocalAchivmentsArrayIDS = LocalAchivmentsArray.map(
    (achivment) => achivment.id
  );

  if (LocalAchivmentsArrayIDS.includes(idAchivment)) return true;
  return false;
}

export function setAchivmentToLocalStorage(idAchivment) {
  let LocalAchivmentsArray = localStorage.getItem("achievements")
    ? JSON.parse(localStorage.getItem("achievements"))
    : [];
  let LocalAchivmentsArrayIDS = LocalAchivmentsArray.map(
    (achivment) => achivment.id
  );

  if (!LocalAchivmentsArrayIDS.includes(idAchivment)) {
    LocalAchivmentsArray.push({
      id: idAchivment,
      status: 1,
    });
  }

  localStorage.setItem("achievements", JSON.stringify(LocalAchivmentsArray));
}

export function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
}

function passedAllScenario() {
  let localPassedScenarioArray = localStorage.getItem("passedScenarioArray")
    ? JSON.parse(localStorage.getItem("passedScenarioArray"))
    : [];

  let countPassedScenarios = 0;
  localPassedScenarioArray.forEach((element) => {
    countPassedScenarios++;
  });

  if (countPassedScenarios >= achievements.length - 1) {
    return true;
  } else {
    return false;
  }
}

export function sendEventAnalitic(nameEvent) {
  let jsonSend = {
    user_id: USER_ID,
    event: nameEvent,
  };
  console.log(jsonSend);

  let PastlocalPassedScenarioArray = setPassedSceanrio(nameEvent);

  if (passedAllScenario() && nameEvent != "passed_all_scenario") {
    sendEventAnalitic("passed_all_scenario");
    return false;
  }

  if (PastlocalPassedScenarioArray.indexOf(nameEvent) === -1) {
    fetch(URL_API, {
      method: "POST",
      body: JSON.stringify(jsonSend),
    }).then((response) => console.log(response));
  } else {
    console.log("данный сценарий уже прошел");
  }
}

export function sendEventAnaliticALL(nameEvent) {
  let jsonSend = {
    user_id: USER_ID,
    event: nameEvent,
  };

  console.log(jsonSend);

  fetch(URL_API, {
    method: "POST",
    body: JSON.stringify(jsonSend),
  }).then((response) => console.log(response));
}

function setPassedSceanrio(nameEvent) {
  let commonSceanrios = [
    "bot_open",
    "btn_choose_taste",
    "btn_progress_and_achieve",
  ];
  let localPassedScenarioArray = localStorage.getItem("passedScenarioArray")
    ? JSON.parse(localStorage.getItem("passedScenarioArray"))
    : [];
  let localPassedScenarioArrayALL = localStorage.getItem(
    "passedScenarioArrayALL"
  )
    ? JSON.parse(localStorage.getItem("passedScenarioArrayALL"))
    : [];
  let PastlocalPassedScenarioArray = JSON.parse(
    JSON.stringify(localPassedScenarioArrayALL)
  );

  if (localPassedScenarioArrayALL.indexOf(nameEvent) === -1) {
    localPassedScenarioArrayALL.push(nameEvent);
    localStorage.setItem(
      "passedScenarioArrayALL",
      JSON.stringify(localPassedScenarioArrayALL)
    );

    if (commonSceanrios.indexOf(nameEvent) === -1) {
      localPassedScenarioArray.push(nameEvent);
      localStorage.setItem(
        "passedScenarioArray",
        JSON.stringify(localPassedScenarioArray)
      );
    }
  }

  return PastlocalPassedScenarioArray;
}

$(window).resize(function () {
  doContentSize();
});

function doContentSize() {
  let height = $(".js_frame_x").contents().height();
  $(".js_frame_x__content").height(height);
}

$(".js_frame_x").on("load", function () {
  doContentSize();
});

let USER_ID;

if (getUrlParameter("user_id")) {
  USER_ID = getUrlParameter("user_id");
  localStorage.setItem("USER_ID", USER_ID);
} else {
  USER_ID = localStorage.getItem("USER_ID")
    ? localStorage.getItem("USER_ID")
    : "0";
}

console.log(USER_ID);

if (sessionStorage.getItem("bot_open") != "true") {
  sendEventAnalitic("bot_open");
  sendEventAnaliticALL("new_session");
  sessionStorage.setItem("bot_open", "true");
}
console.log(document.title);
