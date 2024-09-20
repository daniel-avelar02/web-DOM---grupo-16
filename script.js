document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("toggle-theme");
    const body = document.body;

    // Verifica si ya hay un tema guardado en localStorage
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeButton.addEventListener("click", function () {
        // Cambia entre los temas claro y oscuro
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "La motivación es lo que te pone en marcha. El hábito es lo que hace que sigas.",
        "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "La disciplina es el puente entre metas y logros."
    ];

    const quoteText = document.getElementById("quote-text");
    const quoteButton = document.getElementById("generate-quote");

    quoteButton.addEventListener("click", function () {
        // Generar un índice aleatorio
        const randomIndex = Math.floor(Math.random() * quotes.length);
        // Mostrar la cita correspondiente
        quoteText.textContent = quotes[randomIndex];
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById("table-of-contents");
    
    // Array de objetos con id y texto de las secciones
    const sections = [
        { id: "maestrias-semi", text: "Maestrías semipresenciales" },
        { id: "maestrias-virtual", text: "Maestrías virtuales" },
        { id: "postgrados", text: "Postgrados" },
        { id: "cursos", text: "Cursos especializados" }
    ];

    // Limpiar la lista de items existentes para recrear con enlaces
    tocList.innerHTML = '<i class="px-0 bi bi-sliders"></i>';

    // Crear elementos <li> con enlaces dinámicos
    sections.forEach(section => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        
        // Establecer el enlace como ancla al id de la sección
        link.href = `#${section.id}`;
        link.textContent = section.text;
        link.style.textDecoration = "none"; // Esto asegura que el texto no tenga subrayado
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
});

// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Muestra el botón
    } else {
        button.style.display = "none"; // Oculta el botón
    }
};

// Funcionalidad para regresar al menú de contenido
document.getElementById("back-to-top").addEventListener("click", function() {
    const toc = document.getElementById("carouselExampleSlidesOnly");
    toc.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave hacia el menú
});
