const faq= document.querySelectorAll(".faq__question");

faq.forEach((item) => {
item.addEventListener("click", () => {
item.classList.toggle("open");
});
});