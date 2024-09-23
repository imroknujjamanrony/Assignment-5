let sum = 0;
document
  .getElementById("donate-now-btn")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-1");
    const accountBalance = document.getElementById("card-balance-1").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    const UpdateBalance1 = accountBalanceNumber + donateMoney;
    console.log(UpdateBalance1);
    document.getElementById("card-balance-1").innerText = UpdateBalance1;
  });
