!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://static-art.pages.hotmart.com/packs/",r(r.s=30)}({30:function(e,t,r){"use strict";r.r(t);var o=function(){var e=document.querySelectorAll(".faq-questions");if(e)for(var t,r=0;r<e.length;r+=1){var o=e[r];a(o),n(o),i(o)}function n(e){for(var t=e.querySelectorAll(".faq-question.faq-accordion"),r=0;r<t.length;r+=1){var o=t[r].querySelector("[klickart-edit-faq-question]").clientHeight;t[r].style.maxHeight="".concat(o,"px")}}function a(e){for(var t=e.querySelectorAll(".faq-question.faq-accordion"),r=0;r<t.length;r+=1){var o=t[r].querySelector(".arrow"),n=t[r].querySelector(".content"),a=t[r].querySelector("[klickart-edit-faq-question]");t[r].style.transition="all 0.4s",t[r].style.overflow="hidden",a.style.margin=0,n.style.display="block",o&&(o.style.transition="all 0.4s")}}function l(e,t){var r=e.querySelector(".arrow");r&&(r.style.transform="rotate(".concat(t,"deg)"))}function c(e){var r=e.currentTarget;if(t){var o=t.querySelector("[klickart-edit-faq-question]").clientHeight;l(t,0),function(e,t){var r=e.querySelector(".arrow"),o=e.querySelector(".fl-faq-plus");if(r&&(r.classList.remove("open"),l(e,0)),o){var n=e.querySelector(".fl-faq-separator");o.classList.remove("open"),n.classList.remove("open")}e.style.maxHeight="".concat(t,"px")}(t,o)}r.clientHeight!==r.scrollHeight&&function(e){var t=e.querySelector(".arrow"),r=e.querySelector(".fl-faq-plus");if(t&&(t.classList.add("open"),l(e,180)),r){var o=e.querySelector(".fl-faq-separator");r.classList.add("open"),o.classList.add("open")}e.style.maxHeight="".concat(e.scrollHeight+1,"px")}(r),t=r}function i(e){for(var t=e.querySelectorAll(".faq-question.faq-accordion"),r=0;r<t.length;r+=1)t[r].addEventListener("click",c)}};window.addEventListener("load",o)}});
//# sourceMappingURL=accordion-3d7568f8d5eac35b0a49.js.map