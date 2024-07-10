/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/automaticAlt.js":
/*!****************************!*\
  !*** ./js/automaticAlt.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n// this gives an authomatic alt to imgs, getting the img name and using as an ALT\nconst altAttribution = () => {\n    const imgs = document.querySelectorAll('img');\n    imgs.forEach(element => {\n        const imgUrl = element.src;\n        const fileName = imgUrl.substring(imgUrl.lastIndexOf('/')+1)\n        const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.'); // Rimuove l'estensione del file\n        \n        element.alt = fileNameWithoutExtension;\n       \n        \n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (altAttribution);\n\n//# sourceURL=webpack://project_base_webpack/./js/automaticAlt.js?");

/***/ }),

/***/ "./js/contactModule.js":
/*!*****************************!*\
  !*** ./js/contactModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    const text = document.querySelector('#contact-module-text').value;\n    const number = document.querySelector('#contact-module-number').value;\n   \n\n    if (text != ' ') {\n        const textEncoded = encodeURIComponent(text)\n        const numberEncoded =encodeURIComponent(number)\n        const message = textEncoded + ' ' + \"potete ricontattarmi qui -->\" + \" \" + numberEncoded;\n        window.open('https://wa.me/3312843938?text=' + message)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://project_base_webpack/./js/contactModule.js?");

/***/ }),

/***/ "./js/firstCaracterAppears.js":
/*!************************************!*\
  !*** ./js/firstCaracterAppears.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstCaracter = document.querySelector('#firstCaracter');\n\n\nconst firstCaracterAppears = () => {\n    // if firstCaracter.classList = contain\n    firstCaracter.className = \"\"\n    firstCaracter.classList = \"absolute bottom-0 right-8 md:right-16 w-96 md:w-4/12 duration-700\"\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstCaracterAppears);\n\n//# sourceURL=webpack://project_base_webpack/./js/firstCaracterAppears.js?");

/***/ }),

/***/ "./js/insertmyurl.js":
/*!***************************!*\
  !*** ./js/insertmyurl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// this is to edit automatically the metatag og:url \n// so u can't forget to edit it and if we change url, it automatically will apply the mod\n\n// getting the url\nfunction getCurrentURL() {\n    return window.location.href;\n}\n// assing to my const \nconst currentURL = getCurrentURL();\n// selecting my meta target\nconst metaurl = document.querySelector('#metaurl')\n\n// inner ''content'' with the url i've got \nconst insertmyurl = () => {\n\nmetaurl.content = currentURL\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertmyurl);\n\n//# sourceURL=webpack://project_base_webpack/./js/insertmyurl.js?");

/***/ }),

/***/ "./js/menuappear.js":
/*!**************************!*\
  !*** ./js/menuappear.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst menu = document.querySelector('#top-nav')\n\n\nconst menuextend = () => {\n    if (menu.classList.contains('invisible')){\n        menu.className = 'top-nav visible top-52';\n    }\n else if (menu.classList.contains('visible')) {\n    menu.className = 'top-nav invisible -top-96';\n }\n} \n\n\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuextend);\n\n//# sourceURL=webpack://project_base_webpack/./js/menuappear.js?");

/***/ }),

/***/ "./js/scrollHeaderBgChanger.js":
/*!*************************************!*\
  !*** ./js/scrollHeaderBgChanger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = document.querySelector('header');\n\nconst scrollHeaderBgChanger = () => {\n    if (window.scrollY > 0) { // Usa window.scrollY per la posizione verticale dello scroll\n        header.classList.add('headerBgCustom');\n        \n    } else {\n        header.classList.remove('headerBgCustom');\n        \n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollHeaderBgChanger);\n\n//# sourceURL=webpack://project_base_webpack/./js/scrollHeaderBgChanger.js?");

/***/ }),

/***/ "./js/socialattribution.js":
/*!*********************************!*\
  !*** ./js/socialattribution.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst socialattribution = () => {\n    const fbicon = document.querySelector('#facebookicon')\n    // const linkedinicon = document.querySelector('#linkedinicon')\n    const instagramicon = document.querySelector('#instagramicon')\n    // replacing with social links\n    fbicon.href = 'https://www.facebook.com/profile.php?id=61556702574554'\n    fbicon.target = \"_blank\"\n    // linkedinicon.href = '#'\n    instagramicon.href = 'https://www.instagram.com/webcraftersitalia?fbclid=IwAR1Ba6AMnG6AMHpfnNhXwQuUrzgPOW49mHFNGtFCjegEi3wraQl7CKw5QyQ'\n    instagramicon.target = \"_blank\"\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socialattribution);\n\n//# sourceURL=webpack://project_base_webpack/./js/socialattribution.js?");

/***/ }),

/***/ "./js/whatsaopAttribution.js":
/*!***********************************!*\
  !*** ./js/whatsaopAttribution.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst whatsattrib = () => {\n    const whatsabtns = document.querySelectorAll('#whatsappcontact');\n    whatsabtns.forEach(element => {\n        element.href = 'https://wa.me/3312843938'\n        element.target = '_blank'\n    });\n   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whatsattrib);\n\n//# sourceURL=webpack://project_base_webpack/./js/whatsaopAttribution.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_menuappear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/menuappear.js */ \"./js/menuappear.js\");\n/* harmony import */ var _js_insertmyurl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/insertmyurl.js */ \"./js/insertmyurl.js\");\n/* harmony import */ var _js_automaticAlt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/automaticAlt.js */ \"./js/automaticAlt.js\");\n/* harmony import */ var _js_whatsaopAttribution_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/whatsaopAttribution.js */ \"./js/whatsaopAttribution.js\");\n/* harmony import */ var _js_socialattribution_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/socialattribution.js */ \"./js/socialattribution.js\");\n/* harmony import */ var _js_contactModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/contactModule.js */ \"./js/contactModule.js\");\n/* harmony import */ var _js_firstCaracterAppears_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/firstCaracterAppears.js */ \"./js/firstCaracterAppears.js\");\n/* harmony import */ var _js_scrollHeaderBgChanger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/scrollHeaderBgChanger.js */ \"./js/scrollHeaderBgChanger.js\");\n// import css\n// import './pages/index.css' postcss export css file directly inside the dist. It loads faster in this way\n// importing scripts\n\n\n\n\n\n\n\n\n\n\nconst menuIcon = document.querySelector('#menuIcon');\nconst contactButton = document.querySelector('#contact-button');\n\n  // this is getting the url of the page\n  const page = window.location.href;\n  const exclusion = ['contatti, clienti']\n// this is a function that handles the eventListeners depending by the page\nconst homeEventHandler = () => {\n\nif (page.includes('index.html') || !page.includes(exclusion)) {\n  window.addEventListener('load', (0,_js_firstCaracterAppears_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n )\n} else if (page.includes(\"contatti\")) {\n\n  contactButton.addEventListener('click', _js_contactModule_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n} else {\n\n}\n};\n\n// eventListeners\nmenuIcon.addEventListener('click', _js_menuappear_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n// Add scroll Event after DOM is fully charged \nwindow.addEventListener('DOMContentLoaded', () => {\n  window.addEventListener('scroll', _js_scrollHeaderBgChanger_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n});\nwindow.addEventListener('load', () => {\n  \n  (0,_js_insertmyurl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_js_automaticAlt_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_js_whatsaopAttribution_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_js_socialattribution_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  homeEventHandler();\n})\n\n// cookie buttons selectors \nconst consent = document.querySelector('#giveconsent');\nconst hide = document.querySelector('#hidecookiebanner');\n\n// cookie functions\n\n  // Function to set the cookie\n  function setCookie(name, value, days) {\n    var expires = \"\";\n    if (days) {\n      var date = new Date();\n      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\n      expires = \"; expires=\" + date.toUTCString();\n    }\n    document.cookie = name + \"=\" + encodeURIComponent(value) + expires + \"; path=/\";\n  }\n  // Function to get the cookie\n  function getCookie(name) {\n    var nameEQ = name + \"=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n      while (c.charAt(0) === ' ') c = c.substring(1, c.length);\n      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));\n    }\n    return null;\n  }\n  // Fn to hide cookie banner\n  function hideCookieBanner() {\n    var cookieBanner = document.getElementById(\"cookie-banner\");\n    if (cookieBanner) {\n      cookieBanner.style.display = \"none\";\n    }\n  }\n  // fn to show the cookie banner only if it didn't show before\n  function showCookieBanner() {\n    var cookieConsent = getCookie(\"cookie_consent\");\n    if (!cookieConsent) {\n      var cookieBanner = document.getElementById(\"cookie-banner\");\n      if (cookieBanner) {\n        cookieBanner.style.display = \"block\";\n      }\n    }\n  }\n  // cookie functions - END\n  // Show cookie banner onLoad\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    getCookie()\n    showCookieBanner();\n  });\n // Fn to give consent and hide the banner \n function giveConsent() {\n    setCookie(\"cookie_consent\", true, 365); // Imposta il cookie di consenso per 365 giorni\n    hideCookieBanner();\n  }\n//cookie reject or consent\nconsent.addEventListener('click', giveConsent)\nhide.addEventListener('click', hideCookieBanner)\n\n\n\n//# sourceURL=webpack://project_base_webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;