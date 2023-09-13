const data = [
  {
    id: 1,
    img: "images/customer-1.jpg",
    name: "Mohamed Ahmed",
    p: "i'm a front end develober",
  },
  {
    id: 2,
    img: "images/customer-2.jpg",
    name: "Menna Mohamed",
    p: "i'm a back end develober",
  },
  {
    id: 3,
    img: "images/customer-3.jpg",
    name: "Mahomud Ezzat",
    p: "i'm a UI designer",
  },
];

let pre = document.getElementsByClassName("pre")[0];
let next = document.getElementsByClassName("next")[0];
let p = document.querySelector(".review p");
let img = document.querySelector(".img-container img");
let h = document.querySelector(".review h4");
console.log(pre, next, img, h, p);

let counter = 0;

function update() {
  p.textContent = data[counter].p;
  p.textContent = data[counter].name;
  img.src = data[counter].img;
}
update();

next.addEventListener("click", function () {
  counter++;
  if (counter > data.length - 1) {
    counter = 0;
  }
  update();
});

pre.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = data.length - 1;
  }
  update();
});

let surprise = document.getElementById("random-btn");
let overlay = document.querySelector(".overlay");
let cancel = document.getElementById("cancel");
surprise.addEventListener("click", function () {
  overlay.style.display = "block";
});

cancel.addEventListener("click", function () {
  overlay.style.display = "none";
});

let intxt = document.getElementById("name");
let inpar = document.getElementById("par");
let inimg = document.getElementById("img");
let submit = document.getElementById("submit");
let addRev = document.querySelector(".add-review form");

addRev.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", () => {
  data.push({
    id: data.length + 1,
    name: intxt.value,
    img: "images/" + inimg.value,
    p: inpar.value,
  });
  overlay.style.display = "none";
});
console.log(data);
