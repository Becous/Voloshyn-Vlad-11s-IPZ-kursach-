const checkbox = document.getElementById("switch");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$8" ? "$86.4" : "$8";
  professional.textContent = professional.textContent === "$20" ? "$216 " : "$20";
  master.textContent = master.textContent === "$48" ? "$518" : "$48";
});
