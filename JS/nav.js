// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById("navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });

}

// ===============================
// MOBILE MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mob-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// ===============================
// CLOSE MENU ON OUTSIDE CLICK
// ===============================
document.addEventListener("click", (e) => {

  if (
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    mobileMenu.classList.remove("open");
  }

});

// ===============================
// CLOSE MENU ON ESC KEY
// ===============================
document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    mobileMenu.classList.remove("open");
  }

});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (
      window.scrollY >= top &&
      window.scrollY < top + height
    ) {
      current = section.id;
    }

  });

  navLinks.forEach(link => {

    link.style.color = "";

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--purple)";
    }

  });

});