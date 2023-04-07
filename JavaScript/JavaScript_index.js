//JAVASCRIPT FOR INDEX.HTML

//NOTIFICATION
window.alert("Welcome to my website");

//COLOUR CHANGER
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let stylesheet = document.querySelector('#stylesheet');
let background = document.querySelector('#background');

button1.onclick = () => {
    stylesheet.href = 'CSS_Style/Default/stylesheet_index_default.css';
    background.href = 'CSS_Style/Static/style_index_static.css';
    localStorage.setItem('style', 'default');
};
button2.onclick = () => {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_index_dark.css';
    background.href = 'CSS_Style/Static/style_index_static.css';
    localStorage.setItem('style', 'dark');
};
button3.onclick = () => {
    stylesheet.href = 'CSS_Style/Light/stylesheet_index_light.css';
    background.href = 'CSS_Style/Static/style_index_static.css';
    localStorage.setItem('style', 'light');
};

//SAVE AND ACCESS COLOUR SELECTION
let style = localStorage.getItem('style');

if (style === 'default') {
    stylesheet.href = 'CSS_Style/Default/stylesheet_index_default.css';
} else if (style === 'dark') {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_index_dark.css';
} else if (style === 'light') {
    stylesheet.href = 'CSS_Style/Light/stylesheet_index_light.css';
} else {
    stylesheet.href = 'CSS_Style/Default/stylesheet_index_default.css'
}

//BACKGROUND IMAGE CHANGER
let currentCss = 0;

setInterval( () => {
    currentCss = (currentCss + 1) % 3;
    document.getElementById("background").href = `CSS_Style/Background/index_background_${currentCss + 1}.css`;
}, 5000);