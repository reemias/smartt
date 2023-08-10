const images = [
    "imagens/image1.jpg",
    "imagens/image2.jpg",
    "imagens/image3.jpg",
    // Adicione mais URLs de imagens conforme necessário
];
let currentImageIndex = 0;
let fadeInImage = true;

document.addEventListener("DOMContentLoaded", function () {
    animateHeader();
    animateLogo();
    animateBoxes();
    startAutomaticSlide();
    displayImage(currentImageIndex, document.getElementById("sliderImage"));
    displayImage((currentImageIndex + 1) % images.length, document.getElementById("sliderImage2"));
});



function animateBoxes() {
    const boxes = document.querySelectorAll(".rectangle-box, .rectangle-box2");
    boxes.forEach(box => {
        box.style.transform = "scale(0.8)";
        box.style.opacity = "0";
        setTimeout(() => {
            box.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            box.style.transform = "scale(1)";
            box.style.opacity = "1";
        }, 500);
    });
}

function startAutomaticSlide() {
    setInterval(() => {
        changeImage(1);
    }, 5000); // Muda a imagem a cada 5 segundos (5000 milissegundos)
}

function changeImage(indexChange) {
    const currentImage = document.getElementById("sliderImage");
    const nextImage = document.getElementById("sliderImage2");

    currentImage.style.opacity = "0";

    setTimeout(() => {
        currentImage.src = images[currentImageIndex];
        nextImage.src = images[(currentImageIndex + indexChange) % images.length];
        currentImage.style.transition = "opacity 1.5s ease-in-out";
        currentImage.style.opacity = "1";
        fadeInImage = !fadeInImage;
        currentImageIndex = (currentImageIndex + indexChange) % images.length;
    }, 1500);
}

function displayImage(index, imgElement) {
    imgElement.src = images[index];
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const commentSection = document.getElementById("comment-section");

    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value;
        if (searchText.trim() !== "") {
            const comment = document.createElement("div");
            comment.classList.add("comment");
            comment.textContent = searchText;
            commentSection.appendChild(comment);
            searchInput.value = "";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const commentSection = document.getElementById("comment-section");
    const searchHistory = document.getElementById("search-history"); // Novo elemento

    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value;
        if (searchText.trim() !== "") {
            const comment = document.createElement("div");
            comment.classList.add("comment");
            comment.textContent = searchText;
            commentSection.appendChild(comment);
            searchInput.value = "";

            // Armazenar no histórico por 24 horas
            const historyItem = document.createElement("div");
            historyItem.classList.add("search-history-item");
            historyItem.textContent = searchText;
            searchHistory.appendChild(historyItem);

            setTimeout(() => {
                searchHistory.removeChild(historyItem);
            }, 24 * 60 * 60 * 1000); // 24 horas em milissegundos

            // Limitar histórico a 1000 caracteres
            let totalHistoryLength = 0;
            const historyItems = searchHistory.getElementsByClassName("search-history-item");
            for (const item of historyItems) {
                totalHistoryLength += item.textContent.length;
            }

            while (totalHistoryLength > 1000 && historyItems.length > 0) {
                const oldestItem = historyItems[0];
                totalHistoryLength -= oldestItem.textContent.length;
                searchHistory.removeChild(oldestItem);
            }
        }
    });
});

function toggleVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
