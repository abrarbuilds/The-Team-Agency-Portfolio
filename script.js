// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById("navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      navbar.style.background = "rgba(13,13,15,.96)";
    } else {
      navbar.style.background = "";
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
  // DARK / LIGHT MODE
  // ===============================
  const themeBtn = document.getElementById("themeBtn");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeBtn.textContent = savedTheme === "light" ? "🌙" : "☀";
  }

  themeBtn.addEventListener("click", () => {

    let currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    }

  });

  // ===============================
  // SCROLL REVEAL ANIMATION
  // ===============================
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  }, {
    threshold: 0.2
  });

  reveals.forEach(item => revealObserver.observe(item));
