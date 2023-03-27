
const imgc = document.querySelector(".image-container");


const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let timer;
let x = 0

prevEl.addEventListener("click", ()=> {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imgc.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`;
}
nextEl.addEventListener("click", ()=> {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imgc.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`;
    setTimeout(()=>{
        x = x-45;
        updateGallery();
    }, 3000)
}
updateGallery();
