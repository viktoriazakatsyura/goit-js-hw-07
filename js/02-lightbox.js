import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const createGalleryEl = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", createGalleryEl);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  gallery.on("show.simplelightbox", function () {
    console.log(gallery);
  });
});
