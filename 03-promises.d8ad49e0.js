!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON");function l(n,t){return new Promise((function(o,r){Math.random()>.3?o(e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))):r(e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,u=0;setTimeout((function(){l(u+1,t.value).then((function(e){return console.log(e)}),(function(e){return console.log(e)})),u+=1;var e=setInterval((function(){u+1>r.value?clearInterval(e):(l(u+1,o.value*u+Number(t.value)).then((function(e){return console.log(e)}),(function(e){return console.log(e)})),u+=1)}),o.value)}),t.value)}))}();
//# sourceMappingURL=03-promises.d8ad49e0.js.map