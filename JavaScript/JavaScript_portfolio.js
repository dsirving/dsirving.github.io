//JAVASCRIPT FOR PORTFOLIO.JS

//COLOUR CHANGER
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let stylesheet = document.querySelector('#stylesheet_portfolio');

button1.onclick = () => {
    stylesheet.href = 'CSS_Style/Default/stylesheet_portfolio_default.css';
    localStorage.setItem('style', 'default');
};
button2.onclick = () => {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_portfolio_dark.css';
    localStorage.setItem('style', 'dark');
};
button3.onclick = () => {
    stylesheet.href = 'CSS_Style/Light/stylesheet_portfolio_light.css';
    localStorage.setItem('style', 'light');
};


//SAVE AND ACCESS COLOUR SELECTION
let style = localStorage.getItem('style');

if (style === 'default') {
    stylesheet.href = 'CSS_Style/Default/stylesheet_portfolio_default.css';
} else if (style === 'dark') {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_portfolio_dark.css';
} else if (style === 'light') {
    stylesheet.href = 'CSS_Style/Light/stylesheet_portfolio_light.css';
} else {
    stylesheet.href = 'CSS_Style/Default/stylesheet_portfolio_default.css'
}

//MODAL BOXES
function openModal(img) {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 2;
    `;
    document.body.appendChild(modal);

    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 90%;
      max-height: 90%;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    `;
    modal.appendChild(imgElement);

    let closeButton = document.createElement('div');
    closeButton.innerText = 'x';
    closeButton.style.cssText = `
      position: fixed;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      background: #fff;
      color: #000;
      font-size: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      cursor: pointer;
    `;
    modal.appendChild(closeButton);

    closeButton.onclick = () => {
        document.body.removeChild(modal);
    }
}
