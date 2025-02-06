//Abrir tarjeta
var backgroundMusic = document.getElementById('backgroundMusic');
var musicIcon = document.getElementById('musicIcon');

function openContent() {
    // Agregar la clase para la animación
    document.getElementById('welcomeContainer').classList.add('zoom-out');
    document.body.classList.remove('no-scroll');

     // Reproducir música
     backgroundMusic.play();
     musicIcon.src = 'img/pause.png'; 
     musicIcon.classList.add('blinking'); // Agregar la animación de titileo

    // Esperar a que termine la animación antes de ocultar el contenedor
    setTimeout(function() {
        document.getElementById('welcomeContainer').style.display = 'none';
    }, 500); // Debe coincidir con la duración de la animación en CSS
}
// Configuración de la cuenta regresiva
var countdownDate = new Date("Aug 09, 2025 00:00:00").getTime();
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡Evento Comenzado!";
    }
}, 1000);

// Controlar la reproducción/pausa de la música
document.getElementById('toggleMusic').addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.src = 'img/pause.png'; // Cambia a la imagen de pausa
        musicIcon.classList.add('blinking'); // Agregar la animación de titileo
        
    } else {
        backgroundMusic.pause();
        musicIcon.src = 'img/play.png'; // Cambia a la imagen de reproducción
        musicIcon.classList.remove('blinking'); // Quitar la animación de titileo
    }
});

function openModal(src) {
    document.getElementById('expandedImage').src = src;
    $('#imageModal').modal('show');
}