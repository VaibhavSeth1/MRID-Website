document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle Mobile Menu on Hamburger Click
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active"); // Open or Close Menu
    });

    // Close Menu When Clicking Outside the Menu
    document.addEventListener("click", function (e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});
