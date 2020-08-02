/* hide navbar on scroll */
let prevScroll = window.pageYOffset;
window.onscroll = () => {
  currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-130px";
  }
  prevScroll = currentScroll;
};

/* GALLERY WITH CSS GRID */
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

function generateHTML([h, v]) {
  return `
        <div class="item h${h} v${v}">
            <img src="../images/img${randomNumber(20)}.png">
            <div class="item__overlay">
                <button><i class="fa fa-eye" aria-hidden="true"></i></button>
            </div>            
        </div>
    `;
}
/* function that returns a random number for getting the images */

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

const digits = Array.from({ length: 20 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);
const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

/* view full image on click */

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

overlay.addEventListener("click", close);
