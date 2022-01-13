'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// replaces the above
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//old school way for smooth scrolling on button click
const btnScrollTo = document.querySelector(
  '.btn--scroll-to'
)
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect() // rect = rectangle, will tell you the size of the element box and its coords relative to the top of the viewport


  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset) // top is always relative to the viewport, not the actual page. so will get jank if you try it when not scroleld right to the top

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth' // adds the animation
  // })



  //modern way
  section1.scrollIntoView({ behavior: 'smooth' })
})










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // selecting elements

// console.log(document.documentElement) // need this to then be able to apply things to the whole page
// console.log(document.head)
// console.log(document.body)



// const header = document.querySelector('.header') // will grab first element that matches
// const allSections = document.querySelectorAll('.section') // will grab all elements that match. Most used method to grab stuff. Can also use on all elements as well
// console.log(allSections)



// document.getElementById('section--1') // pass only id name without selector. so dont need a # or . at the front



// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)
// // will return a html collection (live collection) if dom changes, this collection will update automatically. The same won't happen with a node list



// document.getElementsByClassName('btn') // dont need selector, just the class anme. Will return a live html collection as well

// //most of the time, querySelector/all is the most useful


// // creating / iserting elements

// // .insertAdjacentHTML() // see bankist array lecture


// const message = document.createElement('div') // pass string of the tag name. will create an object that represents a dom element. need to add it manually into the page though

// message.classList.add('cookie-message') // adds a class to the element
// // message.textContent = 'we use cookies'
// message.innerHTML = 'we use cookies <button class="btn btn--close-cookie">Got it</button>' // inserts html as well

// // header.prepend(message) // adds element as first child to selected element
// header.append(message) // adds at end.
// // cant have the same dom element in 2 places, so in this case will put it on the botton instead of the top. Can use this to move elements


// // insert multiple coppies on an element
// // header.append(message.cloneNode(true)) // will clone the element and allow it to be used in multiple places at once


// // header.before(message)
// // header.after(message) // will make them siblings


// // ------------------delete elements------------------------

// // document.querySelector('.btn--close-cookie').addEventListener('click', function () {
// //   message.remove() // in memory so dont have to queryselect it again
// // })


// // ------- styles, attributes and classes ----------------------

// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove()
// })

// // ----- styles

// message.style.backgroundColor = '#37383d'
// // message.style.width = '120%'

// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)
// // will get hidden styles data


// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px'


// document.documentElement.style.setProperty('--color-primary', 'orangered') //  can use this to change custom css properties



// // ----- attributes

// const logo = document.querySelector('.nav__logo')
// console.log(logo.src)
// console.log(logo.alt) // will only read standard properties
// console.log(logo.className)

// logo.alt = 'jeff'

// //non-standard
// console.log(logo.getAttribute('designer')) // gets a non standard property

// console.log(logo.setAttribute('company', 'jeff')) // sets a new attribute

// console.log(logo.getAttribute('src')) // only real way to see the file location
// console.log(logo.src) // this gives the absolute location


// const link = document.querySelector('.nav__link--btn')
// console.log(link.href) // absolute
// console.log(link.getAttribute('href')) // as written in html



// // ----- data attributes

// console.log(logo.dataset.versionNumber)


// // ------ classes

// logo.classList.add('a')
// logo.classList.remove('a')
// logo.classList.toggle('a')
// logo.classList.contains('a')

// // logo.classanme = 'banana' // dont use this because it will override what's there and will only allow one class 