const slide1 = document.querySelector(".testinomial-one");
const slide2 = document.querySelector(".testinomial-second");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

next.addEventListener("click", () => {
  slide1.style.display = "none";
  slide2.style.display = "block";
});

next2.addEventListener("click", () => {
  slide2.style.display = "none";
  slide1.style.display = "block";
});

prev2.addEventListener("click", () => {
  slide2.style.display = "none";
  slide1.style.display = "block";
});

prev.addEventListener("click", () => {
  slide1.style.display = "none";
  slide2.style.display = "block";
});
