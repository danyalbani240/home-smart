import "./style.css";
const menuButton = document.querySelector("#menu");
const menubar = document.querySelector('[role="menubar"]');

menuButton.addEventListener("click", () => {
    const isExpanded = JSON.parse(menuButton.getAttribute("aria-expanded"));
    menuButton.setAttribute("aria-expanded", !isExpanded);
    menubar.classList.toggle("hidden");
    menubar.classList.toggle("flex");
});
