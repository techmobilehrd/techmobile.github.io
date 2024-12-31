// Slider Script
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
    dots[i].classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-slide functionality
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Auto-slide every 5 seconds




// Typewriter Animation Function
function typewriterAnimation(elementId, text, delay = 100) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, delay);
      }
  }

  type();
}

// Apply Typewriter Effect
window.onload = function () {
  typewriterAnimation("front-text", "TECH MOBILE", 150); // Front text animation
  typewriterAnimation("back-text1", "+91-9557300217", 150); // Back text (1) animation
  typewriterAnimation("back-text2", "techmobilehrd@gmail.com", 150); // Back text (2) animation
};




// Typewriter Animation Function
function typewriterAnimation(elementId, text, delay = 100) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, delay);
      }
  }

  type();
}

// Update Digital Clock
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Display Calendar
function updateCalendar() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${day}, ${date} ${month} ${year}`;
  document.getElementById("date-display").innerText = dateString;
}

// Initialize Clock and Calendar
setInterval(updateClock, 1000);
window.onload = function () {
  updateClock();
  updateCalendar();
};






 // Digital Clock
    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      document.getElementById('clock').textContent = formattedTime;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Calendar
    const dateDisplay = document.getElementById('dateDisplay');
    const today = new Date().toLocaleDateString();
    dateDisplay.textContent = today;