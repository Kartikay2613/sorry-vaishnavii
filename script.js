function nextSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Moving forgive button
const forgiveBtn = document.getElementById("forgiveBtn");
if (forgiveBtn) {
  forgiveBtn.addEventListener("mouseover", () => {
    forgiveBtn.style.position = "absolute";
    forgiveBtn.style.top = Math.random() * 70 + "%";
    forgiveBtn.style.left = Math.random() * 70 + "%";
  });
}

// Confetti effect + next
function showConfettiAndNext() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
  setTimeout(() => nextSection('video2'), 2000);
}

// Music toggle
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    musicBtn.textContent = "🔇 Mute Music";
  } else {
    music.muted = true;
    musicBtn.textContent = "🔊 Unmute Music";
  }
});

