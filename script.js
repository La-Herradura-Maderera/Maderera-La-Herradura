document.addEventListener("DOMContentLoaded", function () {
    // Lógica del Intersection Observer para hacer aparecer secciones fluidamente al bajar
    const sections = document.querySelectorAll(".fade-in-section");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
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

// FUNCIÓN DINÁMICA: Abre el bloque de detalles justo debajo de la tarjeta seleccionada
function selectModel(modelSize) {
    // 1. Oculta todos los paneles abiertos en este momento
    const allPanels = document.querySelectorAll('.panel-detail-disney');
    allPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    // 2. Apunta al bloque específico cliqueado
    const targetPanel = document.getElementById('panel-' + modelSize);
    
    if (targetPanel) {
        // 3. Modifica el estado a visible
        targetPanel.style.display = 'block';
        
        // 4. Centra suavemente la pantalla del usuario sobre la información desplegada
        setTimeout(() => {
            targetPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 120);
    }
}

// Función auxiliar para cerrar las pestañas informativas manualmente
function closeAllPanels() {
    const allPanels = document.querySelectorAll('.panel-detail-disney');
    allPanels.forEach(panel => {
        panel.style.display = 'none';
    });
}
