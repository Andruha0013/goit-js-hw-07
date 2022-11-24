import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const divRef=document.querySelector(".gallery");

function cereateGalleryMarkup(items)
{
    return items
    .map(
        (item) =>`<li>
                    <a class="gallery__item" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                    </a>
                </li>`
    ).join("");
}

const addGalleryMarkup=cereateGalleryMarkup(galleryItems);
divRef.innerHTML=addGalleryMarkup;

let instance=new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay:250});

instance.on('show.simplelightbox', function () {
    // do something…
});

instance.on('error.simplelightbox', function (e) {
    console.log(e); // some usefull information
});
