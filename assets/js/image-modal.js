let modal = null;
let closeButton = null;
let openButton = null;

const closeHandler = ({ addClass, removeClass }) => () => {
    modal.classList.remove(removeClass);
    modal.classList.add(addClass);
};

const modalStart = () => {
    modal = document.querySelector('[data-modal=image]');
    closeButton = document.querySelector('[data-button=close-modal]');
    openButton = document.querySelector('[data-button=open-modal]');

    closeButton.addEventListener('click', closeHandler({ addClass: 'd-none', removeClass: 'd-flex'}));
    openButton.addEventListener('click', closeHandler({ removeClass: 'd-none', addClass: 'd-flex'}));
};

window.addEventListener('load', modalStart);