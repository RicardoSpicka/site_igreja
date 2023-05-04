/* CARROSSEL */
window.onload = function() {
  const myCarouselElement = document.querySelector('#myCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  })
}

/* NAV RECOLHIDO */
window.onload = function() {
  let nav = document.querySelector(".nav");

  window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
    }else {
      nav.classList.remove("sticky");
    }
  }
}
