document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu a");

  // Toggle Mobile Menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Close Menu When Clicking Outside
  document.addEventListener("click", function (e) {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });

  // Close Menu When Clicking a Link
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  // Intersection Observer for Scroll Animations
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stops observing after revealing
        }
      });
    },
    { threshold: 0.3 }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
