'use strict';

const storageKey = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

function inputHandler(event) {
    const { name, value } = event.target;
    const takesValue = JSON.parse(localStorage.getItem(storageKey)) || {};
    takesValue[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(takesValue));
}

refs.form.addEventListener('input', inputHandler);
refs.form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const takesValue = JSON.parse(localStorage.getItem(storageKey)) || {};
    console.log({
        email: takesValue.email,
        message: takesValue.message,
    });

    localStorage.removeItem(storageKey);
    refs.input.value = '';
    refs.textarea.value = '';
}
