import './style.css';

const div = document.querySelector('.image');
const slides = [
  '../src/dock.jpeg',
  '../src/forest.jpg',
  '../src/mountains.jpeg',
];
const img = document.querySelector('img');
img.setAttribute('src', slides[0]);

const navigation = document.querySelector('.navigation');
// Create dot with link corresponding to each slide
slides.forEach(slide => {
  const nav = document.createElement('li');
  nav.setAttribute('href', slide);
  nav.textContent = '⚫';
  navigation.append(nav);
});

// Index of current slide
let index = 0;

const nav = document.querySelectorAll('li');
// Display correct slide when clicked
nav.forEach(li =>
  li.addEventListener('click', function () {
    console.log(this);
    img.setAttribute('src', li.getAttribute('href'));

    // Update current index (for arrow navigation)
    index = slides.indexOf(li.getAttribute('href'));
  })
);

const arrows = document.getElementsByClassName('arrow');
[...arrows].forEach(arrow =>
  arrow.addEventListener('click', function () {
    this.matches('.previous') ? previousSlide() : nextSlide();
  })
);

function previousSlide() {
  // if index is on first slide, restart slides from ending; else go to previous slide
  index = index <= 0 ? slides.length - 1 : index - 1;
  img.setAttribute('src', slides[index]);
}

function nextSlide() {
  // if index is on last slide, restart slides from beginning; else go to next slide
  index = index >= slides.length - 1 ? 0 : index + 1;
  img.setAttribute('src', slides[index]);
}

// TODO: Add animations to slides
