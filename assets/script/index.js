function AnimeIntro(){
  const elementsAnime = document.querySelectorAll('[data-AnimeIntro]');

  elementsAnime.forEach((el, index) => {
    setTimeout(() => el.classList.add("activeAnimeIntro"), index * 120)
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

function typeWritter(){
  const element = document.querySelector("[data-typeWritter]");
  const elementString = element.innerHTML.split("");
  
  element.innerHTML = "";

  elementString.forEach((el, index) => {
    setTimeout(() => element.innerHTML += el, index * 50)
  });

}typeWritter();

function Cookies(){
  const buttons = document.querySelectorAll('[data-accept]');
  const cookies = document.querySelector("[data-cookies]");

  buttons.forEach((el, index) => {
    const booleanValue = el.dataset.accept;
    
    el.addEventListener('click', e => {
      if(booleanValue === "true"){
        cookies.classList.add("desactive");
      }else{
        cookies.classList.add("desactive");
        alert("Aten????o, utilizamos biscoitos para melhorar sua experei??ncia.");
      }
    });

  }); 
  
}Cookies();