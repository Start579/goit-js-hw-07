import { galleryItems } from './gallery-items.js';
// Change code below this line
// Добавлена галлерея
const gallery = document.querySelector(".gallery");
const image = galleryItems.map(({preview, description, original}) => {
return `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join("");

gallery.insertAdjacentHTML("afterbegin", image); 
// Подключен клик и запрещен переход по ссылке
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
const instance = basicLightbox.create(
`<img src="${evt.target.dataset.source}" width="800" height="600">`)
// Подключение Light Box "Открытие"
instance.show()
//Закрытие по Escape
gallery.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    instance.close();
  }
})
    evt.preventDefault();
        
    if(evt.target.nodeName !== "IMG") {
        return;
    }
}
