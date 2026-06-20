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