function toggleText(index) {
  const texts = document.querySelectorAll(".hidden-text");
  texts[index].style.display = texts[index].style.display === "black" ? "none" : "block";
}
