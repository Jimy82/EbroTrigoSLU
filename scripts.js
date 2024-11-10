document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    let interval;

    const changeImage = (index = null) => {
        images[currentIndex].classList.remove('active');
        if (index !== null) {
            currentIndex = index;
        } else {
            currentIndex = (currentIndex + 1) % images.length;
        }
        images[currentIndex].classList.add('active');
    };

    const startCarousel = () => {
        interval = setInterval(() => {
            changeImage();
        }, 3000);
    };

    startCarousel();
});
