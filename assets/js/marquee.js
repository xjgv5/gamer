// Ejecuta el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Función para animar un efecto "marquee" en un contenedor dado
    const createMarqueeEffect = (containerSelector, speed) => {
        
        // Selecciona el contenedor de la animación y su lista de elementos
        const container = document.querySelector(containerSelector);
        const list = container.children[0];

        // Variable que controla el movimiento en píxeles
        let position = 0;

        // Función de animación ejecutada en intervalos para mover la lista
        const animate = () => {
            list.style.marginLeft = `-${position}px`; // Desplaza la lista hacia la izquierda

            // Reinicia la posición cuando llega al final de la lista
            if (position > list.clientWidth) {
                position = 0;
            }

            position += speed; // Incrementa la posición según la velocidad
        };

        // Llama a la función de animación a intervalos regulares
        setInterval(animate, 0);
    };

    // Inicia el efecto marquee en el contenedor con la clase '.marquee__container' y velocidad de 0.2
    createMarqueeEffect(".marquee__container", 0.2);
});
