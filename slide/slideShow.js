'use Fstrict';

const images = [
    {'id': '1', 'url': './img/dev1.jpg'},
    {'id': '2', 'url': './img/dev2.jpg'},
    {'id': '3', 'url': './img/dev3.jpg'},

]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
             <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);  // para o começo appendChild
    items = document.querySelectorAll('.item');


}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]); //para o final inserBefor
    items = document.querySelectorAll('.item');


}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
