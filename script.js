document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null, 
        threshold: 0.12, // Se activa de forma fluida cuando se asoma el modelo
        rootMargin: "0px 0px -60px 0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
