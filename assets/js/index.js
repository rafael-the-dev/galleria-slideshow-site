const gridContainer = document.querySelector('[data-grid]');

const gridItems = [
    {
        author: 'Vincent Van Gogh',
        title: 'Starry Night',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
    {
        author: 'Johannes Vermeer',
        title: 'Girl with a Pearl Earring',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
    {
        author: 'Pablo Picass',
        title: 'Guernica',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
    {
        author: 'Artemisia Gentileschi',
        title: 'Penitent Magdalenet',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
    {
        author: 'Rembrandt',
        title: 'The Storm on the Sea of Galilee',
        smallImage: '/assets/images/starry-night/hero-small.jpg',
        largeImage: '/assets/images/starry-night/hero-large.jpg'
    },
];

const createElement = ({ author, title, }) => {
    return (
        `
            <a class="mb-3" href="/">
                <figure class="grid__image-container position-relative">
                    <img
                        class="d-block h-100 w-100 grid__image"
                        src="/assets/images/starry-night/hero-small.jpg"
                    />
                    <figcaption class="position-absolute left-0 bottom-0 w-100 pt-5 grid__image-caption px-3">
                        <h2 class="text-light">${ title }</h2>
                        <p class="text-light opacity-75">${ author }</p>
                    </figcaption>
                </figure>
            </a>
        `
    )
};

const start = () => {
    gridContainer.innerHTML = gridItems.reduce(
            (previousValue, currentValue) => previousValue + createElement(currentValue),
        "");
    //
};

window.addEventListener('load', start);

/**
 * <a class="mb-3" href="/">
                    <figure class="grid__image-container position-relative">
                        <img
                            class="d-block h-100 w-100 grid__image"
                            src="/assets/images/starry-night/hero-small.jpg"
                        />
                        <figcaption class="position-absolute left-0 bottom-0 w-100 pt-5 grid__image-caption px-3">
                            <h2 class="text-light">Starry Night</h2>
                            <p class="text-light opacity-75">Vincent Van Gogh</p>
                        </figcaption>
                    </figure>
                </a>
                <a class="mb-3" href="/">
                    <figure class="grid__image-container--large position-relative">
                        <img
                            class="d-block h-100 w-100 grid__image"
                            src="/assets/images/girl-with-pearl-earring/hero-small.jpg"
                        />
                        <figcaption class="position-absolute left-0 bottom-0 w-100 pt-5 grid__image-caption px-3">
                            <h2 class="text-light">Girl with a Pearl Earring</h2>
                            <p class="text-light opacity-75">Johannes Vermeer</p>
                        </figcaption>
                    </figure>
                </a>
                <a href="/">
                    <figure class="grid__image-container position-relative">
                        <img
                            class="d-block h-100 w-100 grid__image"
                            src="/assets/images/guernica/hero-small.jpg"
                        />
                        <figcaption class="position-absolute left-0 bottom-0 w-100 pt-5 grid__image-caption px-3">
                            <h2 class="text-light">Guernica</h2>
                            <p class="text-light opacity-75">Pablo Picasso</p>
                        </figcaption>
                    </figure>
                </a>
 */