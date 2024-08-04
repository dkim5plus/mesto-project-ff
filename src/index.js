import './pages/index.css';
import { initialCards } from "./cards.js";
import { openPopup, closePopup } from './scripts/modal.js';
import { createCard } from './scripts/card.js';

/* Открытия попапа профиля */
const profileButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

profileButton.addEventListener('click', function() {

})

/*Редактирование профиля*/
const formElement = document.forms["edit-profile"];
const nameForm = formElement.quarySelector('.popup__input_type_name');
const jobForm = formElement.quarySelector('.popup__input_type_description');
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    nameForm.textContent = nameInput.value;
    jobForm.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit); 

/*Открытие попапа карт*/


/* Создание карт */
const cardContainer = document.querySelector('.places__list');

initialCards.forEach(function(item) {
    const card = createCard(item, deleteCard);
    cardContainer.append(card);
});