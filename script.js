// const menuBtn = document.querySelector(".menu-btn");
// const nav = document.querySelector(".nav");

// menuBtn.addEventListener("click", () => {
//   nav.classList.toggle("show");
//   menuBtn.setAttribute("aria-expanded", nav.classList.contains("show"));
// });

// nav.addEventListener("click", (event) => {
//   if (event.target.tagName === "A") {
//     nav.classList.remove("show");
//     menuBtn.setAttribute("aria-expanded", "false");
//   }
// });

// document.querySelectorAll(".question button").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const card = btn.parentElement;
//     const isOpen = card.classList.contains("open");

//     document.querySelectorAll(".question").forEach((item) => {
//       item.classList.remove("open");
//       item.querySelector("span").innerHTML = "&or;";
//     });

//     if (!isOpen) {
//       card.classList.add("open");
//       btn.querySelector("span").innerHTML = "&and;";
//     }
//   });
// });

// const reviews = document.querySelectorAll(".review");
// const prev = document.querySelector("[data-prev]");
// const next = document.querySelector("[data-next]");
// let reviewIndex = 0;

// function showReview(number) {
//   reviewIndex = (number + reviews.length) % reviews.length;
//   reviews.forEach((review, index) => {
//     review.classList.toggle("active", index === reviewIndex);
//   });
// }

// prev.addEventListener("click", () => showReview(reviewIndex - 1));
// next.addEventListener("click", () => showReview(reviewIndex + 1));

// const revealItems = document.querySelectorAll(
//   ".hero-text, .hero-img, .skill, .project, .review, .cta-box, .faq-text, .questions, .footer-top"
// );

// if ("IntersectionObserver" in window) {
//   const revealObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("is-visible");
//           revealObserver.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.15 }
//   );

//   revealItems.forEach((item) => {
//     item.classList.add("reveal");
//     revealObserver.observe(item);
//   });
// } else {
//   revealItems.forEach((item) => item.classList.add("is-visible"));
// }
