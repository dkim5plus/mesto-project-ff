function openModal(pop) {
    pop.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEscape);
};

function closeModal(pop) {
    pop.classList.remove('popup_is-opened');
    document.addEventListener('keydown', closeModalByEscape);
};

function closeModalByEscape(evt) {
    if (evt.key === 'Escape') {

    }
};

function closeModalByCross(evt) {
    
};

export { openModal, closeModal }