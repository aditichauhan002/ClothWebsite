const testimonials = [
    {
        text: "Dignissim massa . Id nullam nisi,cursus dictumst egestas. Porttitor nibh magna dolor ultrices sit iaculis.",
        author: "By Shruti Chauhan"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipis.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "By Aditi Chauhan"
    },
    {
        text: "Suspendisse potenti. Mauris elementum nisi vel tellus fermentum, id pharetra justo facilisis.",
        author: "By Ravi Chauhan"
    }
];

let currentIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

function updateTestimonial() {
    testimonialText.textContent = testimonials[currentIndex].text;
    testimonialAuthor.textContent = testimonials[currentIndex].author;
}