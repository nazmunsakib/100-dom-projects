
/**
 * Global Var
 */
let div = null;

/**
 * JS Window load
 */
window.onload = () => {
	main();
}

/**
 * The pain function
 */
function main(){
	const wrapper = document.getElementById('root');
	const changeBtn = document.getElementById('change-btn');
	const output = document.getElementById('output');
	const copyBtn = document.getElementById('copy-btn');

	changeBtn.addEventListener('click', function(){
		wrapper.style.backgroundColor = generateHaxCode();
		output.value = generateHaxCode();
	});

	copyBtn.addEventListener('click', function(){
		navigator.clipboard.writeText( output.value );
		if( div != null ){
			div.remove();
			div = null;
		}

		generateToastMassage( output.value );
	});

}

/**
 * Generate Hax Color code
 */
function generateHaxCode(){
	const red = Math.floor( Math.random() * 255 );
	const green = Math.floor( Math.random() * 255 );
	const blue = Math.floor( Math.random() * 255 );

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

/**
 * Generate toast massage
 */
const generateToastMassage = ( colorCode ) => {
	div = document.createElement('div');
	div.classList.add('toast-massate', 'toast-massate-slide-in');
	div.innerText = `${ colorCode } is copied!`;

	div.addEventListener('click', function(){
		div.classList.remove('toast-massate-slide-in');
		div.classList.add('toast-massate-slide-out');

		div.addEventListener('animationend', function(){
			div.remove();
			div = null;
		});
	});

	document.body.appendChild(div);
}