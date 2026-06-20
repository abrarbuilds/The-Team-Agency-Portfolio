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