document.addEventListener("DOMContentLoaded", function() {
  const userDropdown = document.querySelector(".user-dropdown");
  const dropdownMenu = userDropdown.querySelector(".dropdown-menu");

  userDropdown.addEventListener("click", function(e) {
    e.stopPropagation(); // dropdown ke andar click prevent
    dropdownMenu.classList.toggle("show"); // toggle dropdown
  });

  // Close dropdown only if clicked outside
  document.addEventListener("click", function(e) {
    if (!userDropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});
