// ====== Countdown Timer ======
const countdownDate = new Date('2025-12-25T00:00:00').getTime();

const timerDays = document.getElementById('days');
const timerHours = document.getElementById('hours');
const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        timerDays.textContent = '00';
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDays.textContent = days.toString().padStart(2, '0');
    timerHours.textContent = hours.toString().padStart(2, '0');
    timerMinutes.textContent = minutes.toString().padStart(2, '0');
    timerSeconds.textContent = seconds.toString().padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// ====== Dark / Light Mode Toggle ======
const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});


// ====== Cards Fade-In Animation ======
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});


// ====== Registration Form Handler ======
const registrationForm = document.getElementById('registration-form');
const successMessage = document.getElementById('registration-success');
const magicAudio = document.getElementById('magic-sound');

registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = registrationForm.elements['name'].value.trim();
    const email = registrationForm.elements['email'].value.trim();

    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    successMessage.textContent = `✨ Thank you for registering, ${name}! We'll keep you updated. ✨`;
    registrationForm.reset();
    magicAudio.play();
});


// ====== Sparkling Particles ======
const sparkleContainer = document.getElementById('sparkle-container');
setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
}, 150);


// ====== Flickering Heading Effect ======
const flickerEls = document.querySelectorAll('.flicker');
setInterval(() => {
    flickerEls.forEach(el => {
        el.style.opacity = Math.random() > 0.9 ? 0.6 : 1;
    });
}, 200);


// ====== Flying Elements on Hover ======
const flyingEls = document.querySelectorAll('.flying');
flyingEls.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.classList.add('fly');
        setTimeout(() => el.classList.remove('fly'), 1500);
    });
});


// ====== Magical Hover Effect for Font ======
const magicalEls = document.querySelectorAll('.magical-hover');
magicalEls.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.textShadow = '0 0 8px #fff, 0 0 12px #0ff, 0 0 16px #0ff';
    });
    el.addEventListener('mouseout', () => {
        el.style.textShadow = '';
    });
});


// ====== Custom Magical Cursor ======
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
