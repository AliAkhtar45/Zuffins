const chips = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const selected = chip.dataset.filter;

    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    menuCards.forEach((card) => {
      const match = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !match);
    });
  });
});
