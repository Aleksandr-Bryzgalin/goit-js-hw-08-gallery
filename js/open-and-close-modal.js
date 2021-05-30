import refs from "./reference.js"

function onImageClick(evt) {
   
    const imageEl = evt.target;
    if (!imageEl.classList.contains('gallery__image')) {
        return 
    }

    evt.preventDefault();    
    
    refs.modalBox.classList.add('is-open');

    refs.modalImage.src = imageEl.dataset.source;
    refs.modalImage.alt = imageEl.alt;
};

function onModalClose() {
    
    refs.modalBox.classList.remove('is-open');

    refs.modalImage.src = "";
    refs.modalImage.alt = "";
}

function onModalCloseEsc (evt) {

    if (evt.code === 'Escape') {
        onModalClose();
    };

    // Или прописать
    // if (evt.keyCode === 27) {
    //     onModalClose();
    // };
}

function onModalCloseOverlay (evt) {

    if (evt.target === refs.overlayBox) {
        onModalClose();
    };

   
}


refs.galleryBox.addEventListener('click', onImageClick);
refs.btnModalClose.addEventListener('click', onModalClose);
window.addEventListener('keydown', onModalCloseEsc)
window.addEventListener('click', onModalCloseOverlay)


