//JAVASCRIPT FOR ABOUTME.HTML

//COLOUR CHANGER
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let stylesheet = document.querySelector('#stylesheet_aboutme');

button1.onclick = () => {
    stylesheet.href = 'CSS_Style/Default/stylesheet_aboutme_default.css';
    localStorage.setItem('style', 'default');
};
button2.onclick = () => {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_aboutme_dark.css';
    localStorage.setItem('style', 'dark');
};
button3.onclick = () => {
    stylesheet.href = 'CSS_Style/Light/stylesheet_aboutme_light.css';
    localStorage.setItem('style', 'light');
};

//SAVE AND ACCESS COLOUR SELECTION
let style = localStorage.getItem('style');

if (style === 'default') {
    stylesheet.href = 'CSS_Style/Default/stylesheet_aboutme_default.css';
} else if (style === 'dark') {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_aboutme_dark.css';
} else if (style === 'light') {
    stylesheet.href = 'CSS_Style/Light/stylesheet_aboutme_light.css';
}else{
    stylesheet.href = 'CSS_Style/Default/stylesheet_aboutme_default.css'
}
