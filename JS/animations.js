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