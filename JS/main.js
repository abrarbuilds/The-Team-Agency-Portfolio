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