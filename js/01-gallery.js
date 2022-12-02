import { galleryItems } from './gallery-items.js';
// Change code below this line
const divRef=document.querySelector(".gallery");
console.log(galleryItems);

function cereateGalleryMarkup(items)
{
    return items
    .map(
        (item) =>`<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                    </a>
                </div>`
    ).join("");
}

const addGalleryMarkup=cereateGalleryMarkup(galleryItems);
divRef.innerHTML=addGalleryMarkup;
divRef.addEventListener("click",onImgClick);

function onImgClick(evt){
    blockStandartAction(evt);

    if(evt.target.nodeName!=="IMG"){
        return;
    }

    const instance=basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`,{
        onClose: (instance) => {
            document.removeEventListener("keydown",escRemove);
            //console.log("remove");
        }
    });
    instance.show();

    document.addEventListener("keydown",escRemove);

    function escRemove(evt){
        if(evt.code==="Escape"){
            instance.close();
            console.log(`key=${evt.code}`);
        }
    }
}

function blockStandartAction(evt){
    evt.preventDefault();
}