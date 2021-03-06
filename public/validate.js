import { userLabel, username, passwordLabel, password, initLoginForm } from './yeti.js';

let message = document.createElement('a');
message.style.fontSize = '0.8em';
message.style.color = 'red';
message.style.paddingLeft = '10px';
let usernameRequired = message.cloneNode(true);
usernameRequired.innerHTML = 'Required';
let passwordRequired = message.cloneNode(true);
passwordRequired.innerHTML = 'Required';

let img = document.createElement('img');
img.src = 'assets/exclamation-triangle-fill.svg';
img.setAttribute('width', '24');
img.setAttribute('height', '24');
img.style.paddingLeft = '10px';
img.style.paddingBottom = '0.5%';
let usernameAlert = img.cloneNode();
let passwordAlert = img.cloneNode();

function appendError(label, alert, error) {
    label.appendChild(alert);
    label.appendChild(error);
}

function removeError(label, alert, error) {
    if (error.parentElement === label) {
        label.removeChild(alert);
        label.removeChild(error);
    }
}

function updateUsernameError() {
    removeError(userLabel, usernameAlert, usernameRequired);
    if (username.value == '') {
        appendError(userLabel, usernameAlert, usernameRequired);
    }
}

function updatePasswordError() {
    removeError(passwordLabel, passwordAlert, passwordRequired);
    if (password.value == '') {
        appendError(passwordLabel, passwordAlert, passwordRequired);
    }
}

function validateLogin() {
    username.addEventListener('blur', updateUsernameError);
    username.addEventListener('input', updateUsernameError);
    password.addEventListener('blur', updatePasswordError);
    password.addEventListener('input', updatePasswordError);
}

window.onload = function () {
    initLoginForm();
    validateLogin();
};

export { message, img, usernameRequired, passwordRequired, usernameAlert, passwordAlert, appendError, removeError };