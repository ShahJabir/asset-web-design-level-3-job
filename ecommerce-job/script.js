const imageLink = [
  "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg",
];
const imgSrc = document.getElementById("imgSrc");

let currentIndex = 0;
imgSrc.src = imageLink[currentIndex];

function next() {
  if (currentIndex < imageLink.length - 1) {
    currentIndex++;
    imgSrc.src = imageLink[currentIndex];
    console.log(currentIndex);
  } else {
    currentIndex = 0;
    imgSrc.src = imageLink[currentIndex];
    console.log(currentIndex);
  }
}

function previous() {
  if (currentIndex > 0) {
    currentIndex--;
    imgSrc.src = imageLink[currentIndex];
    console.log(currentIndex);
  } else {
    currentIndex = imageLink.length - 1;
    imgSrc.src = imageLink[currentIndex];
    console.log(currentIndex);
  }
}

const container = document.getElementById("breadcrumb");
let currentPath = "";

container.innerHTML = "";

const path = window.location.pathname.split("/").filter(Boolean);
path.forEach((segment, _) => {
  currentPath += ` > ${segment}`;
});

let newPath = currentPath.substring(2);

newPath === ""
  ? (container.innerHTML = "index.html")
  : (container.innerHTML = newPath);
