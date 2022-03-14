const gridContainer = document.querySelector('[data-grid]');
const firstColumn = document.querySelector('[data-sm-column=first]');
const secondColumn = document.querySelector('[data-sm-column=second]');

const gridItems = [
    {
        author: 'Vincent Van Gogh',
        id: 1,
        title: 'Starry Night',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
    {
        author: 'Johannes Vermeer',
        containerClasses: 'grid__item--large',
        id: 2,
        title: 'Girl with a Pearl Earring',
        smallImage: '/assets/images/girl-with-pearl-earring/hero-small.jpg',
        largeImage: '/assets/images/girl-with-pearl-earring/hero-large.jpg'
    },
    {
        author: 'Pablo Picass',
        id: 3,
        title: 'Guernica',
        smallImage: '/assets/images/guernica/hero-small.jpg',
        largeImage: '/assets/images/guernica/hero-large.jpg'
    },
    {
        author: 'Artemisia Gentileschi',
        id: 4,
        title: 'Penitent Magdalenet',
        smallImage: '/assets/images/penitent-magdalene/hero-small.jpg',
        largeImage: '/assets/images/penitent-magdalene/hero-large.jpg'
    },
    {
        author: 'Rembrandt',
        title: 'The Storm on the Sea of Galilee',
        smallImage: '/assets/images/the-storm-on-the-sea-of-galilee/hero-small.jpg',
        largeImage: '/assets/images/the-storm-on-the-sea-of-galilee/hero-large.jpg'
    },
    {
        author: 'Hokusai',
        title: 'The Great Wave off Kanagawa',
        smallImage: '/assets/images/the-great-wave-off-kanagawa/hero-small.jpg',
        largeImage: '/assets/images/the-great-wave-off-kanagawa/hero-large.jpg'
    },
    {
        author: 'Vincent van Gogh',
        containerClasses: 'grid__item--large',
        title: 'Van Gogh self-portrait',
        smallImage: '/assets/images/van-gogh-self-portrait/hero-small.jpg',
        largeImage: '/assets/images/van-gogh-self-portrait/hero-large.jpg'
    },
    {
        author: 'Henri Rousseau',
        title: 'The Sleeping Gypsy',
        smallImage: '/assets/images/the-sleeping-gypsy/hero-small.jpg',
        largeImage: '/assets/images/the-sleeping-gypsy/hero-large.jpg'
    },
    {
        author: 'Leonardo da Vinci',
        containerClasses: 'grid__item--large',
        title: 'Lady with an Ermin',
        smallImage: '/assets/images/lady-with-an-ermine/hero-small.jpg',
        largeImage: '/assets/images/lady-with-an-ermine/hero-large.jpg'
    },
    {
        author: 'Vincent van Gogh',
        title: 'The Night Café',
        smallImage: '/assets/images/the-night-cafe/hero-small.jpg',
        largeImage: '/assets/images/the-night-cafe/hero-large.jpg'
    },
    {
        author: 'Paul Cézanne',
        containerClasses: 'grid__item--large',
        title: 'The Basket of Apples',
        smallImage: '/assets/images/the-basket-of-apples/hero-small.jpg',
        largeImage: '/assets/images/the-basket-of-apples/hero-large.jpg'
    },
    {
        author: 'Edward Hopper',
        title: 'The Boy in the Red Vest',
        smallImage: '/assets/images/the-boy-in-the-red-vest/hero-small.jpg',
        largeImage: '/assets/images/the-boy-in-the-red-vest/hero-large.jpg'
    },
    {
        author: 'Jan van Eyck',
        title: 'Arnolfini Portrait',
        smallImage: '/assets/images/arnolfini-portrait/hero-small.jpg',
        largeImage: '/assets/images/arnolfini-portrait/hero-large.jpg'
    },
    {
        author: 'Leonardo da Vinci',
        containerClasses: 'grid__item--large',
        title: 'Mona Lisa',
        smallImage: '/assets/images/mona-lisa/hero-small.jpg',
        largeImage: '/assets/images/mona-lisa/hero-large.jpg'
    },
    {
        author: 'Jean-Honoré Fragonard',
        title: 'The Swing',
        smallImage: '/assets/images/the-swing/hero-small.jpg',
        largeImage: '/assets/images/the-swing/hero-large.jpg'
    },
];

const createElement = ({ artist, containerClasses, id, images, name }) => {
    return (
        `
            <a class="mb-3 grid__item ${containerClasses}" href="/details.html?${id}">
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