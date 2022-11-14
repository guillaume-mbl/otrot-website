var active = document.getElementsByClassName('nav_item');
var NavItems = document.getElementsByClassName("nav_item");


for (var i = 0; i < NavItems.length; i++) {
  NavItems[i].addEventListener("click", function() {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;
  var navbar = document.getElementsByClassName('navbar');
  //console.log(navbar);
  if (currentScroll > 100) {
    navbar += "sticky";
   } 
});





const burger = document.querySelector('.nav_right');
const navbar = document.querySelector('.nav_center');


burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
});