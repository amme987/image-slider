import './style.css';

const div = document.querySelector('.image');
const slides = [
  '../src/dock.jpeg',
  '../src/forest.jpg',
  '../src/mountains.jpeg',
];
const img = document.querySelector('img');
img.setAttribute('src', slides[0]);
let currentSlide = slides[0];

const navigation = document.querySelector('.navigation');
// Create dot with link corresponding to each slide
slides.forEach(slide => {
  console.log(slide);
  const nav = document.createElement('a');
  nav.setAttribute('href', slide);
  nav.textContent = '⚫';
  navigation.append(nav);
});

let currentIndex = slides.indexOf(currentSlide);

const arrows = document.getElementsByClassName('arrow');
[...arrows].forEach(arrow =>
  arrow.addEventListener('click', function () {
    this.matches('.previous') ? previousSlide() : nextSlide();
  })
);

function previousSlide() {
  // if currentIndex is on first slide, restart slides from ending; else go to previous slide
  currentSlide =
    currentIndex <= 0 ? slides[slides.length - 1] : slides[currentIndex - 1];
  currentIndex = slides.indexOf(currentSlide);
  img.setAttribute('src', currentSlide);
}

function nextSlide() {
  // if currentIndex is on last slide, restart slides from beginning; else go to next slide
  currentSlide =
    currentIndex >= slides.length - 1 ? slides[0] : slides[currentIndex + 1];
  currentIndex = slides.indexOf(currentSlide);
  img.setAttribute('src', currentSlide);
}
