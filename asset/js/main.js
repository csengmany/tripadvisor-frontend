const $ = document;
$.addEventListener("DOMContentLoaded", () => {
    console.log("Tripadvisor chargé");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY; // Axe Y
        const header = $.querySelector("header");
        if (scroll > 1) {
            header.classList.add("header-border");
        } else {
            header.classList.remove("header-border");
        }
    });
});
