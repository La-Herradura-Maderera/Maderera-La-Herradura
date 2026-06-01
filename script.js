document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null, // Usa la pantalla actual como referencia
        threshold: 0.15, // Se activa cuando el 15% de la sección es visible
        rootMargin: "0px 0px -100px 0px" // Hace que el efecto se note justo antes de llegar
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                // Descomenta la línea de abajo si querés que desaparezcan otra vez al subir
                // entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
