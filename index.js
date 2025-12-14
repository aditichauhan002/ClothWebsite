const filters = document.querySelectorAll(".section4 ul li");
  const products = document.querySelectorAll(".product-card1");
  const productSection = document.querySelector(".section5");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {

      // active tab
      filters.forEach(li => li.classList.remove("active"));
      filter.classList.add("active");

      const value = filter.dataset.filter;

      // fade before change
      productSection.classList.add("fade");

      setTimeout(() => {
        products.forEach(product => {
          if (value === "all" || product.dataset.category === value) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });

        // fade back
        productSection.classList.remove("fade");
      }, 250);
    });
  });



  const slides = document.querySelectorAll(".quote-slide");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });



  // ---------------------------------------------------------------

  fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // now add hover dropdown JS
    document.querySelectorAll('.custom-dropdown').forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (window.innerWidth >= 992) menu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (window.innerWidth >= 992) menu.classList.remove('show');
      });
    });
  });




  // ----------------------------------Footer--------------------------------------


    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });