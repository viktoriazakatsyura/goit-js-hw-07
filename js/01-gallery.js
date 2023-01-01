import { galleryItems } from "./gallery-items.js";

// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const createGalleryEl = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", createGalleryEl);

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
	        src="${urlLargeImage}" width="800" height="600"/>`,
		{
			onClose: () => {
				window.removeEventListener("keydown", onEscPress);
			},
		}
	);
	instance.show();
	function onEscPress(event) {
		if (event.code === "Escape") {
			instance.close();
			window.removeEventListener("keydown", onEscPress);
		}
	}
	if (instance.visible()) {
		window.addEventListener("keydown", onEscPress);
	}
	console.log(event.target);
}
