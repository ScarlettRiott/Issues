// Toggle hidden content
function toggleContent() {
  const content = document.getElementById("hiddenContent");
  content.style.display =
    content.style.display === "none" || content.style.display === ""
      ? "block"
      : "none";
}

// Toggle like button
function toggleLike() {
  const likeBtn = document.getElementById("likeBtn");
  likeBtn.classList.toggle("liked");
  likeBtn.textContent = likeBtn.classList.contains("liked")
    ? "❤️ Liked"
    : "❤️ Like";
}

// Counter increment
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById("counter").textContent = count;
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
