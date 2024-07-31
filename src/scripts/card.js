// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(item, deleteCard) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const buttonDelete = cardItem.querySelector('.card__delete-button');
    const img = cardItem.querySelector('.card__image');
    img.src = item.link;
    img.alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    buttonDelete.addEventListener('click', deleteCard);
    return cardItem;
    
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
    const card = createCard(item, deleteCard);
    cardContainer.append(card);
});

