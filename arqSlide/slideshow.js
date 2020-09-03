'use strict'

const images = [
    {'id': '1', 'url': './imagens/1.jpg'},
    {'id': '2', 'url': './imagens/2.jpg'},
    {'id': '3', 'url': './imagens/3.jpg'},
    {'id': '4', 'url': './imagens/4.jpg'},
    {'id': '5', 'url': './imagens/5.jpg'},
    {'id': '6', 'url': './imagens/6.jpg'},
    {'id': '7', 'url': './imagens/7.jpg'},
    {'id': '8', 'url': './imagens/8.jpg'},
]

const containerItems = document.querySelector('#containerItems');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]); 
    items = document.querySelectorAll('.item');
}

const next = () => {
    let lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);