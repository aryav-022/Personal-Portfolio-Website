const nav = document.querySelectorAll("header nav ul li a");
const revealpoint = 200 // reveal point from top of the window
window.addEventListener('scroll', reveal);
reveal() // Calling function first time to check if any element comes under the category

function reveal() {
    var revealers = document.querySelectorAll('.revealer');
    revealers.forEach(revealer => {
        let windowheight = window.innerHeight;
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
            currentTab.classList.add("active");
        }
    })
}

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    if (scroll == 0) {
        document.querySelector("header").classList.remove("active");
    } else {
        document.querySelector("header").classList.add("active");
    }
});

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


window.addEventListener("scroll", () => {
    const meter1 = document.querySelector(".html-bar .percent");
    const percent1 = parseInt(meter1.getAttribute("data-percent"));
    let n1 = 0;
    if (window.innerHeight > meter1.getBoundingClientRect().bottom) {
        if (!(meter1.classList.contains("active"))) interval1 = setInterval(() => {
            meter1.classList.add("active");
            n1 = Math.min(n1 + 1, percent1);
            meter1.querySelector(".number h2").textContent = n1;
            if (n1 >= percent1) clearTimeout(interval1);
        }, 10);
    }
})

window.addEventListener("scroll", () => {
    const meter2 = document.querySelector(".css-bar .percent");
    let percent2 = parseInt(meter2.getAttribute("data-percent"));
    let n2 = 0;
    if (window.innerHeight > meter2.getBoundingClientRect().bottom) {
        if (!(meter2.classList.contains("active"))) interval2 = setInterval(() => {
            meter2.classList.add("active");
            n2 = Math.min(n2 + 1, percent2);
            meter2.querySelector(".number h2").textContent = n2;
            if (n2 >= percent2) clearTimeout(interval2);
        }, 10);
    }
})

window.addEventListener("scroll", () => {
    const meter3 = document.querySelector(".js-bar .percent");
    let percent3 = parseInt(meter3.getAttribute("data-percent"));
    let n3 = 0;
    if (window.innerHeight > meter3.getBoundingClientRect().bottom) {
        if (!(meter3.classList.contains("active"))) interval3 = setInterval(() => {
            meter3.classList.add("active");
            n3 = Math.min(n3 + 1, percent3);
            meter3.querySelector(".number h2").textContent = n3;
            if (n3 >= percent3) clearTimeout(interval3);
        }, 10);
    }
})

window.addEventListener("scroll", () => {
    const meter4 = document.querySelector(".python-bar .percent");
    let percent4 = parseInt(meter4.getAttribute("data-percent"));
    let n4 = 0;
    if (window.innerHeight > meter4.getBoundingClientRect().bottom) {
        if (!(meter4.classList.contains("active"))) interval4 = setInterval(() => {
            meter4.classList.add("active");
            n4 = Math.min(n4 + 1, percent4);
            meter4.querySelector(".number h2").textContent = n4;
            if (n4 >= percent4) clearTimeout(interval4);
        }, 10);
    }
})

window.addEventListener("scroll", () => {
    const meter5 = document.querySelector(".cpp-bar .percent");
    const percent5 = parseInt(meter5.getAttribute("data-percent"));
    let n5 = 0;
    if (window.innerHeight > meter5.getBoundingClientRect().bottom) {
        if (!(meter5.classList.contains("active"))) interval5 = setInterval(() => {
            meter5.classList.add("active");
            n5 = Math.min(n5 + 1, percent5);
            meter5.querySelector(".number h2").textContent = n5;
            if (n5 >= percent5) clearTimeout(interval5);
        }, 10);
    }
})

window.addEventListener("scroll", () => {
    const meter6 = document.querySelector(".sql-bar .percent");
    let percent6 = parseInt(meter6.getAttribute("data-percent"));
    let n6 = 0;
    if (window.innerHeight > meter6.getBoundingClientRect().bottom) {
        if (!(meter6.classList.contains("active"))) interval6 = setInterval(() => {
            meter6.classList.add("active");
            n6 = Math.min(n6 + 1, percent6);
            meter6.querySelector(".number h2").textContent = n6;
            if (n6 >= percent6) clearTimeout(interval6);
        }, 10);
    }
})

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