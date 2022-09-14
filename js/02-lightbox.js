import { galleryItems } from './gallery-items.js';
// Change code below this line

// Добавлена галлерея
const gallery = document.querySelector(".gallery");
const image = galleryItems.map(({preview, description, original}) => {
return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`}).join("");

gallery.insertAdjacentHTML("afterbegin", image); 
// Подключен клик и запрещен переход по ссылке
gallery.addEventListener("click", onGalleryClick);

 function onGalleryClick(evt) {
  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

    evt.preventDefault();
        
    if(evt.target.nodeName !== "IMG") {
        return;
    }
}
console.log(galleryItems);
