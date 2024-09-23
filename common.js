function getInputFieldValueById(id) {
  const InputValue = document.getElementById(id).value;
  const InputValueNumber = parseFloat(InputValue);
  return InputValueNumber;
}
