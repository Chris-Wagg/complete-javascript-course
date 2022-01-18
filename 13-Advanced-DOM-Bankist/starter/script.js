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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---------- scrolling with learn more-------------
const btnScrollTo = document.querySelector(
  '.btn--scroll-to'
)
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {

  section1.scrollIntoView({ behavior: 'smooth' })
})

// --------- page nav scrolling ---------------

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()


  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

  }
})

// ---------- tabbed component ------------------

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return

  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
})

// ----------- menu fade --------------- // rewatch this for bind
const nav = document.querySelector('.nav')

const hover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const sib = link.closest('.nav').querySelectorAll('.nav__link')

    const logo = link.closest('.nav').querySelector('img')

    sib.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', hover.bind(0.5))
nav.addEventListener('mouseout', hover.bind(1))




// ------------- sticky nav right way ----------------
// with intersection observer api // watch this back

const navH = nav.getBoundingClientRect().height
const header = document.querySelector('.header')

const stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting)
    nav.classList.add('sticky')
  else
    nav.classList.remove('sticky')
}

const headerOb = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navH}px`
})

headerOb.observe(header)


// ------------- reveal elements on scroll ---------------------
const section = document.querySelectorAll('.section')

const reveal = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionOb = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.15
})

section.forEach(function (section) {
  sectionOb.observe(section)
  // section.classList.add('section--hidden')
})


// ------------- lazy image loading ------------------
const imgt = document.querySelectorAll('img[data-src]')

const loadImg = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  // replacing the bad image with the good one
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', function () {

    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgOb = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgt.forEach(img => imgOb.observe(img))



// --------------- slider component --------------------

const slides = document.querySelectorAll('.slide')
const btnL = document.querySelector('.slider__btn--left')
const btnR = document.querySelector('.slider__btn--right')
const maxSlide = slides.length

let curSlide = 0

const goToSlide = function (slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
}

goToSlide(0)

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0
  } else {
    curSlide++
  }
  goToSlide(curSlide)
}

const PreviousSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1
  } else {
    curSlide--
  }
  goToSlide(curSlide)
}

btnR.addEventListener('click', nextSlide)
btnL.addEventListener('click', PreviousSlide)

// ----- with keyboard events -------

document.addEventListener('keydown', function (e) {
  // can do this either way, with an if statement or with short circuting
  if (e.key === 'ArrowLeft') PreviousSlide()
  e.key === 'ArrowRight' && nextSlide()
})


const dotContainer = document.querySelector('.dots');


const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}

createDots()

// this doesn't work for some reason
// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     const slide = e.target.dataset.slide
//     goToSlide(slide);
//   }
// })






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


// ------------- events ------------------

// //eventListener allows for multiple events on 1 element with different functions

// const h1 = document.querySelector('h1')

// // h1.addEventListener('mouseenter', function (e) { // most common use
// //   alert('jeff: addeventlistener')
// // })

// // h1.onmouseenter = function (e) { // this is old shool
// //   alert('jeff: addeventlistener')
// // }

// const alertH1 = function (e) {
//   alert('jeff: addeventlistener')
// }

// h1.addEventListener('mouseenter', alertH1)


// // ------------removing event listeners
// h1.removeEventListener('mouseenter', alertH1) // can put this anywhere, or use setTimout etc




// -------- smooth scrolling -------------------

// //old school way for smooth scrolling on button click
// const btnScrollTo = document.querySelector(
//   '.btn--scroll-to'
// )
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', function (e) {
//   // const s1coords = section1.getBoundingClientRect() // rect = rectangle, will tell you the size of the element box and its coords relative to the top of the viewport


//   //scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset) // top is always relative to the viewport, not the actual page. so will get jank if you try it when not scroleld right to the top

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth' // adds the animation
//   // })



//   //modern way
//   section1.scrollIntoView({ behavior: 'smooth' })

// })

// // ---------------- capturing and bubbling -----------------------

// // event will pass all the way down from document to the target element, through all the parent elements.

// // bubbling then travels all the way back up through the parent elements back to document

// // as if the event had happened in all those parent elements

// //if you have the same event in one of those parent elements it would trigger that as well, even though it wasn't the exact target

// // basically just don't use the same event when it could affect parent elements.


// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

// console.log(randomColor(0, 255))


// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()

//   // e.stopPropagation() // one way to stop it but not really the best method
// }, true) // can add a 3rd argumen to grab the event on the capture onstead of the bubble

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })

// // all 3 elements here will be affected by one event




// --------- page nav ---------------

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()

//     const id = this.getAttribute('href')

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

//     console.log("link")
//   })
// })

// ------ event delegation -------

// add the event listener to the common parent element instead

// document.querySelector('.nav__links').addEventListener('click', function (e) { // adding the event listener to the parent element
//   e.preventDefault()

//   // need to match the target to the element
//   if (e.target.classList.contains('nav__link')) { // grabbing the target to see if it has the correct element
//     const id = e.target.getAttribute('href')
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

//   }
// })



// // ----------- DOM traversing ------------------ (rewatch this)

// const h1 = document.querySelector('h1')

// //selecting child elements

// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children) // more used to grab the live elements but only for direct children

// // h1.firstElementChild.style.color = 'white'
// // h1.lastElementChild.style.color = 'white'


// // selecting parent elements

// console.log(h1.parentNode)
// console.log(h1.parentElement)


// // this is important for event delegation
// // opposite to querySelector. This finds parents no matter how far up the dom tree
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'


// // selecting sibling elements (most used)
// console.log(h1.previousElementSibling) // is null because first child in this case
// console.log(h1.nextElementSibling)

// //node properties
// console.log(h1.previousSibling)
// console.log(h1.nextSibling)


// console.log(h1.parentElement.children) // go up and then down (html collection)


// // this doesn't work for some reason
// // [...h1.parentElement.children].forEach(function (el) {
// //   if (el !== h1) el.style.transform = 'scale(0.5)'
// // })




// // ---------- tabbed component ------------------

// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// //not good practice because of how many times it could add this, need to event delegate
// // tabs.forEach(t => t.addEventListener('click', () => console.log('tab')))

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // guard clause - will return early if condition is matched
//   if (!clicked) return // if null, then return

//   //remove active classes
//   tabs.forEach(t => t.classList.remove('operations__tab--active'))
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'))

//   //activates tabs
//   clicked.classList.add('operations__tab--active');

//   //activate content
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// })


// ----------- menu fade --------------- // rewatch this for bind
// const nav = document.querySelector('.nav')

// const hover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const sib = link.closest('.nav').querySelectorAll('.nav__link')

//     const logo = link.closest('.nav').querySelector('img')

//     sib.forEach(el => {
//       if (el !== link) el.style.opacity = this
//     })
//     logo.style.opacity = this
//   }
// }

// // passign an arg to a handler
// nav.addEventListener('mouseover', hover.bind(0.5))
// nav.addEventListener('mouseout', hover.bind(1))



// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const sib = link.closest('.nav').querySelectorAll('.nav__link')

//     const logo = link.closest('.nav').querySelector('img')

//     sib.forEach(el => {
//       if (el !== link) el.style.opacity = 0.6
//     })
//     logo.style.opacity = 0.5
//   }
// }) // mouseover will bubble


// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const sib = link.closest('.nav').querySelectorAll('.nav__link')

//     const logo = link.closest('.nav').querySelector('img')

//     sib.forEach(el => {
//       if (el !== link) el.style.opacity = 1
//     })
//     logo.style.opacity = 1
//   }

// })



// // ------------- sticky nav ----------------
// // not good way
// const coord = section1.getBoundingClientRect()

// window.addEventListener('scroll', function () {

//   if (window.scrollY > coord.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

// // ------------- sticky nav right way ----------------
// // with intersection observer api // watch this back

// const obCB = function (entries, observer) {
//   entries.forEach(entry => {
//   })
// }

// const obOps = {
//   root: null,
//   threshold: [0, 0.2]
// }

// const ob = new IntersectionObserver(obCB, obOps)
// ob.observe(section1)


// // --------------- slider component --------------------

// const slides = document.querySelectorAll('.slide')
// const btnL = document.querySelector('.slider__btn--left')
// const btnR = document.querySelector('.slider__btn--right')
// const maxSlide = slides.length // reads he length from the node list

// let curSlide = 0


// // const slider = document.querySelector('.slider')
// // slider.style.transform = 'scale(0.5)'
// // slider.style.overflow = 'visible'

// // slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`) // replaced with goToSlide(0)

// const goToSlide = function (slide) {
//   slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
// }

// goToSlide(0)

// // next slide
// // btnR.addEventListener('click', function () { // refactored below
// //   if (curSlide === maxSlide - 1) {
// //     curSlide = 0
// //   } else {
// //     curSlide++
// //   }

// // slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`) // replaced by goToSlide(curSlide)


// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0
//   } else {
//     curSlide++
//   }
//   goToSlide(curSlide)
// }
// // })

// const PreviousSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1
//   } else {
//     curSlide--
//   }
//   goToSlide(curSlide)
// }

// btnR.addEventListener('click', nextSlide)
// btnL.addEventListener('click', PreviousSlide)