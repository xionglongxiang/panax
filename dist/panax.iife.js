!function(){"use strict";var n={sum:function(n,t){return n+t},sub:function(n,t){return n-t}};function t(n,t,r,u){return new(r||(r=Promise))((function(e,o){function i(n){try{f(u.next(n))}catch(n){o(n)}}function c(n){try{f(u.throw(n))}catch(n){o(n)}}function f(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,c)}f((u=u.apply(n,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var r=Object.freeze({__proto__:null,isMobile:function(n){return/^1[0-9][0-9]\d{8}$/.test(n)},math:n,sub:function(n,t){return n-t},sum:function(n,t){return n+t},sumAsync:function(n,r){return t(this,void 0,void 0,(function*(){return n+r}))}});window.Utils=r}();
//# sourceMappingURL=panax.iife.js.map
