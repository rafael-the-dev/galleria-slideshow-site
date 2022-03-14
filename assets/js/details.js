


const fetchData = (id) => {
    console.log(id)
    fetch('../../data.json')
        .then(res => res.json())
        .then(data => console.log(data.find((item, index) => index === id)))
        .catch(console.log)
};

const start = () => {
    const url = document.location.href;
    const id = parseInt(url.split('?')[1])
    fetchData(id)
};

window.addEventListener('load', start);