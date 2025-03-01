// script.js
function upDate(previewPic) {
    console.log("Mouse over event triggered");
    console.log("Image source: ", previewPic.src);
    console.log("Alt text: ", previewPic.alt);

    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url(" + previewPic.src + ")";
    mainImage.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse out event triggered");
    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "";
    mainImage.innerHTML = "Hover over an image below to display here.";
}
