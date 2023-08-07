
window.onload = () => {
	main();
}

function main(){
	const wrapper = document.getElementById('root');
	const changeBtn = document.getElementById('change-btn');
	const output = document.getElementById('output');
	const copyBtn = document.getElementById('copy-btn');

	changeBtn.addEventListener('click', function(){
		wrapper.style.backgroundColor = generateHaxCode();
		output.value = generateHaxCode();
		copyBtn.innerText = 'Copy';
	});

	copyBtn.addEventListener('click', function(){
		navigator.clipboard.writeText( output.value );
		copyBtn.innerText = 'copy to clipboard';
	});

}

function generateHaxCode(){
	const red = Math.floor( Math.random() * 255 );
	const green = Math.floor( Math.random() * 255 );
	const blue = Math.floor( Math.random() * 255 );

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}