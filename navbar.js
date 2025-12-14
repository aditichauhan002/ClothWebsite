document.addEventListener("DOMContentLoaded", function() {
    const userDropdown = document.querySelector(".user-dropdown");
    const dropdownMenu = userDropdown.querySelector(".dropdown-menu");

    userDropdown.addEventListener("click", function(e) {
      e.stopPropagation(); // prevent closing immediately
      userDropdown.classList.toggle("active");
    });

    document.addEventListener("click", function() {
      userDropdown.classList.remove("active");
    });
  });