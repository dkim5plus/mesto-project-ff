import './pages/index.css';
import { openModal, closeModal } from './scripts/modal.js';
import { createCard, deleteCard, addLike } from './scripts/card.js';
import { enableValidation, clearValidation, validationConfig } from "./scripts/validation.js";
import { getUser, getCards, editUser, addCards, updateAvatar } from "./scripts/api.js";
import { renderLoading } from './scripts/utils.js';

/* Открытия попапа профиля и редактирование*/
const profileEditButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector('.popup_type_edit');
const nameForm = document.querySelector('.profile__title');
const jobForm = document.querySelector('.profile__description');
const profileImage = document.querySelector(".profile__image");
const profileFormElement = document.forms["edit-profile"];
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

profileEditButton.addEventListener('click', function() {
    openModal(popupEdit);
    nameInput.value = nameForm.textContent;
    jobInput.value = jobForm.textContent;
    clearValidation(profileFormElement, validationConfig);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, popupEdit);
    const name = nameInput.value;
    const job = jobInput.value;
    editUser(name, job)
        .then((profile) => {
            nameForm.textContent = profile.name;
            jobForm.textContent = profile.about;
            closeModal(popupEdit);
        })
        .catch((err) => {
            console.log(err);
        })
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

/*Открытие попапа аватара*/
const popupAvatar = document.querySelector(".popup_type_edit-avatar");
const avatarForm = document.forms["edit-avatar"];
const avatarInput = avatarForm.querySelector('#avatar__input');

profileImage.addEventListener("click", () => {
    clearValidation(avatarForm, validationConfig);
    openModal(popupAvatar);
});

avatarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderLoading(true, avatarForm)
    const link = avatarInput.value;
    updateAvatar(link)
      .then(() => {
        profileImage.style.backgroundImage = `url(${link})`;
        closeModal(popupAvatar);
        avatarForm.reset();
      })
      .catch(err => {
        console.log("Ошибка обновления аватара:", err)
      });
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
const buttonsClosePopup = document.querySelectorAll(".popup__close");

buttonsClosePopup.forEach(function(evt) {
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

cardNewPlace.addEventListener('submit', function(evt) {
    evt.preventDefault();
    renderLoading(true, popupCard)
    const cardItem = {
        name: cardNewPlace.elements['place-name'].value,
        link: cardNewPlace.elements['link'].value
    };
    addCards(cardItem.name, cardItem.link)
        .then((newCard) => {
            const card = createCard(newCard, deleteCard, addLike, openImage, profileId);
            cardList.prepend(card);
            closeModal(popupCard);
            cardNewPlace.reset();
            clearValidation(cardNewPlace, validationConfig)
        })
        .catch(err => {
            console.log(err)
        })
});

enableValidation(validationConfig);

/* API */
let profileId;
const cardList = document.querySelector(".places__list");

Promise.all([getUser(), getCards()])
    .then(([user, cards]) => {
        nameForm.textContent = user.name;
        jobForm.textContent = user.about;
        profileImage.style.backgroundImage = `url(${user.avatar})`;
        profileId = user._id;
        cards.forEach(function (cardItem) {
            const card = createCard(cardItem, deleteCard, addLike, openImage, profileId);
            cardList.append(card);
        });
    })
    .catch((err) => {
        console.log(err)
    });
