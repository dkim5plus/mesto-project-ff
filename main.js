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

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _scripts_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/card.js */ \"./src/scripts/card.js\");\n\n\n\n\n\n/* Открытия попапа профиля и редактирование*/\nvar profileEditButton = document.querySelector(\".profile__edit-button\");\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar nameForm = document.querySelector('.profile__title');\nvar jobForm = document.querySelector('.profile__description');\nvar profileFormElement = document.forms[\"edit-profile\"];\nvar nameInput = profileFormElement.elements.name;\nvar jobInput = profileFormElement.elements.description;\nprofileEditButton.addEventListener('click', function () {\n  (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupEdit);\n  nameInput.value = nameForm.textContent;\n  jobInput.value = jobForm.textContent;\n});\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  nameForm.textContent = nameInput.value;\n  jobForm.textContent = jobInput.value;\n  (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupEdit);\n}\n;\nprofileFormElement.addEventListener('submit', handleProfileFormSubmit);\n\n/*Инициализация карт*/\nvar cardList = document.querySelector(\".places__list\");\n_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (cardItem) {\n  var card = (0,_scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.createCard)(cardItem, _scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.deleteCard, _scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.addLike, openImage);\n  cardList.append(card);\n});\n\n/*Открытие попапа карт*/\nvar profileAddButton = document.querySelector(\".profile__add-button\");\nvar popupCard = document.querySelector(\".popup_type_new-card\");\nprofileAddButton.addEventListener('click', function () {\n  (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupCard);\n});\n\n/*Открытие попапа картинок*/\nvar popupImage = document.querySelector(\".popup_type_image\");\nvar imageElement = document.querySelector(\".popup__image\");\nvar captionElement = document.querySelector(\".popup__caption\");\nfunction openImage(link, alt) {\n  imageElement.src = link;\n  imageElement.link = alt;\n  captionElement.textContent = alt;\n  (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupImage);\n}\n;\n\n/*Закрытие попапа через крестик*/\nvar popupClose = document.querySelectorAll(\".popup__close\");\npopupClose.forEach(function (evt) {\n  var popup = evt.closest('.popup');\n  evt.addEventListener('click', function () {\n    (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n  });\n});\n\n/*Анимация попапа*/\nvar popupAll = document.querySelectorAll(\".popup\");\npopupAll.forEach(function (popup) {\n  popup.classList.add('popup_is-animated');\n});\n\n/*Создание карточек*/\nvar cardNewPlace = document.forms[\"new-place\"];\nfunction handleCardSubmit(evt) {\n  evt.preventDefault();\n  var cardItem = {\n    name: cardNewPlace.elements['place-name'].value,\n    link: cardNewPlace.elements['link'].value\n  };\n  var card = (0,_scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.createCard)(cardItem, _scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.deleteCard, _scripts_card_js__WEBPACK_IMPORTED_MODULE_3__.addLike, openImage);\n  cardList.prepend(card);\n  (0,_scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupCard);\n  cardNewPlace.reset();\n}\n;\ncardNewPlace.addEventListener('submit', handleCardSubmit);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard)\n/* harmony export */ });\n// @todo: Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\n\n// @todo: Функция создания карточки\nfunction createCard(item, deleteCard, addLike, openImage) {\n  var cardItem = cardTemplate.querySelector('.card').cloneNode(true);\n  var img = cardItem.querySelector('.card__image');\n  img.src = item.link;\n  img.alt = item.name;\n  cardItem.querySelector('.card__title').textContent = item.name;\n  var buttonDelete = cardItem.querySelector('.card__delete-button');\n  buttonDelete.addEventListener('click', deleteCard);\n  var cardLike = cardItem.querySelector('.card__like-button');\n  cardLike.addEventListener('click', addLike);\n  img.addEventListener(\"click\", function () {\n    openImage(item.link, item.name);\n  });\n  return cardItem;\n}\n;\n\n// @todo: Функция удаления карточки\nfunction deleteCard(evt) {\n  evt.target.closest('.card').remove();\n}\n;\nfunction addLike(evt) {\n  evt.target.classList.toggle('card__like-button_is-active');\n}\n;\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(pop) {\n  pop.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeModalByEscape);\n  pop.addEventListener('click', closeModalByOverlay);\n}\n;\nfunction closeModal(pop) {\n  pop.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeModalByEscape);\n  pop.removeEventListener('click', closeModalByOverlay);\n}\n;\nfunction closeModalByEscape(evt) {\n  if (evt.key === 'Escape') {\n    var popupOpened = document.querySelector('.popup_is-opened');\n    closeModal(popupOpened);\n  }\n  ;\n}\n;\nfunction closeModalByOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.currentTarget);\n  }\n  ;\n}\n;\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

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