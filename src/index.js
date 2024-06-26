import './style.css';
import Dock from './dock.jpeg';
import Forest from './forest.jpg';
import Mountains from './mountains.jpeg';

const images = document.querySelector('.images');

const slides = [Dock, Forest, Mountains];
console.log(Dock.src);
slides.forEach(slide => {
  const image = document.createElement('img');
  image.setAttribute('src', slide);
  images.appendChild(image);
});

const navigation = document.querySelector('.navigation');
// Create dot with link corresponding to each slide
slides.forEach(slide => {
  const nav = document.createElement('li');
  nav.setAttribute('href', slide);
  nav.textContent = '🔘';
  navigation.append(nav);
});

const li = document.querySelectorAll('li');
// Fill in default dot
fillIn.bind(li[0])();

li.forEach(dot =>
  dot.addEventListener('click', function () {
    // Make each dot its default color
    li.forEach(item => (item.style.color = 'initial'));

    // Fill in selected dot
    fillIn.bind(dot)();

    let dotIndex = slides.indexOf(dot.getAttribute('href'));
    // Go to previous slides
    while (dotIndex < index) {
      index -= 1;
      translateSlide();
    }
    // Go to next slides
    while (dotIndex > index) {
      index += 1;
      translateSlide();
    }
  })
);

function fillIn() {
  // Make each dot its default color
  li.forEach(item => (item.style.color = 'initial'));

  // Fill in selected dot
  this.style.color = 'transparent';
  this.style.textShadow = '0 0 black';
}

const arrows = document.getElementsByClassName('arrow');
let index = 0;
[...arrows].forEach(arrow =>
  arrow.addEventListener('click', () => {
    if (arrow.matches('.previous')) {
      index -= 1;
      if (index < 0) {
        index = slides.length - 1;
      }
    } else {
      index += 1;
      if (index >= slides.length) {
        index = 0;
      }
    }
    // Fill in dot according to slide index
    fillIn.bind(li[index])();
    translateSlide();
  })
);

function translateSlide() {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => (img.style.transform = `translate(${index * -300}px)`));
}

// Advance the slides every 5 seconds
let advance = setInterval(advanceSlide, 5000);
function advanceSlide() {
  index += 1;
  if (index >= slides.length) {
    index = 0;
  }
  // Fill in dot according to slide index
  fillIn.bind(li[index])();
  translateSlide();
}
