import images from "./gallery-items.js"
import ref from "./reference.js"

const createImagesMarkup = images => {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                    </a>
                </li>`;
    }).join('');
   
};

const itemMarcup = createImagesMarkup(images);

ref.galleryBox.insertAdjacentHTML('beforeend', itemMarcup);


