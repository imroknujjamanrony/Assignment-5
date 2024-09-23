let myBalance = document.getElementById("my-balance").innerText;
//added event listener
document
  .getElementById("donate-now-btn")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-1");
    const accountBalance = document.getElementById("card-balance-1").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    if (
      isNaN(donateMoney) ||
      donateMoney <= 0 ||
      donateMoney > accountBalanceNumber
    ) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber + donateMoney;
    document.getElementById("card-balance-1").innerText = UpdateBalance1;

    const updatedMyBalance = parseFloat(myBalance);
    const newBalance = updatedMyBalance - donateMoney;
    document.getElementById("my-balance").innerText = newBalance;

    document.getElementById("my_modal_5").showModal();

    //

    const cardTitle1 = document.getElementById("card-title-1").innerText;
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "bg-white p-5 rounded-lg border-2 border-gray-400 mb-4 shadow-lg mx-10";
    historyDiv.innerHTML = `
    
    <p class='text-lg text-gray-700'> <span> ${donateMoney} Taka is Donated For ${cardTitle1} </span>
    
    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
  });

//for card 2

document
  .getElementById("donate-now-btn-2")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-2");
    const accountBalance = document.getElementById("card-balance-2").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    if (
      isNaN(donateMoney) ||
      donateMoney <= 0 ||
      donateMoney > accountBalanceNumber
    ) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber + donateMoney;
    document.getElementById("card-balance-2").innerText = UpdateBalance1;

    const updatedMyBalance = parseFloat(myBalance);
    const newBalance = updatedMyBalance - donateMoney;
    document.getElementById("my-balance").innerText = newBalance;

    document.getElementById("my_modal_5").showModal();

    //

    const cardTitle2 = document.getElementById("card-title-2").innerText;
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "bg-white p-5 rounded-lg border-2 border-gray-400 mb-4 shadow-lg mx-10";
    historyDiv.innerHTML = `
    
    <p class='text-lg text-gray-700'> <span> ${donateMoney} Taka is Donated For ${cardTitle2} </span>
    
    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
  });

//card-3

document
  .getElementById("donate-now-btn-3")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-3");
    const accountBalance = document.getElementById("card-balance-3").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);

    if (
      isNaN(donateMoney) ||
      donateMoney <= 0 ||
      donateMoney > accountBalanceNumber
    ) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber + donateMoney;
    document.getElementById("card-balance-3").innerText = UpdateBalance1;
    const updatedMyBalance = parseFloat(myBalance);
    const newBalance = updatedMyBalance - donateMoney;
    document.getElementById("my-balance").innerText = newBalance;

    document.getElementById("my_modal_5").showModal();
    //
    const cardTitle3 = document.getElementById("card-title-3").innerText;
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "bg-white p-5 rounded-lg border-2 border-gray-400 mb-4 shadow-lg mx-10";
    historyDiv.innerHTML = `
    
    <p class='text-lg text-gray-700'> <span> ${donateMoney} Taka is Donated For ${cardTitle3} </span>
    
    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
  });

// history

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("history-section");
});

//donate btn

document.getElementById("donate-btn").addEventListener("click", function () {
  showSectionById("section-1");
});
