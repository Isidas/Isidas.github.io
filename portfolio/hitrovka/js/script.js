const url = 'https://hitrovka.woman.ru/get_data/';


const antikvarTitle = document.querySelector('.antikvar_title');
const antikvarSubTitle = document.querySelector('.antikvar_subtitle');
const radjiTitle = document.querySelector('.radji_title');
const radjiSubTitle = document.querySelector('.radji_subtitle');
const tractiriTitle = document.querySelector('.traktir_title');
const tractirSubTitle = document.querySelector('.traktir_subtitle');
const policeTitle = document.querySelector('.police_title');
const policeSubTitle = document.querySelector('.police_subtitle');

const addCardTextRadji = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextAntikvar = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextTractir = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextPolice= (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}

const addDialog = (nameDialog) => {

}

fetch(url)
  .then(response => response.json())
  .then(resp => {
    console.log(resp);
    const location = resp.location
    const heroes = resp.heroes
    addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc)
    addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc);
    addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc)
    addCardTextPolice(policeTitle, policeSubTitle, location[1].name, location[1].desc)
    
  })
  .catch(error => console.log('Error', error))



