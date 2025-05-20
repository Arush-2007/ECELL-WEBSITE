// Countdown Timer
const launchDate = new Date("June 30, 2025 09:00:00").getTime();

const updateCountdown = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeLeft = launchDate - currentTime;

    if (timeLeft < 0) {
        clearInterval(updateCountdown);
        document.getElementById("timer").innerHTML = "<div>Event Started!</div>";
        return;
    }

    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
}, 1000);

// Registration Form Handler
const regForm = document.getElementById("registration-form");
const regMessage = document.getElementById("registration-success");

regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    regMessage.textContent = "✅ Thank you for registering!";
    regForm.reset();

    // Optional: Clear message after 5 seconds
    setTimeout(() => {
        regMessage.textContent = "";
    }, 5000);
});

// Toggle Light/Dark Mode
const modeSwitch = document.getElementById("toggle-mode");

modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
