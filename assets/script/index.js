function AnimeIntro(){
  const elementsAnime = document.querySelectorAll('[data-AnimeIntro]');

  elementsAnime.forEach((el, index) => {
    setTimeout(() => el.classList.add("activeAnimeIntro"), index * 100)
  });
}AnimeIntro();

function AnimateScroll(){
  const elementsAnime = document.querySelectorAll('[data-scroll]');

  window.addEventListener("scroll", () => {
    const distance = window.pageYOffset;

    elementsAnime.forEach((el, index) => {
      if(distance > el.offsetTop - 300){
        setTimeout(() =>  el.classList.add("activeDataScroll"), index * 160);
      }
    });
  })
}AnimateScroll();

function AnimateScrollRight(){
  const elementsAnime = document.querySelectorAll('[data-scrollRight]');

  window.addEventListener("scroll", () => {
    const distance = window.pageYOffset;

    elementsAnime.forEach((el, index) => {
      if(distance > el.offsetTop - 300){
        setTimeout(() =>  el.classList.add("activeRight"), index * 160);
      }
    });
  })
}AnimateScrollRight();

let index = 0;

function Slide(){
  index++;

  const dataSlider = document.querySelectorAll('[data-slide]');
  
  dataSlider.forEach(el => el.classList.remove("activeSlide"));

  if(index > dataSlider.length - 1){
    index = 0;
  }

  dataSlider[index].classList.add("activeSlide");

  setTimeout(Slide, 4000)
}Slide();

function ScrollNav(){
  const navElement = document.querySelectorAll("[data-nav] li a");

  navElement.forEach((el, index) => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const href = el.getAttribute("href");
      const distance = document.querySelector(href).offsetTop;

      scrollTo({
        top: distance,
        behavior: "smooth"
      })
    })
  })
}ScrollNav();