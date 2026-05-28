let filterA = document.getElementById("brightness");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("blur");
let filterD = document.getElementById("sepia");
let filterE = document.getElementById("hue");
let filterF = document.getElementById("saturation");

let sliders = document.querySelectorAll(".filter input[type='range']");
let radioBtns= document.querySelectorAll(".flip-options input[type='radio']");

let noFlipBtn = document.getElementById("no-flip");
let horFlipBtn = document.getElementById("flip-x");
let verFlipBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("img-chosen");

uploadButton.onchange = () => {
  valueFilter();
  document.querySelector(".image-container").style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  }
}

function valueFilter() {
  filterA.value = "100";
  filterB.value = "100";
  filterC.value = "0";
  filterD.value = "0";
  filterE.value = "0";
  filterF.value = "100";
  addFilter();
  flipImage();
}

sliders.forEach(slider => {
  slider.addEventListener("input", addFilter);
})

function addFilter() {
  image.style.filter = `
    brightness(${filterA.value}%)
    contrast(${filterB.value}%)
    blur(${filterC.value}px)
    sepia(${filterD.value}%)
    hue-rotate(${filterE.value}deg)
    saturate(${filterF.value}%)
  `;
}

radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener("click", flipImage);
})

function flipImage(){
  if(horFlipBtn.checked)
  {
    image.style.transform="scaleX(-1)";
  }
  else if(verFlipBtn.checked)
  {
    image.style.transform="scaleY(-1)";
  }
  else
  {
    image.style.transform="scale(1,1)";
  }
}