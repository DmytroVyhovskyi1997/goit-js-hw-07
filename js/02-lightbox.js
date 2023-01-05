import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const paletteContainer = document.querySelector('.js-palette');
const cardsMarcup = createGalleryCards(galleryItems)

paletteContainer.insertAdjacentHTML('beforeend', cardsMarcup);




function createGalleryCards (galleryItems){
return galleryItems.map(({preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;

})
.join("")

}


new SimpleLightbox('.js-palette a', {
	captionDelay: 250
})