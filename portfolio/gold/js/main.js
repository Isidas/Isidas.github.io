class Counter {
	constructor(){
		this.btnMinus = document.querySelector('.counter-minus');
		this.btnPlus  = document.querySelector('.counter-plus');
		this.count    = document.querySelector('.counter-text');
		let minusBtn = document.getElementById('minus');
		let plusBtn = document.getElementById('pluse');
		let numberBot = document.getElementById('number');
		this.number   = 0;

		this.btnPlus.addEventListener('click', ()=>{
			this.number = this.count.innerHTML;
			if(this.number < 99){
				this.count.innerHTML++;
			}
		});

		this.btnMinus.addEventListener('click', ()=>{
			this.number = this.count.innerHTML;
			if(this.number > 0){
				this.count.innerHTML--;
			}
		});

		plusBtn.addEventListener('click', ()=>{
			let number = numberBot.innerHTML;
			if(number < 99){
				numberBot.innerHTML++;
			}
		});

		minusBtn.addEventListener('click', ()=>{
			let number = numberBot.innerHTML;
			if(number > 0){
				numberBot.innerHTML--;
			}
		});
	}
}
new Counter();

function randomCube() {
	let btnCube = document.querySelector('.coube'),
		img = [
			'./img/cube1.svg',
			'./img/cube2.svg',
      		'./img/cube3.svg',
      		'./img/cube4.svg',
      		'./img/cube5.svg',
      		'./img/cube6.svg',
		];
	
	btnCube.addEventListener('click', () => {
		btnCube.src = img[Math.floor(Math.random()*img.length)];
	});
}
randomCube();


function frameColor() {
	let btnColorTop   = document.querySelector('.btn-color-top');
	let btnColorBot   = document.querySelector('.btn-color-bot');
	let frameTop      = document.querySelector('.frame-top');
	let frameBot = document.querySelector('.frame-bot');
	let frameEventTop = document.querySelector('.frame-event-top');
	let frameEventBot = document.querySelector('.frame-event-bot');
	let data = [
		{
			colorsFr: ["red", "green", "blue", "violet"]
		},
		{
			colorsBtn: ["btn-red", "btn-green", "btn-blue", "btn-violet"]
		},
	];
	let count = [Math.floor(Math.random())];
	
	
	function firstColor () {
		data.forEach(() => {
			frameTop.classList.add(data[0].colorsFr[count]);
			frameEventTop.classList.add(data[1].colorsBtn[count]);
			frameBot.classList.add(data[0].colorsFr[count]);
			frameEventBot.classList.add(data[1].colorsBtn[count]);
		});
	}	
	firstColor();

	btnColorTop.addEventListener('click', () =>{
		frameTop.classList.remove(data[0].colorsFr[count]);
		frameEventTop.classList.remove(data[1].colorsBtn[count]);
		if (count == data[0].colorsFr[0].length  && data[1].colorsBtn[0].length) {
			count = 0;
		} else{count ++;}
		changeFrameColorTop();
	});

	btnColorBot.addEventListener('click', () =>{
		frameBot.classList.remove(data[0].colorsFr[count]);
		frameEventBot.classList.remove(data[1].colorsBtn[count]);
		if (count == data[0].colorsFr[0].length  && data[1].colorsBtn[0].length) {
			count = 0;
		} else{count ++;}

		changeFrameColorBot();
	});
	
	function changeFrameColorTop () {
		frameTop.classList.add(data[0].colorsFr[count]);
		frameEventTop.classList.add(data[1].colorsBtn[count]);
	}

	function changeFrameColorBot () {
		frameBot.classList.add(data[0].colorsFr[count]);
		frameEventBot.classList.add(data[1].colorsBtn[count]);
	}

}
frameColor();

function randomPopup () {
	let btnEvent  = document.querySelectorAll('.frame-event');
	let popup     = document.querySelector('.popup');
	let imgEvent  = document.querySelectorAll('.img-event ');
	let textEvent = document.querySelector('.frame-text');
	let textEventBot = document.querySelector('.frame-text-bot'),
	data = [
		"Розыгрыш бомб требует доплаты +3 золота",
		"При уничтожении карты вы получаете в КАЗНУ золото равное стоимости уничтоженной карты",
		"Каждая площадка получает: «Закрыться — получить 1 золото»",
		"Ваши ПЛОЩАДКИ/БАЗА получают: «Движение дальность 1 за 1 золота»",
		"В начале хода потратьте 1 золота для открытия каждой карты (карты можно не открывать)",
		"Все ЮНИТЫ получают +1 к передвижению",
		"В начале хода возьмите две карты из КОЛОДЫ вместо одной",
		"БАЗА может вывести на поле боя две карты вместо одной",
		"БАЗА получает свойство: «Перетасуйте КОЛОДУ и вытяните КАРТУ. Если это СОБЫТИЕ — можете бесплатно разыграть его»",
		"Вывод карт на поле боя возможен на любых клетках возле ваших ПЛОЩАДОК",
		"Ничего не происходит",
		"+1 ко всем броскам кубика",
		"-1 ко всем броскам кубика",
	];

	function changePopupAndText(imgEvent, text){
    // popup
    popup.style.display = "block";
    imgEvent.classList.add('active');
    // text
    data.forEach(el => {
      textEvent.innerText = `${text}`;
			textEventBot.innerText = `${text}`;
    });
  }

  btnEvent.forEach(el => {
    el.addEventListener('click', () => {
      let randomImg = Math.floor(Math.random()*imgEvent.length);
      changePopupAndText(imgEvent[randomImg], data[randomImg]);
    });
  });

  popup.addEventListener('click', () => {
    popup.style.display = "none";
    popup.querySelector('.active').classList.remove('active');
  });
}
randomPopup();



