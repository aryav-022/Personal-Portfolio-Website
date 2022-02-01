// for Revealers
const nav = document.querySelectorAll("header nav ul li a");
const revealpoint = 200 // reveal point from top of the window

window.addEventListener('scroll', reveal);
reveal() // Calling function first time to check if any element comes under the category

function reveal() {
    let revealers = document.querySelectorAll('.revealer');
    revealers.forEach(revealer => {
        let windowheight = window.innerHeight; // Gives length of Browser's workable area
        let revealertop = revealer.getBoundingClientRect().top; // Gives the length between top of browser's workable area and top of element (including border)
        let revealerbottom = revealer.getBoundingClientRect().bottom; // Gives the length between top of browser's workable area and top of element (including border)
        if (revealertop < windowheight - revealpoint && revealerbottom > windowheight - revealpoint) {
            // True when element is scrolled to the set reveal point i.e. 150
            revealer.classList.add('active');
            let activeTab = revealer.getAttribute("data-cls");
            let currentTab = 0;
            nav.forEach(tab => {
                tab.classList.remove("active");
                if (tab.classList.contains(activeTab)) currentTab = tab;
            })
            if (!(currentTab.classList.contains("active"))) currentTab.classList.add("active");
        }
    })
}

// for Header
window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    if (scroll == 0) {
        document.querySelector("header").classList.remove("active");
    } else {
        document.querySelector("header").classList.add("active");
    }
});

// for Typing
const typedText = document.querySelector(".typed-text");
const carot = document.querySelector(".carot");
const professionArray = ["Web Developer", "Programmer", "Freelancer", "Python", "C++", "MySQL", "HTML", "CSS", "Javascript"];
let professionIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < professionArray[professionIndex].length) {
        if (!carot.classList.contains("typing")) carot.classList.add("typing");
        typedText.textContent += professionArray[professionIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        carot.classList.remove("typing");
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!carot.classList.contains("typing")) carot.classList.add("typing");
        typedText.textContent = professionArray[professionIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        carot.classList.remove("typing");
        professionIndex++;
        if (professionIndex >= professionArray.length) professionIndex = 0;
        setTimeout(type, 1300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (professionArray.length) setTimeout(type, 2250);
});


// for Skills Meters
const meters = document.querySelectorAll(".percent");
// Return a nodelist of all element with class percent

window.addEventListener("scroll", () => {
    meters.forEach(meter => {
        if (window.innerHeight > meter.getBoundingClientRect().bottom && !(meter.classList.contains("active"))) {
            meter.classList.add("active");
            let n = 0;
            const percent = meter.getAttribute("data-percent");
            const interval = setInterval(() => {
                n = Math.min(n + 1, percent);
                meter.querySelector(".number h2").textContent = n;
                if (n >= percent) clearTimeout(interval);
            }, 10)
        }
    })
})


// for Hamburgur Menu
const toggle = document.querySelector(".toggle");
const followMouse = document.querySelector(".follow-mouse");
const dropdown = document.querySelector(".dropdown .container");

toggle.addEventListener("click", (event) => {
    toggle.classList.toggle("cross");
    followMouse.style.top = `${event.clientY - 4}px`;
    followMouse.style.left = `${event.clientX - 4}px`;
    followMouse.classList.add("active");
    dropdown.classList.toggle("active");
});

followMouse.addEventListener("transitionend", () => {
    followMouse.classList.remove("active");
});
