// Countdown Timer
// ====== Countdown Timer ======
const countdownDate = new Date('2025-12-25T00:00:00').getTime(); // Change your event date here

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
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
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
        }, index * 150); // stagger animation by 150ms per card
    });
});


// ====== Registration Form Handler ======
const registrationForm = document.getElementById('registration-form');
const successMessage = document.getElementById('registration-success');

registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = registrationForm.elements['name'].value.trim();
    const email = registrationForm.elements['email'].value.trim();

    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate successful registration
    successMessage.textContent = `Thank you for registering, ${name}! We'll keep you updated.`;
    registrationForm.reset();
});
