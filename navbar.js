document.addEventListener("DOMContentLoaded", function() {
    const userDropdown = document.querySelector(".user-dropdown");
    const dropdownMenu = userDropdown.querySelector(".dropdown-menu");

    userDropdown.addEventListener("click", function(e) {
      e.stopPropagation(); // prevent closing immediately
      dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function() {
      dropdownMenu.style.display = "none";
    });
  });