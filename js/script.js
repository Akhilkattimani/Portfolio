// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Akhil Kattimani Portfolio");
});

// Typing Animation
const titles = [
    "Cloud Engineer",
    "Linux Administrator",
    "AWS Enthusiast",
    "CCNA Learner",
    "System Administrator"
];

let index = 0;
let charIndex = 0;
let deleting = false;

const heading = document.querySelector(".hero-left h2");

function typeEffect() {
    if (!heading) return;

    const current = titles[index];

    if (!deleting) {
        heading.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        heading.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            index = (index + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();

// Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";
    observer.observe(card);
});

// Active Navbar
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#00ff66";
    }
});

// Scroll to Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00ff66";
topBtn.style.color = "#000";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};