// Get the banner element
const banner = document.getElementById('limited-time-offer-banner');

// Get the close button element
const closeButton = document.getElementById('close-banner-button');

// Get the countdown timer element
const countdownTimer = document.getElementById('countdown-timer');

// Set the countdown time in seconds (e.g. 1 hour = 3600 seconds)
const countdownTime = 3600;

// Function to update the countdown timer
function updateCountdown() {
  const remainingTime = countdownTime - Math.floor((Date.now() - startTime) / 1000);
  if (remainingTime <= 0) {
    // Reset the countdown timer when it reaches zero
    clearInterval(intervalId);
    startCountdown();
  } else {
    // Update the countdown timer with the remaining time
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    countdownTimer.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

// Function to start the countdown timer
function startCountdown() {
  startTime = Date.now();
  intervalId = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Add an event listener to the close button to hide the banner
closeButton.addEventListener('click', () => {
  banner.style.display = 'none';
});

// Show the banner and start the countdown timer
banner.style.display = 'block';
let startTime;
let intervalId;
startCountdown();
