const helpInput = document.getElementById("help-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  const userInput = helpInput.value;
  console.log(userInput);
});