(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(s,e,i){"use strict";function n(s,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}i.r(e);var a=function(){function s(){!function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this.injectHTML(),this.modal=document.querySelector(".modal"),this.ModalCloseBtn=document.querySelector(".modal__close"),this.events()}var e,i,a;return e=s,(i=[{key:"events",value:function(){var s=this;this.ModalCloseBtn.addEventListener("click",(function(){s.disableModalVisibility()})),document.addEventListener("keyup",(function(e){s.keyPressedHandler(e)}))}},{key:"enableModalVisibility",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"disableModalVisibility",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressedHandler",value:function(s){27==s.keyCode&&this.disableModalVisibility()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal">\n        <div class="modal__inner">\n            <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n            <div class="wrapper wrapper--narrow">\n                <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n            </div>\n    \n            <div class="social-icons">\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n            </div>\n            </div>\n            <div class="modal__close">X</div>\n        </div>\n        ')}}])&&n(e.prototype,i),a&&n(e,a),s}();e.default=a}}]);