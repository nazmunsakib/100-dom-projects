/**
 * Change background color with Hax code
 */

window.onload = () => {
	main();
}

function main(){
	const wrapper = document.getElementById('root');
	const changeBtn = document.getElementById('change-btn');
	const output = document.getElementById('output');

	changeBtn.addEventListener('click', () => {
		wrapper.style.backgroundColor = generateHAX();
		output.value = generateHAX();
	});
}

const generateHAX = () => {
	const red = Math.floor( Math.random() * 255 );
	const green = Math.floor( Math.random() * 255 );
	const blue = Math.floor( Math.random() * 255 );

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}