const name = document.querySelector('[data-name]');
const year = document.querySelector('[data-year]');
const dataSource = document.querySelector('[data-source]');
const description = document.querySelector('[data-description]');
const artistName = document.querySelector('[data-artist=name]');
const artistImage = document.querySelector('[data-artist=image]');
const smallImage = document.querySelector('[data-image=small]');
const largeImage = document.querySelector('[data-image=large]');

const setData = (item) => {
    name.textContent = item.name
    description.textContent = item.description;
    year.textContent = item.year;
    artistName.textContent = item.artist.name;
    artistImage.setAttribute('src', item.artist.image)
    smallImage.setAttribute('src', item.images.hero.small)
    largeImage.setAttribute('src', item.images.hero.large);
    [smallImage, largeImage].forEach(item => item.setAttribute('alt', item.name));
    artistImage.setAttribute('alt', item.artist.name)
    dataSource.setAttribute('href', item.source)
};

const fetchData = (id) => {
    fetch('../../data.json')
        .then(res => res.json())
        .then(data => setData(data.find((item, index) => index === id)))
        .catch(console.log)
};

const start = () => {
    const url = document.location.href;
    const id = parseInt(url.split('?')[1])
    fetchData(id);
};

window.addEventListener('load', start);