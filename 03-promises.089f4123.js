var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var o=a("iQIUW");const l={formEl:document.querySelector(".form"),submitBtn:document.querySelector("[type = submit]")},u={delayValue:0,stepValue:0,amountValue:0};function i(e,t){const n=Math.random()>.3;return new Promise(((a,o)=>{setTimeout((()=>{n?a({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.formEl.addEventListener("submit",(function(e){e.preventDefault(),l.submitBtn.disabled=!0;let t=u.delayValue;for(let e=0;e<u.amountValue;e+=1)i(e+1,t).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`),e===u.amountValue&&(l.submitBtn.disabled=!1)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`),e===u.amountValue&&(l.submitBtn.disabled=!1)})),t+=u.stepValue})),l.formEl.addEventListener("change",(function(e){"delay"===e.target.name&&(u.delayValue=Number(e.target.value));"step"===e.target.name&&(u.stepValue=Number(e.target.value));"amount"===e.target.name&&(u.amountValue=Number(e.target.value))}));
//# sourceMappingURL=03-promises.089f4123.js.map
