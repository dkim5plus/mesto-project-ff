
// Находим поля формы в DOM
const formElement = document.forms["edit-profile"];
const nameForm = formElement.quarySelector('.popup__input_type_name');
const jobForm = formElement.quarySelector('.popup__input_type_description');
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameForm.textContent = nameInput.value;
    jobForm.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 