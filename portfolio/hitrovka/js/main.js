/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const url = 'https://hitrovka.woman.ru/get_data/';
const antikvarTitle = document.querySelector('.antikvar_title');
const antikvarSubTitle = document.querySelector('.antikvar_subtitle');
const radjiTitle = document.querySelector('.radji_title');
const radjiSubTitle = document.querySelector('.radji_subtitle');
const tractiriTitle = document.querySelector('.traktir_title');
const tractirSubTitle = document.querySelector('.traktir_subtitle');
const policeTitle = document.querySelector('.police_title');
const policeSubTitle = document.querySelector('.police_subtitle');
const nochlejkaTitle = document.querySelector('.nochlejka_title');
const nochlejkaSubTitle = document.querySelector('.nochlejka_subtitle');
const radjiBlock = document.querySelector('.radji_dialog');
const radjiItem = document.querySelectorAll('.radji-item');
const changeDialogTraktir = () => {
  const traktirDialog = document.querySelector('.tractir_dialog');
  const traktirBlock = document.querySelector('.tractir_block');
  const texts = ["- Что это? Портсигар? Ну дела! А ведь про него давеча спрашивал городовой! Пропади моя душа, если я вру! Накинь пару монет, расскажу, как дело было!", "- Заходит, значит, городовой… Ну, сброд, значит, с лавок шасть! А он им только: «Цыц, люд арестантский, не по вашу я душу!» А сам, значит, ко мне! И рисунок протягивает. А на нем… Ентот портсигар! Только еще какие-то буквы вот тут намалеваны… Какие? А я почем знаю? Мы университетов не кончали, звиняйте!"];
  let currentIndex = 1;
  function changeText() {
    traktirDialog.textContent = texts[currentIndex];
    if (currentIndex === texts.length - 1) {
      traktirDialog.removeEventListener('click', changeText);
      traktirDialog.innerHTML = `${texts[currentIndex]} 
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`;
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }
  if (traktirDialog) {
    traktirBlock.addEventListener('click', changeText);
    traktirBlock.addEventListener('tap', changeText);
  } else {
    null;
  }
};
changeDialogTraktir();
const changeDialogAntikvar = () => {
  const antikvarDialog = document.querySelector('.antikvar_dialog');
  const antikvarBlock = document.querySelector('.antikvar_block');
  const texts = ["- Подскажите, любезнейший, что вы знаете про вот этот [ПРЕДМЕТ]?", "- Знать-то я знаю много, но у нас в районе действует правило, кто много говорит, долго не живет. К тому же информация стоит денег…", "- Ну хорошо. Вот вам серебряный рубль. Этого хватит?", "- Этого хватит, чтобы меня похоронить, если я назову тебе имя…", "- А если я дам золотой?", "- Давай так. Имя я не назову, но скажу, где искать. А уж пойдешь ты туда или нет, решать тебе… Но я бы не советовал туда соваться. Плохое это место!", "- Вот деньги!"];
  let currentIndex = 1;
  function changeText() {
    antikvarDialog.textContent = texts[currentIndex];
    if (currentIndex === texts.length - 1) {
      antikvarDialog.removeEventListener('click', changeText);
      antikvarDialog.innerHTML = `${texts[currentIndex]} 
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`;
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }
  if (antikvarDialog) {
    antikvarBlock.addEventListener('click', changeText);
    antikvarBlock.addEventListener('tap', changeText);
  } else {
    null;
  }
};
changeDialogAntikvar();
const addCardTextRadji = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextAntikvar = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextTractir = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextPolice = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextNochlejka = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
radjiItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    radjiBlock.style.display = 'block';
  });
});
fetch(url).then(response => response.json()).then(resp => {
  console.log(resp);
  const location = resp.location;
  const heroes = resp.heroes;
  addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc);
  addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc);
  addCardTextPolice(policeTitle, policeSubTitle, location[2].name, location[2].desc);
  addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc);
  addCardTextNochlejka(nochlejkaTitle, nochlejkaSubTitle, location[4].name, location[4].desc);
}).catch(error => console.log('Error', error));
/******/ })()
;
//# sourceMappingURL=main.js.map