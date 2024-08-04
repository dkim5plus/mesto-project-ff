// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(item, deleteCard, addLike) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const buttonDelete = cardItem.querySelector('.card__delete-button');
    const img = cardItem.querySelector('.card__image');
    const cardLike = cardElement.querySelector('.card__like-button');
    img.src = item.link;
    img.alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    buttonDelete.addEventListener('click', deleteCard);
    cardLike.addEventListener('click', addLike)
    return cardItem;
    
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
};

function addLike(evt) {
    evt.classList.toggle('card__like-button_is-active')
};

