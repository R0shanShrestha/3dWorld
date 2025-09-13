// import { DoubleSide } from "three";


const OpenMenu = document.querySelector(".openMenu");
OpenMenu.addEventListener("click", () => {
  const mobileNav = document.querySelector(".mobileNav");
  mobileNav.classList.remove("-translate-x-110");
  mobileNav.classList.add("translate-x-0");
});

const closeMenu = document.querySelector(".closeMenu");
closeMenu.addEventListener("click", () => {
  const mobileNav = document.querySelector(".mobileNav");
  mobileNav.classList.remove("translate-x-0");
  mobileNav.classList.add("-translate-x-110");
});

const text = "Welcome to My Mini World.";
const textArr = text.split("");

const textAnimation = document.querySelector(".weltext");

textArr.forEach((el, i) => {
  const span = document.createElement("span");
  span.textContent = el === " " ? "\u00A0" : el; // non-breaking space
  span.classList.add(
    "opacity-0",
    "inline-block",
    "transform",
    "translate-y-4",
    "transition-all",
    "duration-500",
    "ease-out"
  );

  setTimeout(() => {
    span.classList.remove("opacity-0", "translate-y-4");
  }, i * 100);

  textAnimation.appendChild(span);
});

const semitext = document.querySelector(".semitext");
const starbtn = document.querySelector(".btn");
setTimeout(() => {
  semitext.classList.remove("opacity-0");
  semitext.classList.add(
    "inline-block",
    "transform",
    "translate-y-4",
    "transition-all",
    "duration-500",
    "ease-out"
  );
}, 2000);

setTimeout(() => {
  starbtn.classList.remove("opacity-0");
  starbtn.classList.add(
    "inline-block",
    "transform",
    "translate-y-4",
    "transition-all",
    "duration-500",
    "ease-out"
  );
}, 3000);
