// dropdown button
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
var finalselect = null;
const secondselect = document.querySelector(".fifthday");
const thirdselect = document.querySelector(".eighthday");
const secondcontainer = document.querySelector(".secondcontainer");
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const no3 = document.querySelector(".no3");
const no4 = document.querySelector(".no4");
const no5 = document.querySelector(".no5");
const no6 = document.querySelector(".no6");
const no7 = document.querySelector(".no7");
const no8 = document.querySelector(".no8");
const no9 = document.querySelector(".no9");
const no10 = document.querySelector(".no10");
const no11 = document.querySelector(".no11");

const innerContainer = document.querySelector(".innercontainer");
const before = window.getComputedStyle(
  document.querySelector(".innercontainer"),
  ":before"
);

const optionsList = document.querySelectorAll(".option");
//open and close
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

//Add element
optionsList.forEach((o) => {
  o.addEventListener("click", function states() {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    finalselect = selected.innerHTML;

    // console.log(finalselect)

    // code for showing the wanted info
    //getting button id

    var btn = document.getElementById("button");
    var firstday = "FourDays";
    var fifthday = "SevenDays";
    var seventhday = "ElevenDays";
    btn.onclick = function clicker() {
      switch (finalselect) {
        case firstday:
          window.location.href = "#secondcontainer";
          break;
        case fifthday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          break;

        case seventhday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          thirdselect.style.display = "flex";
          break;
      }
    };
  });
});

//background change
function hoverbg(card, url) {
  card.addEventListener("mouseover", () => {
    secondcontainer.style.backgroundImage = `url(${url})`;
  });
  card.addEventListener("mouseout", () => {
    secondcontainer.style.backgroundImage =
      'url("../States/img/Sikim/Teesta-River.jpg")';
  });
}

hoverbg(no1, "../States/img/Sikim/gangtokk.jpg");
hoverbg(no2, "../States/img/Sikim/goecha_la.jpg");
hoverbg(no3, "../States/img/Sikim/nathula_pass.jpg");
hoverbg(no4, "../States/img/Sikim/pelling.jpg");
hoverbg(no5, "../States/img/Sikim/Sikkim-Gurudongmar-Lake.jpg");
hoverbg(no6, "../States/img/Sikim/Teesta-River.jpg");
hoverbg(no7, "../States/img/Sikim/tsomgo_lake.jpg");
hoverbg(no8, "../States/img/Sikim/tsomgo_lake.jpg");
hoverbg(no9, "../States/img/Sikim/zuluk.jpg");
hoverbg(no10, "../States/img/Sikim/gangtokk.jpg");
hoverbg(no11, "../States/img/Sikim/goecha_la.jpg");

//navbar

const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  iffalse();
});

// Menu

function iftrue() {
  menu.classList.add("open");
  nav_container.style.top = "0";
  menuopen = true;
  innerContainer.style.display = "none";
  before.display = "none";
}
function iffalse() {
  menu.classList.remove("open");
  nav_container.style.top = "-150vh";
  menuopen = false;
  innerContainer.style.display = "flex";
}
menu.addEventListener("click", () => {
  if (!menuopen) {
    iftrue();
  } else {
    iffalse();
  }
});
nav_container.addEventListener("click", () => {
  iffalse();
});

// no1.addEventListener('mouseover',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/winter-cold-memento-mori-wallpaper-preview.jpg")';
// })

// no1.addEventListener('mouseout',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/borracaves1.jpg")';
// })
