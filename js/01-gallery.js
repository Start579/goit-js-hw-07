import { galleryItems } from './gallery-items.js';
// Change code below this line
// Добавлена галлерея
const gallery = document.querySelector(".gallery");
const image = galleryItems.map(({preview, description, original}) => {
return `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}).join("");

gallery.insertAdjacentHTML("beforeend", image); 
// Подключен клик и запрещен переход по ссылке
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault();   
    if(evt.target.nodeName !== "IMG") {
        return;
    }  
const instance = basicLightbox.create(
`<img src="${evt.target.dataset.source}" width="800" height="600">`)
instance.show()   
}