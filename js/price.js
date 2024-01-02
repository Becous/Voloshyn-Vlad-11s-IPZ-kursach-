const checkbox = document.getElementById("switch"); // Ensure correct quotes for ID

checkbox.addEventListener("click", () => {
  const allBasicElements = document.querySelectorAll("#basic");
  const allProfessionalElements = document.querySelectorAll("#professional");
  const allMasterElements = document.querySelectorAll("#master");

  allBasicElements.forEach((element) => {
    element.textContent = element.textContent === "$8" ? "$86.4" : "$8";
  });

  allMasterElements.forEach((element) => {
    element.textContent = element.textContent === "$20" ? "$216" : "$20";
  });

  allProfessionalElements.forEach((element) => {
    element.textContent = element.textContent === "$48" ? "$518" : "$48";
  });
});
x;
