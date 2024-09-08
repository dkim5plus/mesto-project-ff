function renderLoading(load, popup) {
    if (load) {
        popup.querySelector(".button").textContent = "Сохранение...";
    } else {
        popup.querySelector(".button").textContent = "Сохранить";
    }
};

export { renderLoading };