!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),a=document.querySelector(".form"),u=document.querySelector('button[type="submit"]'),c={};function l(n){var t=n.position,o=n.delay,i=Math.random()>.3;setTimeout((function(){return new Promise((function(e,n){i?e({position:t,delay:o}):n({position:t,delay:o})})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),o)}a.addEventListener("input",(function(e){var n=e.target.name,t=e.target.value;c[n]=Number(t)})),u.addEventListener("click",(function(e){e.preventDefault(),function(e){for(var n=e.delay,t=e.step,o=e.amount,i=0;i<o;i+=1){var r={};r.position=i+1,r.delay=n+t*i,l(r)}}(c)}))}();
//# sourceMappingURL=03-promises.756c7f77.js.map
