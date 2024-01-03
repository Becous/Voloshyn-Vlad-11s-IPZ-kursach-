function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  const offset = element.getBoundingClientRect().top - window.innerHeight / 2 + 450;
  window.scrollBy({ top: offset, behavior: "smooth" });
}
