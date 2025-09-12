// let slideIndex = 1;
// let slideInterval;

// function showSlides(n) {
//     const slides = document.getElementsByClassName("carousel-slide");
//     const dots = document.getElementsByClassName("dot");

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active");
//     }

//     slides[slideIndex - 1].classList.add("active");
//     dots[slideIndex - 1].classList.add("active");
// }

// function currentSlide(n) {
//     clearInterval(slideInterval);
//     slideIndex = n;
//     showSlides(slideIndex);
//     autoSlide();
// }

// function nextSlide() {
//     slideIndex++;
//     showSlides(slideIndex);
// }

// function autoSlide() {
//     slideInterval = setInterval(nextSlide, 5000);
// }

// showSlides(slideIndex);
// autoSlide();