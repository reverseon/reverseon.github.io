slideone = document.querySelector("#who-am-i")
slidetwo = document.querySelector("#details")
slidethree = document.querySelector("#get-in-touch")
detailsbtn = document.querySelector('.details-btn')
contactbtn = document.querySelector('.contact-btn')
wianav = document.querySelector("#wia-nav")
detailsnav = document.querySelector("#details-nav")
gitnav = document.querySelector("#git-nav")
wnli = wianav.parentElement
dnli = detailsnav.parentElement
gnli = gitnav.parentElement
wianav.addEventListener('click', (e) => {
    e.preventDefault()
    toggleslide(1)
})
detailsnav.addEventListener('click', (e) => {
    e.preventDefault()
    toggleslide(2)
})
gitnav.addEventListener('click', (e) => {
    e.preventDefault()
    toggleslide(3)
})
detailsbtn.addEventListener('click', (e) => {
  e.preventDefault()
  toggleslide(2)
})
contactbtn.addEventListener('click', (e) => {
  e.preventDefault()
  toggleslide(3)
})
function whatslide(str) {
  let retval = 0
  switch (str) {
    case "#who-am-i":
      retval = 1
      break
    case "#details":
      retval = 2
      break
    case "#get-in-touch":
      retval = 3
      break
    default:
      throw Error("Invaliddd!")
      break
  }
  return retval
}
function toggleslide(num) {
    switch (num) {
        case 1:
          slideone.classList.remove('section-hidden')
          slidetwo.classList.add('section-hidden')
          slidethree.classList.add('section-hidden')
          wnli.classList.add('text-red-500')
          dnli.classList.remove('text-red-500')
          gnli.classList.remove('text-red-500')
          break
        case 2:
          slideone.classList.add('section-hidden')
          slidetwo.classList.remove('section-hidden')
          slidethree.classList.add('section-hidden')
          wnli.classList.remove('text-red-500')
          dnli.classList.add('text-red-500')
          gnli.classList.remove('text-red-500')
          break
        case 3:
          slideone.classList.add('section-hidden')
          slidetwo.classList.add('section-hidden')
          slidethree.classList.remove('section-hidden')
          wnli.classList.remove('text-red-500')
          dnli.classList.remove('text-red-500')
          gnli.classList.add('text-red-500')
          break
        default:
            throw Error("Invalid!")
            break
    }
}
document.querySelector(".header-toggle").addEventListener("click", (e) => {
    e.preventDefault()
    navbar = document.querySelector(".header-container")
    burger = document.querySelector(".header-burger")
    if (navbar.classList.contains('h-c-hidden')) {
      navbar.classList.replace('h-c-hidden', 'h-c-open')
      burger.classList.toggle('open')
    } else {
      navbar.classList.replace('h-c-open', 'h-c-hidden')
      burger.classList.toggle('open')
    }
})
// TYPINGFUN
pname = document.querySelector(".p-name")
pdesc = document.querySelector(".p-description-text")
typingname("Thirafi Najwan")
function typingname(str) {
  if (str.length > 0) {
    pname.innerHTML += str.charAt(0)
    setTimeout(() => {
      typingname(str.substr(1))
    }, 100)
  } else {
    setTimeout(() => {
      typingdesc("CS Student by Day, Fantastic Dreamer by Night")
    }, 200)
  }
}
function typingdesc(str) {
  if (str.length > 0) {
    pdesc.innerHTML += str.charAt(0)
    setTimeout(() => {
      typingdesc(str.substr(1))
    }, 80)
  } else {
    setTimeout(() => {
      animwiabtn()
    }, 100)
  }
}
function animwiabtn() {
  detailsbtn.classList.remove('invisible')
  contactbtn.classList.remove('invisible')
  detailsbtn.classList.add('animate__fadeIn')
  contactbtn.classList.add('animate__fadeIn')
}

/* DETAILS PROCESSING */
subslidenow = 1
maxsubslide = 4
subslidecontent1 = document.querySelector(".subslide-content-1")
subslidecontent2 = document.querySelector(".subslide-content-2")
subslidecontent3 = document.querySelector('.subslide-content-3')
subslidecontent4 = document.querySelector('.subslide-content-4') 
prevSubslideBTN = document.querySelector(".prev-subslide-btn")
nextSubslideBTN = document.querySelector(".next-subslide-btn")
prevSubslideBTN.addEventListener('click', (e) => {
    e.preventDefault()
    subslideprev()
})
nextSubslideBTN.addEventListener('click', (e) => {
    e.preventDefault()
    subslidenext()
})
function subslideprev() {
    switch (subslidenow) {
        case 1:
          toggleslide(1)
          break
        case 2: 
          subslidenow--
          subslidecontent1.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent2.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent2.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent2.classList.add('hidden')
            subslidecontent1.classList.remove('hidden')
            subslidecontent1.classList.add('animate__animated', 'animate__slideInLeft')
          }, 950)
          break
        case 3:
          subslidenow--
          subslidecontent2.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent3.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent3.classList.add('hidden')
            subslidecontent2.classList.remove('hidden')
            subslidecontent2.classList.add('animate__animated', 'animate__slideInLeft')
          }, 950)
          break
        case 4:
          subslidenow--
          subslidecontent3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent4.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut') // sanity check
          subslidecontent4.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent4.classList.add('hidden')
            subslidecontent3.classList.remove('hidden')
            subslidecontent3.classList.add('animate__animated', 'animate__slideInLeft')
          }, 950)
          break
        default:
          throw Error('Invalid!')
          break
    }
}
function subslidenext() {
    switch (subslidenow) {
        case 1:
          subslidenow++;
          subslidecontent1.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent2.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent1.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent1.classList.add('hidden')
            subslidecontent2.classList.remove('hidden')
            subslidecontent2.classList.add('animate__animated', 'animate__slideInRight')
          }, 950)
          break
        case 2:
          subslidenow++;
          subslidecontent2.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent2.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent2.classList.add('hidden')
            subslidecontent3.classList.remove('hidden')
            subslidecontent3.classList.add('animate__animated', 'animate__slideInRight')
          }, 950)
          break
        case 3:
          subslidenow++;
          subslidecontent3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent4.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          subslidecontent3.classList.add('animate__animated', 'animate__fadeOut')
          setTimeout(() => {
            subslidecontent3.classList.add('hidden')
            subslidecontent4.classList.remove('hidden')
            subslidecontent4.classList.add('animate__animated', 'animate__slideInRight')
          }, 950)
          break
        case 4:
          // subslidecontent4.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight', 'animate__fadeOut')
          toggleslide(3)
          break
        default: 
          throw Error('Invalid')
          break
    }
}