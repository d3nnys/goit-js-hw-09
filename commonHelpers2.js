import"./assets/styles-d06261f5.js";const o="feedback-form-state",a={form:document.querySelector(".feedback-form"),input:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]')};function n(){const e=a.input.value,t=a.textarea.value;return{email:e,message:t}}a.form.addEventListener("submit",e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem(o))||{};t.email&&t.message&&(console.log({email:t.email,message:t.message}),localStorage.removeItem(o),a.form.reset())});a.form.addEventListener("input",e=>{const t=n(e.currentTarget),s=JSON.stringify(t);localStorage.setItem(o,s)});const r=localStorage.getItem(o);if(r){const e=JSON.parse(r);a.input.value=e.email,a.textarea.value=e.message}
//# sourceMappingURL=commonHelpers2.js.map
