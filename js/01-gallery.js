import { galleryItems } from "./gallery-items.js";

// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const createGalleryEl = createGallery(galleryItems);
galleryContainer.innerHTML = createGalleryEl;

function createGallery(items) {
	return items
		.map(
			({ preview, original, description }) =>
				`<a class="gallery__link" href="${original.value}">
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

galleryContainer.addEventListener("click", onModalClick);

function onModalClick(event) {
	event.preventDefault();
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	const urlLargeImage = event.target.getAttribute("data-source");

	const instance = basicLightbox.create(
		`<img
	        src="${urlLargeImage}" width="800" height="600"/>`
	);
	instance.show();

	window.addEventListener("keydown", (event) => {
		if (event.code === "Escape") {
			instance.close();
		}
	});
}
