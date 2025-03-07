document.addEventListener('DOMContentLoaded', function() {
    let loadingOverlay = document.querySelector(".loading-overlay");
    let content = document.querySelector(".le-contenu-main");
    document.body.classList.add('no-scroll');
    setTimeout(() => {
        loadingOverlay.style.opacity = "0";
        setTimeout(() => {
            loadingOverlay.style.display = "none";
            content.style.opacity= "1";
            document.body.classList.remove('no-scroll');
        }, 1600);
    }, 4000);
}); 




const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();