//JAVASCRIPT FOR CONTACT.HTML

//COLOUR CHANGER
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let stylesheet = document.querySelector('#stylesheet_contact');

button1.onclick = () => {
    stylesheet.href = 'CSS_Style/Default/stylesheet_contact_default.css';
    localStorage.setItem('style', 'default');
};
button2.onclick = () => {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_contact_dark.css';
    localStorage.setItem('style', 'dark');
};
button3.onclick = () => {
    stylesheet.href = 'CSS_Style/Light/stylesheet_contact_light.css';
    localStorage.setItem('style', 'light');
};

//SAVE AND ACCESS COLOUR SELECTION
let style = localStorage.getItem('style');

if (style === 'default') {
    stylesheet.href = 'CSS_Style/Default/stylesheet_contact_default.css';
} else if (style === 'dark') {
    stylesheet.href = 'CSS_Style/Dark/stylesheet_contact_dark.css';
} else if (style === 'light') {
    stylesheet.href = 'CSS_Style/Light/stylesheet_contact_light.css';
} else {
    stylesheet.href = 'CSS_Style/Default/stylesheet_contact_default.css'
}


//INPUT FIELD CONDITIONAL
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get value from inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();

    if(fnameValue === '' || lnameValue === '' || emailValue === '' || subjectValue === '') {
        alert('Please fill out all the fields');
    } else {
        alert('Your message was sent!');
    }

}