!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var o=a("h6c0i"),u={formEl:document.querySelector(".form"),submitBtn:document.querySelector("[type = submit]")},i={delayValue:0,stepValue:0,amountValue:0};function r(e,t){var n=Math.random()>.3;return new Promise((function(a,o){setTimeout((function(){n?a({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.formEl.addEventListener("submit",(function(e){e.preventDefault(),u.submitBtn.disabled=!0;for(var t=i.delayValue,n=0;n<i.amountValue;n+=1)r(n+1,t).then((function(e){var t=e.position,n=e.delay;o.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms")),t===i.amountValue&&(u.submitBtn.disabled=!1)})).catch((function(e){var t=e.position,n=e.delay;o.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms")),t===i.amountValue&&(u.submitBtn.disabled=!1)})),t+=i.stepValue})),u.formEl.addEventListener("change",(function(e){"delay"===e.target.name&&(i.delayValue=Number(e.target.value));"step"===e.target.name&&(i.stepValue=Number(e.target.value));"amount"===e.target.name&&(i.amountValue=Number(e.target.value))}))}();
//# sourceMappingURL=03-promises.83a65ebb.js.map
