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