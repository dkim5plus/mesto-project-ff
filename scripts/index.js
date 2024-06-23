// @todo: Темплейт карточки
const cardTemp = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardCont = document.querySelector('.places__list');

// @todo: Функция создания карточки
function cardCreate(item, cardDel) {
    let cardItem = cardTemp.querySelector('.card').cloneNode(true);
    const buttonDel = cardItem.querySelector('.card__delete-button');
    cardItem.querySelector('.image').src = item.link;
    cardItem.querySelector('.image').alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    buttonDel.addEventListener('click', cardDel);
    return cardItem;
    
};

// @todo: Функция удаления карточки
function cardDel(evt) {
    evt.target.closest('.card').remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
    const card = cardCreate(item, cardDel);
    cardCont.append(card);
});

