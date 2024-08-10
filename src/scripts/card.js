// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(item, deleteCard, addLike, openImage) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const img = cardItem.querySelector('.card__image');
    img.src = item.link;
    img.alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    
    const buttonDelete = cardItem.querySelector('.card__delete-button');
    buttonDelete.addEventListener('click', deleteCard);

    const cardLike = cardItem.querySelector('.card__like-button');
    cardLike.addEventListener('click', addLike);

    img.addEventListener("click", () => {
        openImage(item.link, item.name);
    });
    
    return cardItem;
};

// @todo: Функция удаления карточки
export function deleteCard(evt) {
    evt.target.closest('.card').remove();
};

export function addLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
};

