function openModal(pop) {
    pop.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEscape);
    document.addEventListener('click', closeModalByCross);
};

function closeModal(pop) {
    pop.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEscape);
    document.removeEventListener('click', closeModalByCross);
};

function closeModalByEscape(evt) {
    if (evt.key === 'Escape') {
       const popupOpened = document.querySelector('.popup_is-opened');
       closeModal(popupOpened);
    };
};

function closeModalByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closeModal(evt.currentTarget);
    };
};

export { openModal, closeModal }