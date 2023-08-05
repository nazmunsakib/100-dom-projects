
/*
* Change background color with random rgb color
*/

window.onload = () => {
  main();
}

/*
* The main function
*/
function main(){
  const siteMain = document.getElementById('site-main');
  const changeBG = document.getElementsByClassName('change-color');

  for( let btn of changeBG ){
    btn.addEventListener('click',() => {
      const bgColor = generateRGB();
      siteMain.style.backgroundColor = bgColor;
    });
  }

}

/*
* Random RGB genaretor
*/
const generateRGB = () => {
  const r = Math.floor( Math.random() * 255 );
  const g = Math.floor( Math.random() * 255 );
  const b = Math.floor( Math.random() * 255 );

  return `rgb(${r}, ${g}, ${b})`;
}



