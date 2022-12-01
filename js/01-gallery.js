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
            divRef.removeEventListener("keydown",(evt));
            //console.log("remove");
        }
    });
    instance.show();

    divRef.addEventListener("keydown",(evt)=>{
        if(evt.code==="Escape"){
            instance.close();
        }
    });

}

function blockStandartAction(evt){
    evt.preventDefault();
}