import './style.css';

const images = document.querySelector('.images');

images.addEventListener('click', e => console.log(e));

const slides = [
  '../src/dock.jpeg',
  '../src/forest.jpg',
  '../src/mountains.jpeg',
];

slides.forEach(slide => {
  const image = document.createElement('img');
  image.setAttribute('src', slide);
  images.appendChild(image);
});

const arrows = document.getElementsByClassName('arrow');
let index = 0;
[...arrows].forEach(arrow =>
  arrow.addEventListener('click', function () {
    if (this.matches('.previous')) {
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
    translateSlide();
  })
);

function translateSlide() {
  const tests = document.querySelectorAll('img');
  tests.forEach(
    test => (test.style.transform = `translate(${index * -300}px)`)
  );
}

const navigation = document.querySelector('.navigation');
// Create dot with link corresponding to each slide
slides.forEach(slide => {
  const nav = document.createElement('li');
  nav.setAttribute('href', slide);
  nav.textContent = '🔘';
  navigation.append(nav);
});

const li = document.querySelectorAll('li');
li.forEach(dot =>
  dot.addEventListener('click', () => {
    let dotIndex = slides.indexOf(dot.getAttribute('href'));
    console.log(index);
    // Go to previous slides
    while (dotIndex < index) {
      index -= 1;
      translateSlide();
      console.log(index);
    }
    // Go to next slides
    while (dotIndex > index) {
      index += 1;
      translateSlide();
      console.log(index);
    }
  })
);

// TODO: Fill in dots according to current slide being shown

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
