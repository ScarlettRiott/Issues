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
