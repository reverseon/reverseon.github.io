// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let toggle_theme_btn = document.getElementById("toggle-theme");
let theme = localStorage.getItem("theme");
let body = document.getElementsByTagName("body")[0];
let vantaeff;
if (!theme) {
    localStorage.setItem("theme", "white");
    theme = "white";
}
if (theme == "white") {
    toggle_theme_btn.checked = false;
    body.classList.add('light-mode')
} else {
    toggle_theme_btn.checked = true;
}
toggle_theme_btn.addEventListener("click", () => {
    if (theme == "dark") {
        localStorage.setItem("theme", "white");
        theme = "white";
        body.classList.add('light-mode')
    } else {
        localStorage.setItem("theme", "dark");
        theme = "dark";
        body.classList.remove('light-mode')
    }
})

/* curious anim */


let lineSelectorString = '.curious-text .line';
let textWrapperSelectorString = '.curious-text .text-wrapper';
let lettersSelectorString = '.curious-text .letters';
let letters = document.querySelectorAll(lettersSelectorString);
for (let i = 0; i < letters.length; i++) {
    let text = letters[i].textContent;
    let new_innerHTML = '';
    for (let j = 0; j < text.length; j++) {
        if (text[j] == ' ') {
            new_innerHTML += '<span class="letter">&nbsp;</span>';
        } else {
            new_innerHTML += '<span class="letter">' + text[j] + '</span>';
        }
    }
    letters[i].innerHTML = new_innerHTML;
}
let letters1SelectorString = '.curious-text #cls-1';
let letters2SelectorString = '.curious-text #cls-2';
let letters3SelectorString = '.curious-text #cls-3';
let letters4SelectorString = '.curious-text #cls-4';
let letters5SelectorString = '.curious-text #cls-5';
let letter1SelectorString = letters1SelectorString + ' .letter';
let letter2SelectorString = letters2SelectorString + ' .letter';
let letter3SelectorString = letters3SelectorString + ' .letter';
let letter4SelectorString = letters4SelectorString + ' .letter';
let letter5SelectorString = letters5SelectorString + ' .letter';

anime.timeline({
    loop: true
})
.add({
    targets: lineSelectorString,
    translateX: [0, document.querySelector(letters1SelectorString).getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter1SelectorString,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i+1),
}).add({
    targets: lineSelectorString,
    translateX: [document.querySelector(letters1SelectorString).getBoundingClientRect().width + 10, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter1SelectorString,
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=875",
    delay: (el, i) => {
        let len = document.querySelectorAll(letter1SelectorString).length;
        return 34 * (len - i)
    }
})
.add({
    targets: lineSelectorString,
    translateX: [0, document.querySelector(letters2SelectorString).getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter2SelectorString,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i+1),
}).add({
    targets: lineSelectorString,
    translateX: [document.querySelector(letters2SelectorString).getBoundingClientRect().width + 10, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter2SelectorString,
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=875",
    delay: (el, i) => {
        let len = document.querySelectorAll(letter2SelectorString).length;
        return 34 * (len - i)
    }
})
.add({
    targets: lineSelectorString,
    translateX: [0, document.querySelector(letters3SelectorString).getBoundingClientRect().width + 20],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter3SelectorString,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i+1),
}).add({
    targets: lineSelectorString,
    translateX: [document.querySelector(letters3SelectorString).getBoundingClientRect().width + 20, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter3SelectorString,
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=875",
    delay: (el, i) => {
        let len = document.querySelectorAll(letter3SelectorString).length;
        return 34 * (len - i)
    }
})
.add({
    targets: lineSelectorString,
    translateX: [0, document.querySelector(letters4SelectorString).getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter4SelectorString,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i+1),
}).add({
    targets: lineSelectorString,
    translateX: [document.querySelector(letters4SelectorString).getBoundingClientRect().width + 10, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter4SelectorString,
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=875",
    delay: (el, i) => {
        let len = document.querySelectorAll(letter4SelectorString).length;
        return 34 * (len - i)
    }
})
.add({
    targets: lineSelectorString,
    translateX: [0, document.querySelector(letters5SelectorString).getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter5SelectorString,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i+1),
}).add({
    targets: lineSelectorString,
    translateX: [document.querySelector(letters5SelectorString).getBoundingClientRect().width + 10, 0],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: letter5SelectorString,
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=875",
    delay: (el, i) => {
        let len = document.querySelectorAll(letter5SelectorString).length;
        return 34 * (len - i)
    }
})


// contact-card section

let nftw = new Typewriter(
    document.querySelector('#neofetch-span'), {
        delay: 75
    }
).typeString('neofetch')
.pauseFor(1000)
let flag = false;
let neofetchcontainer = document.querySelector('.neofetch-container');

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

if (elementIsVisibleInViewport(neofetchcontainer, true)) {
    flag = true;
    nftw.start()
    setTimeout(() => {
        neofetchcontainer.style.opacity = 1;
    }, 1000)
}

window.addEventListener('scroll', () => {
    if (elementIsVisibleInViewport(neofetchcontainer, true) && !flag) {
        flag = true;
        nftw.start()
        setTimeout(() => {
            neofetchcontainer.style.opacity = 1;
        }, 1000)
    }
})