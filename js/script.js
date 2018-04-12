$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
  });
});

window.addEventListener("load", setHeightVideo);
window.addEventListener("resize", setHeightVideo);
window.addEventListener("resize", moveLogo);

function setHeightVideo() {
  var video = document.querySelector(".yt");
  video.style.height = video.offsetWidth / 1.77 + 'px';
}

var start = null;
var element = document.querySelector('.logo');
// element.style.position = 'absolute';
var position = 0;
var i, rightOffset, bottom1, bottom2, bottom3, starSize;

bottom1 = '50%';
bottom2 = '20%';
bottom3 = '40%';

if ($(window).height() + $(window).width() < 1200) {
  i = 5;
  rightOffset = 20;
  starSize = '0.7em';
} else {
  i = 10;
  rightOffset = 30;
  starSize = '1em';
}

function step() {
  position += i;
  element.style.left = position + 'px';

  if (position % 80 == 0){
    createStar(position + 30, bottom1);
  }
  if (position % 50 == 0){
    createStar(position + 30, bottom2);
  }

  if (position % 40 == 0){
    createStar(position + 20, bottom3);
  }
  
  right = $(window).width() - ($('.logo').offset().left + $('.logo').width());
  if (right > rightOffset) {
    window.requestAnimationFrame(step);
  }
}

function animateLogo(){
  window.requestAnimationFrame(step);
}

var footer = document.querySelector('footer');

function createStar(left, bottom) {
  var star = document.createElement('div');
  var t = document.createTextNode('★');
  star.appendChild(t);
  star.style.position = 'absolute';
  star.style.left = left + 'px';
  star.style.bottom = bottom;
  star.style.fontSize = starSize;
  star.classList.add("starPulse");
  footer.appendChild(star); 
}

function moveLogo() {
  element.style.left = 'auto';
  element.style.right = rightOffset + 'px';
}

function init() {
  document.querySelector('header h1').classList.add("fadeInDown");
  document.querySelector('header h2').classList.add("fadeIn");
  document.querySelector('footer').classList.add("slideInUp");
  document.querySelector('a.cta').classList.add("pulse");
  setTimeout(animateLogo, 5500);
}