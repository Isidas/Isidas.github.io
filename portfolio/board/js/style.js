const board = document.querySelector('#board');
const BOX_COUNT = 702;
const colors = ['#FFCC33', '#0066CC', '#00FF00', '#CCFF33', '#FF0000']

for (let i=0; i < BOX_COUNT; i++ ) {
	const box = document.createElement('div');
	box.classList.add('box');

	board.append(box);

	box.addEventListener('pointerover', () => setColor(box))
	box.addEventListener('pointerleave', () => removeColor(box))


}

const setColor = (el) => {
	const color = randomColors()
	el.style.backgroundColor = color
	el.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

const removeColor = (el) => {
	el.style.backgroundColor = '#1d1d1d'
	el.style.boxShadow = '0 0 2px #0000'
}

const randomColors = () => {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
