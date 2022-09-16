import { galleryItems } from './gallery-items.js';
// Change code below this line

// Добавлена галлерея
const gallery = document.querySelector(".gallery");
const image = galleryItems.map(({preview, description, original}) => {
return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`}).join("");

gallery.insertAdjacentHTML("beforeend", image); 
// Подключен клик и запрещен переход по ссылке
gallery.addEventListener("click", onGalleryClick, { once: true });

 function onGalleryClick(evt) {
    evt.preventDefault();       
    if(evt.target.nodeName !== "IMG") {
        return;
    }
  var lightbox = new SimpleLightbox('.gallery a', {captionType : "alt", captionsData : "alt", captionDelay : "250"});
}