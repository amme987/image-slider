import './style.css';

const images = document.querySelector('.images');

images.addEventListener('click', e => console.log(e));

const slides = [
  '../src/dock.jpeg',
  '../src/forest.jpg',
  '../src/mountains.jpeg',
];
// const img = document.querySelector('img');
// img.setAttribute('src', slides[0]);

[...slides].forEach(slide => {
  const image = document.createElement('img');
  image.setAttribute('src', slide);
  images.appendChild(image);
});

const arrows = document.getElementsByClassName('arrow');
let index = 0;
[...arrows].forEach(arrow =>
  arrow.addEventListener('click', function (e) {
    // console.log(e);
    this.matches('.previous') ? previousSlide() : nextSlide();
  })
);

function previousSlide() {
  index -= 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  const tests = document.querySelectorAll('img');
  [...tests].forEach(
    test => (test.style.transform = `translate(${index * -300}px)`)
  );
  console.log(index);
}

function nextSlide() {
  index += 1;
  if (index >= slides.length) {
    // const repeat = images.cloneNode(true).childNodes;
    // images.appendChild([...repeat][0]);
    index = 0;
  }
  const tests = document.querySelectorAll('img');
  console.log([...tests]);
  [...tests].forEach(test => {
    test.style.transform = `translate(${index * -300}px)`;
  });
  console.log(index);
}

const navigation = document.querySelector('.navigation');
// Create dot with link corresponding to each slide
slides.forEach(slide => {
  const nav = document.createElement('li');
  nav.setAttribute('href', slide);
  nav.textContent = '🔘';
  navigation.append(nav);
});

// OLD STUFF

// const navigation = document.querySelector('.navigation');
// // Create dot with link corresponding to each slide
// slides.forEach(slide => {
//   const nav = document.createElement('li');
//   nav.setAttribute('href', slide);
//   nav.textContent = '⚫';
//   navigation.append(nav);
// });

// // Index of current slide
// let index = 0;

// const nav = document.querySelectorAll('li');
// // Display correct slide when clicked
// nav.forEach(li =>
//   li.addEventListener('click', function () {
//     console.log(this);
//     img.setAttribute('src', li.getAttribute('href'));

//     // Update current index (for arrow navigation)
//     index = slides.indexOf(li.getAttribute('href'));
//   })
// );

// const arrows = document.getElementsByClassName('arrow');
// [...arrows].forEach(arrow =>
//   arrow.addEventListener('click', function () {
//     this.matches('.previous') ? previousSlide() : nextSlide();
//   })
// );

// function previousSlide() {
//   // if index is on first slide, restart slides from ending; else go to previous slide
//   index = index <= 0 ? slides.length - 1 : index - 1;
//   img.setAttribute('src', slides[index]);
// }

// function nextSlide() {
//   // if index is on last slide, restart slides from beginning; else go to next slide
//   index = index >= slides.length - 1 ? 0 : index + 1;
//   img.setAttribute('src', slides[index]);
// }
