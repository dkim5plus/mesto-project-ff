export function openModal(pop) {
    pop.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEscape);
    pop.addEventListener('click', closeModalByOverlay);
};

export function closeModal(pop) {
    pop.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEscape);
    pop.removeEventListener('click', closeModalByOverlay);
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

