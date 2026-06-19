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

   // ===============================
  // SKILL BAR ANIMATION
  // ===============================
  const skillBars = document.querySelectorAll(".skill-fill");

  const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const width = entry.target.dataset.width;

        entry.target.style.width = width + "%";

        skillObserver.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===============================
  // COUNTER ANIMATION
  // ===============================
  const counters = document.querySelectorAll(".stat-number");

  const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = +counter.dataset.target;

      let current = 0;

      const increment = target / 80;

      function updateCounter() {

        current += increment;

        if (current < target) {

          counter.textContent = Math.ceil(current);

          requestAnimationFrame(updateCounter);

        } else {

          counter.textContent = target;

        }

      }

      updateCounter();

      counterObserver.unobserve(counter);

    });

  }, {
    threshold: 0.5
  });

  counters.forEach(counter => counterObserver.observe(counter));

  // ===============================
  // PROJECT FILTER
  // ===============================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      const filter = button.dataset.filter;

      projectCards.forEach(card => {

        if (
                filter === "all" ||
                card.dataset.cat === filter
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  });

  // ===============================
  // CONTACT FORM VALIDATION
  // ===============================
  const submitBtn = document.getElementById("submitBtn");
  const contactForm = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const errorBox = document.getElementById("form-error");

  submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const subject = document.getElementById("fsubject").value.trim();
    const message = document.getElementById("fmessage").value.trim();

    errorBox.style.display = "none";

    if (!name || !email || !subject || !message) {

      errorBox.style.display = "block";
      errorBox.innerText = "Please fill in all fields.";

      return;
    }

    const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      errorBox.style.display = "block";
      errorBox.innerText = "Please enter a valid email.";

      return;
    }

    contactForm.style.display = "none";
    success.style.display = "block";

  });

  // ===============================
  // BACK TO TOP BUTTON
  // ===============================
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      scrollBtn.classList.add("visible");

    } else {

      scrollBtn.classList.remove("visible");

    }

  });

  scrollBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

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

  // ===============================
  // SMOOTH BUTTON RIPPLE EFFECT
  // ===============================
  document.querySelectorAll(".btn,.btn-submit").forEach(button => {

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });

  });

  // ===============================
// PAGE LOAD EFFECT
// ===============================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});