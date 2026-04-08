document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(
    ".hero, .card, .cta, .section-title, .section-subtitle"
  );

  animatedSections.forEach((element) => {
    element.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedSections.forEach((element) => observer.observe(element));

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});