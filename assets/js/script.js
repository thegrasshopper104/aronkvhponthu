console.log("script.js loaded");
import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
console.log("Motion imported successfully");

const hoverupelem = document.querySelectorAll(".hoverup, .project-card");
hoverupelem.forEach((elem) => {
    elem.style.position = "relative";
    elem.addEventListener("mouseenter", () => {
        animate(elem, { y: -5 }, { duration: 0.05 });
    });

    elem.addEventListener("mouseleave", () => {
        animate(elem, { y: 0 }, { duration: 0.1 });
    });
});
