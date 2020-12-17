'use strict';

import photos from './modules.js';

let item = 0;

const setPhoto = item => {
    const frame = document.querySelector('.img__frame');
    frame.style.background = `url("../img/${photos[item].name}") bottom`;
    frame.style.backgroundSize = '100%';
    return;
}

const stepPhoto = () => {
    setPhoto(item);
    item = item < photos.length-1 ? ++item : 0;
    console.log(item);
}

const slideShow = () => {
    setInterval(stepPhoto,2000);
}

slideShow();