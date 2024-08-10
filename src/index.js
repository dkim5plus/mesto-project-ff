import './pages/index.css';
import { initialCards } from "./cards.js";
import { openModal, closeModal } from './scripts/modal.js';
import { createCard, deleteCard, addLike } from './scripts/card.js';

/* Открытия попапа профиля и редактирование*/
const profileEditButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector('.popup_type_edit');
const nameForm = document.querySelector('.profile__title');
const jobForm = document.querySelector('.profile__description');
const profileFormElement = document.forms["edit-profile"];
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

profileEditButton.addEventListener('click', function() {
    openModal(popupEdit);
    nameInput.value = nameForm.textContent;
    jobInput.value = jobForm.textContent;
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nameForm.textContent = nameInput.value;
    jobForm.textContent = jobInput.value;
    closeModal(popupEdit);
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit); 

/*Инициализация карт*/
const cardList = document.querySelector(".places__list");

initialCards.forEach(function (cardItem) {
    const card = createCard(cardItem, deleteCard, addLike, openImage);
    cardList.append(card);
});

/*Открытие попапа карт*/
const profileAddButton = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_type_new-card");

profileAddButton.addEventListener('click', function() {
    openModal(popupCard);
});

/*Открытие попапа картинок*/
const popupImage = document.querySelector(".popup_type_image");
const imageElement = document.querySelector(".popup__image");
const captionElement = document.querySelector(".popup__caption");

function openImage(link, alt) {
    imageElement.src = link;
    imageElement.link = alt;
    captionElement.textContent = alt;
    openModal(popupImage);
};

/*Закрытие попапа через крестик*/
const popupClose = document.querySelectorAll(".popup__close");

popupClose.forEach(function(evt) {
    const popup = evt.closest('.popup');
    evt.addEventListener('click', function() {
        closeModal(popup);
    });
});

/*Анимация попапа*/
const popupAll = document.querySelectorAll(".popup");

popupAll.forEach(function(popup) {
    popup.classList.add('popup_is-animated');
});

/*Создание карточек*/
const cardNewPlace = document.forms["new-place"];

function handleCardSubmit(evt) {
    evt.preventDefault();
    const cardItem = {
        name: cardNewPlace.elements['place-name'].value,
        link: cardNewPlace.elements['link'].value
    };
    const card = createCard(cardItem, deleteCard, addLike, openImage);
    cardList.prepend(card);
    closeModal(popupCard);
    cardNewPlace.reset();
};

cardNewPlace.addEventListener('submit', handleCardSubmit);



