function onScroll() {
  const elemento = document.getElementById("navigation")
    if(scrollY > 0) {
        elemento.classList.add("scroll")
    }else{
        elemento.classList.remove("scroll")
    }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home')