!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return s.Date.now()};function m(t,e,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function m(e){var n=o,r=i;return o=i=void 0,l=e,f=t.apply(r,n)}function x(t){return l=t,a=setTimeout(h,e),d?m(t):f}function T(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function h(){var t=b();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-c);return s?y(n,u-(t-l)):n}(t))}function w(t){return a=void 0,v&&o?m(t):(o=i=void 0,f)}function O(){var t=b(),n=T(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return x(c);if(s)return a=setTimeout(h,e),m(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=j(e)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?f:w(b())},O}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}n=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:o,maxWait:e,trailing:i})},console.log(n);var x={form:document.querySelector("form"),textarea:document.querySelector("textarea")};console.log(x),x.form.addEventListener("submit",onFormSubmit),x.textarea.addEventListener("input",onTextareaInput)}();
//# sourceMappingURL=03-feedback.27d10169.js.map
