
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const volumeControl = document.getElementById('volume-slider');

    // Inicializa el volumen al valor predeterminado del rango
    backgroundMusic.volume = volumeControl.value;

    volumeControl.addEventListener('input', function() {
        // Actualiza el volumen del audio al cambiar el valor del rango
        backgroundMusic.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa particles.js si está disponible
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', particlesConfig); // Cambia 'canvas' a 'particles-js'
    }
});




// js/Monsters.js
window.onload = function() {
    var canvas = document.getElementById('particles-canvas');
    if (canvas && canvas.getContext) {
        var context = canvas.getContext('2d');
        // Lógica adicional para el canvas...
    } else {
        console.error('No se pudo encontrar el lienzo o obtener el contexto.');
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const videos = [
        "videos/exorcist 1.mp4",
        "videos/exorcist 2.mp4", // Añade aquí los nombres de tus videos en el orden deseado
        "videos/exorcist 3.mp4",
        // Continúa agregando más videos si es necesario
    ];

    const video = document.getElementById("bg-video");
    let currentVideoIndex = 0;

    // Función para reproducir el siguiente video en el bucle
    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Avanza al siguiente video en el bucle
        video.src = videos[currentVideoIndex]; // Carga el siguiente video
        video.play(); // Reproduce el siguiente video
    }

    // Agrega un evento para detectar cuándo un video ha terminado
    video.addEventListener("ended", function () {
        playNextVideo(); // Llama a la función para reproducir el siguiente video
    });

    // Inicia la reproducción del primer video
    video.src = videos[currentVideoIndex];
    video.play();
});
// Obtener todas las casillas de verificación de roles
const roleCheckboxes = document.querySelectorAll('#roles-checkboxes input[type="checkbox"]');
const errorMessage = document.getElementById('roles-error');

// Función para limitar la selección de roles a 3
roleCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        var checkedCheckboxes = document.querySelectorAll('#roles-checkboxes input[type="checkbox"]:checked');
        
        // Si se seleccionan más de 3 casillas de verificación, mostrar el error
        if (checkedCheckboxes.length > 3) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
        
        // Desactivar las casillas de verificación restantes si ya se seleccionaron 3
        if (checkedCheckboxes.length >= 3) {
            roleCheckboxes.forEach(function(checkbox) {
                if (!checkbox.checked) {
                    checkbox.disabled = true;
                }
            });
        } else {
            // Habilitar todas las casillas de verificación si se deseleccionan algunas
            roleCheckboxes.forEach(function(checkbox) {
                checkbox.disabled = false;
            });
        }
    });
});




window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del canvas al tamaño de la ventana
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Función para generar una línea con una trayectoria curva
    function createLine() {
        const line = {
            x: -50, // Comienza desde fuera del canvas en el lado izquierdo
            y: Math.random() * canvas.height, // Posición vertical aleatoria
            speed: Math.random() * 2 + 1, // Velocidad de la línea
            curvature: Math.random() * 0.5 + 0.1, // Curvatura de la trayectoria
            color: '#d4af37', // Color de la línea
            thickness: Math.random() * 4 + 2 // Grosor de la línea
        };
        return line;
    }

    // Array para almacenar las líneas
    const lines = [];

    // Genera líneas iniciales
    for (let i = 0; i < 10; i++) {
        lines.push(createLine());
    }

    // Función para dibujar las líneas
    function drawLines() {
        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.strokeStyle = line.color;
            ctx.lineWidth = line.thickness;
            ctx.lineCap = 'round'; // Extremos redondeados
            // Calcula la curvatura de la línea
            const curvature = (canvas.height - line.y) * line.curvature;
            // Dibuja la curva
            ctx.quadraticCurveTo(canvas.width / 2, line.y - curvature, canvas.width + 50, canvas.height / 2);
            ctx.stroke();
        });
    }

    // Función para actualizar la posición de las líneas
    function updateLines() {
        lines.forEach(line => {
            line.x += line.speed;
            // Si la línea sale del canvas, se reinicia su posición
            if (line.x > canvas.width + 50) {
                line.x = -50;
            }
        });
    }

    // Función para animar las líneas
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLines();
        updateLines();
    }

    // Inicia la animación
    animate();

    // Actualiza el tamaño del canvas al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Event listener para el envío del formulario
    document.getElementById('form-postulacion').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        alert('¡Tu postulación ha sido enviada!');
    });
};
