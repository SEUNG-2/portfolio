const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.getElementById("formNote");
  const name = event.currentTarget.elements.name.value.trim();
  note.textContent = `${name}님, 메시지를 확인했어요. 곧 답장드릴게요!`;
  event.currentTarget.reset();
});
