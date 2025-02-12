document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Mensajes para las cartas
    const messages = [
        "Eres parte de mi felicidad💖",
        "Sos todo lo que necesito a mi lado💘​",
        "Tu sonrisa ilumina mis dias grises ✨",
        "Mi amor hacia vos no tiene limite 💫",
        "Y finalmente... ¿Quieres ser mi Novia? 💌"
    ];

    // Asignar eventos a cada carta
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Si la carta ya está abierta, no hacer nada
            if (card.classList.contains('flip')) return;

            // Cargar el mensaje en la parte trasera antes de voltear la carta
            const back = card.querySelector('.back');
            back.textContent = messages[index];

            // Voltear la carta
            card.classList.add('flip');
            
            // Mostrar la animación en la parte trasera del mensaje
            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("¡Feliz día de San Valentín! ❤️");
                }, 800);
            }
        });
    });

    // Crear la lluvia de corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;  // Duración aleatoria entre 2 y 4 segundos
        document.querySelector('.heart-rain').appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Generar corazones a intervalos aleatorios
    setInterval(createHeart, 300);
});
