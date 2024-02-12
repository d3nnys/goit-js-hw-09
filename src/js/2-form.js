'use strict';

const storageKey = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

function inputHandler() {
    const email = refs.input.value.trim();
    const message = refs.textarea.value.trim();
    
    return {
        email,
        message
    }
}

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.removeItem(storageKey);
    refs.form.reset();
})

refs.form.addEventListener('input', (event) => {
    event.preventDefault();

    const data = inputHandler(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
})

const takesItem = localStorage.getItem(storageKey);

if (takesItem ) {
    const data = JSON.parse(takesItem);
    refs.input.value = data.email;
    refs.textarea.value = data.message;
}
