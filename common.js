function getInputFieldValueById(id) {
  const InputValue = document.getElementById(id).value;
  const InputValueNumber = parseFloat(InputValue);
  return InputValueNumber;
}

function showSectionById(id) {
  document.getElementById("section-1").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
