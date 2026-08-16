// =========================
// FELIALEJ WEB HUB
// script.js completo
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorGlow = document.querySelector(".cursor-glow");
  const interactiveElements = document.querySelectorAll("a, button");

  if (cursor && cursorGlow) {
    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      cursorGlow.style.left = `${clientX}px`;
      cursorGlow.style.top = `${clientY}px`;
    });

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hovered");
        cursorGlow.classList.add("hovered");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
        cursorGlow.classList.remove("hovered");
      });
    });
  }
});