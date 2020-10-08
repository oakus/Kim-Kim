const lunchBtn = document.querySelector('.lunch-btn');
const dinnerBtn = document.querySelector('.dinner-btn');
const lunchMenu = document.querySelector('#lunch-menu')
const dinnerMenu = document.querySelector('#dinner-menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById("hamburger")
const navUl = document.getElementById('nav-ul')

let lunchM = true;
let dinnerM = false;

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show')
  })
})


lunchBtn.addEventListener('click', function() {
  lunchM = true;
  dinnerM = false;
  menuToggle();
})

dinnerBtn.addEventListener('click', () => {
  lunchM = false;
  dinnerM = true;
  menuToggle();
})

window.addEventListener("scroll", runOnScroll);

function runOnScroll() {
  let top = window.scrollY
  if (top >= 200) {
    nav.classList.add('active');
    navLinks.forEach(link => link.classList.add('active'));
  } else {
    nav.classList.remove('active')
    navLinks.forEach(link => link.classList.remove('active'));
  }
}

function menuToggle() {
  if (lunchM === true) {
    dinnerMenu.style.display = 'none';
    lunchMenu.style.display = 'block';
  } else if (dinnerM === true) {
    dinnerMenu.style.display = 'block';
    lunchMenu.style.display = 'none';
  }
}


menuToggle();


  