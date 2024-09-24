function getInputFieldValueById(id) {
  const InputValue = document.getElementById(id).value;
  const InputValueNumber = parseFloat(InputValue);
  return InputValueNumber;
}

function showSectionById(id1, id2) {
  document.getElementById(id1).classList.add("hidden");
  document.getElementById(id2).classList.remove("hidden");
}
