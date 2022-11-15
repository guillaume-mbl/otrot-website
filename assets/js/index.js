var active = document.getElementsByClassName('nav_item');
var NavItems = document.getElementsByClassName("nav_item");


for (var i = 0; i < NavItems.length; i++) {
  NavItems[i].addEventListener("click", function () {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const socialIcon = document.querySelector('.nav_left_mobile_social');
const mainLogo = document.querySelector('#main_logo');


window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;
  var navbar = document.getElementsByClassName('navbar');
  //console.log(navbar);
  if (currentScroll > 150) {
    navbar += "sticky";
    socialIcon.style.display = "none";
    mainLogo.style.display = "block";
    console.log("heyy")
  } else {
    socialIcon.style.display = "block";
    mainLogo.style.display = "none";
  }
});

const burger = document.querySelector('.nav_right');
const navbar = document.querySelector('.nav_center');
const btnClose = document.querySelector('.burger_close');


burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

btnClose.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const bntMore = document.querySelector('.more');
const textMore = document.querySelector('.story_text_more');

bntMore.addEventListener('click', () => {
  textMore.classList.toggle('hidden');
  if (bntMore.innerHTML = "Voir plus") {
    bntMore.innerHTML = "Voir moins";
  } else if (bntMore.innerHTML = "Voir moins") {
    bntMore.innerHTML = "Voir plus";
  }

  console.log(bntMore);
})
