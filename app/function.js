let myBalance = document.getElementById("my-balance").innerText;
//added event listener
document
  .getElementById("donate-now-btn")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-1");
    const accountBalance = document.getElementById("card-balance-1").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    if (
      !isNaN(donateMoney) &&
      donateMoney <= accountBalanceNumber &&
      donateMoney > 0
    ) {
      const UpdateBalance1 = accountBalanceNumber + donateMoney;
      document.getElementById("card-balance-1").innerText = UpdateBalance1;

      const updatedMyBalance = parseFloat(myBalance);
      const newBalance = updatedMyBalance - donateMoney;
      document.getElementById("my-balance").innerText = newBalance;
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Please enter a valid donation amount within your balance.");
    }
  });
