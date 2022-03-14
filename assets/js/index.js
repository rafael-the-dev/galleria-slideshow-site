const gridContainer = document.querySelector('[data-grid]');
const firstColumn = document.querySelector('[data-sm-column=first]');
const secondColumn = document.querySelector('[data-sm-column=second]');

const createElement = ({ artist, containerClasses, id, images, name }) => {
    return (
        `
            <a class="mb-3 grid__item ${containerClasses ? containerClasses : ''}" href="/details.html?${id}">
                <figure class="h-100 grid__image-container position-relative">
                    <img
                        class="d-block h-100 w-100 grid__image"
                        src=${images.hero.small}
                    />
                    <figcaption class="position-absolute left-0 bottom-0 w-100 pt-3 grid__image-caption px-3">
                        <h2 class="text-light">${ name }</h2>
                        <p class="text-light opacity-75">${ artist.name }</p>
                    </figcaption>
                </figure>
            </a>
        `
    )
};

const start = () => {
    fetch('../../data.json')
        .then(res => res.json())
        .then(data => {
            gridContainer.innerHTML = data.reduce(
                (previousValue, currentValue) => previousValue + createElement(currentValue),
            "");
        
            firstColumn.innerHTML = data.filter((item, index) => index % 2 === 0).reduce(
                (previousValue, currentValue) => previousValue + createElement(currentValue),
            "");
        
            secondColumn.innerHTML = data.filter((item, index) => index % 2 !== 0).reduce(
                (previousValue, currentValue) => previousValue + createElement(currentValue),
            "");
        })
        .catch(console.log)
};

window.addEventListener('load', start);