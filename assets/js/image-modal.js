let modal = null;
let closeButton = null;

const closeHandler = () => {
    modal.classList.remove('d-flex');
    modal.classList.add('d-none');
};

const modalStart = () => {
    modal = document.querySelector('[data-modal=image]');
    closeButton = document.querySelector('[data-close]');

    closeButton.addEventListener('click', closeHandler);
};

window.addEventListener('load', modalStart);