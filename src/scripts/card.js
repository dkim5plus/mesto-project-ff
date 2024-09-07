import { deleteCards, likeCard, dislikeCard } from "./api";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(item, deleteCard, addLike, openImage, id) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const img = cardItem.querySelector('.card__image');
    img.src = item.link;
    img.alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    
    const buttonDelete = cardItem.querySelector('.card__delete-button');
    if (item.owner._id !== id) {
        buttonDelete.style.display = 'none';
    } else {
        buttonDelete.style.display = 'block';
        buttonDelete.addEventListener('click', function() {
            deleteCard(cardItem, item._id);
        });
    };

    const cardLike = cardItem.querySelector('.card__like-button');
    const cardLikeCounter = cardItem.querySelector('.card__like_counter');
    cardLikeCounter.textContent = item.likes.length;
    cardLike.addEventListener('mousedown', function() {
        addLike(cardLike, cardLikeCounter, item._id);
    });
    if (item.likes.some((like) => like._id === id)) {
        cardLike.classList.add('card__like-button_is-active');
    };

    img.addEventListener("click", () => {
        openImage(item.link, item.name);
    });
    
    return cardItem;
};

// @todo: Функция удаления карточки
export function deleteCard(cardItem, cardId) {
    deleteCards(cardId)
        .then(() => {
            cardItem.remove()
        })
        .catch((err) => {
            console.log(err)
        });
};

export function addLike(cardLike, cardLikeCounter, id) {
    const isLiked = cardLike.classList.contains('card__like-button_is-active');
    if (isLiked) {
        dislikeCard(id)
            .then((item) => {
                cardLike.classList.remove('card__like-button_is-active');
                cardLikeCounter.textContent = item.likes.length
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        likeCard(id)
            .then((item) => {
                cardLike.classList.add('card__like-button_is-active');
                cardLikeCounter.textContent = item.likes.length
            })
            .catch((err) => {
                console.error(err);
            });
    };
};

