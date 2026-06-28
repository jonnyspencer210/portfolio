// ===== Typing Animation =====
const roles = [
    "AI Researcher",
    "Software Developer",
    "Web Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeRole() {

    if (!typingText) return;

    if (charIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(typeRole, 500);

    }

}

document.addEventListener("DOMContentLoaded", typeRole);

// ===== Mobile Menu =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });
}
const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});