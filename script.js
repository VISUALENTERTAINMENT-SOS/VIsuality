window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 300);
    });
});