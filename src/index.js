import './pages/index.css';
import { initialCards } from "./cards.js";
import { openPopup, closePopup } from './scripts/modal.js';
import { createCard } from './scripts/card.js';

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