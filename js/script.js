document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navigation");
    const logo = document.querySelector(".logo");
    const abrir = document.querySelector(".abrir");
    const cerrar = document.querySelector(".cerrar");
    const list = document.querySelector(".list-nav");

    const logotipoNormal = "/imgs/logotipo_web.svg";
    const logotipoScroll = "/imgs/iconweb.svg";

    // Cambia el estilo del header al hacer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(56, 142, 60, 0.95)";
            nav.style.height = "50px";
            logo.src = logotipoScroll;
            logo.style.height = "60px";
        } else {
            nav.style.backgroundColor = "rgba(76, 175, 80, 0.9)";
            nav.style.height = "60px";
            logo.src = logotipoNormal;
            logo.style.height = "80px";
        }
    });

    // Funcionalidad para abrir y cerrar el menú
    abrir.addEventListener("click", function () {
        abrir.classList.remove("visible");
        cerrar.classList.add("visible");
        list.classList.add("visible");
    });

    cerrar.addEventListener("click", function () {
        abrir.classList.add("visible");
        cerrar.classList.remove("visible");
        list.classList.remove("visible");
    });

    // Precarga de imágenes
    const images = [
        "./imgs/8.jpg",
        "./imgs/9.jpg",
        "./imgs/10.jpg",
        "./imgs/11.jpg",
        "./imgs/12.jpg",
        "./imgs/13.jpg",
        "./imgs/14.jpg",
        "./imgs/15.jpg",
        "./imgs/16.jpg"
    ];

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    // Selecciona el botón y el menú
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Alternar visibilidad del menú
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });

    // Cambia el fondo del menú al hacer scroll
    const navigation = document.querySelector('.navigation');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });

    // Inicialización de Swiper.js
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000, // Cambia automáticamente cada 3 segundos
        hoverpause: true, // Pausa al pasar el cursor
        animationDuration: 800, // Duración de la animación
    }).mount();
});