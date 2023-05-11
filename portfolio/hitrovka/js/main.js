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
const tractirDialog = document.querySelector('.tractir_dialog');
const tractirBlock = document.querySelector('.tractir_block');
const antikvarDialog = document.querySelector('.antikvar_dialog');
const antikvarBlock = document.querySelector('.antikvar_block');
const radjiBlock = document.querySelector('.radji_dialog');
const radjiItem = document.querySelectorAll('.radji-item');
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
    radjiBlock.style.display = 'grid';
  });
});
const changeDialogTextTractir = (nameDialog, clickBlock, nameArr) => {
  let currentIndex = 1;
  function changeTextDialog() {
    if (nameDialog) {
      nameDialog.innerHTML = nameArr[currentIndex];
      if (currentIndex === nameArr.length - 1) {
        nameDialog.innerHTML = `${nameArr[currentIndex]} 
                <a href="./map.html" class="map_link">
                        <p class="remove_map">«Вернуться на карту»</p>
                    </a>`;
        clickBlock.removeEventListener('click', changeText);
      } else {
        currentIndex = (currentIndex + 1) % nameArr.length;
      }
    } else {
      null;
    }
  }
  clickBlock.addEventListener('click', changeTextDialog);
  clickBlock.addEventListener('touchend', changeTextDialog);
};
fetch(url).then(response => response.json()).then(resp => {
  console.log(resp);
  const location = resp.location;
  const heroes = resp.heroes;

  // function changeTextAntikvar() {
  //     if(antikvarDialog) {
  //         antikvarDialog.innerHTML= location[3].dialog[currentIndex];
  //         if (currentIndex === location[3].dialog.length - 1) {
  //             antikvarDialog.innerHTML = `${location[3].dialog[currentIndex]} 
  //             <a href="./map.html" class="map_link">
  //                     <p class="remove_map">«Вернуться на карту»</p>
  //                 </a>`
  //             antikvarBlock.removeEventListener('click', changeText);
  //         } else {
  //             currentIndex = (currentIndex + 1) % location[3].dialog.length;
  //         }
  //     } else {
  //         null
  //     }
  // }

  addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc);
  addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc);
  addCardTextPolice(policeTitle, policeSubTitle, location[2].name, location[2].desc);
  addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc);
  addCardTextNochlejka(nochlejkaTitle, nochlejkaSubTitle, location[4].name, location[4].desc);
  changeDialogTextTractir(tractirDialog, tractirBlock, location[1].dialog);
  changeDialogTextAntikvar(antikvarDialog, antikvarBlock, location[3].dialog);
  // antikvarBlock.addEventListener('click', () => {
  //     changeTextDialog(antikvarDialog, antikvarBlock, location[3].dialog)
  // });
}).catch(error => console.log('Error', error));
/******/ })()
;
//# sourceMappingURL=main.js.map