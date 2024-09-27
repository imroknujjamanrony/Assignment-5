document
  .getElementById("donate-now-btn")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-1");
    let myBalance = document.getElementById("my-balance").innerText;

    const accountBalance = document.getElementById("card-balance-1").innerText;
    const accountBalanceNumber1 = parseFloat(accountBalance);
    const myBalance1 = parseFloat(myBalance);

    if (isNaN(donateMoney) || donateMoney <= 0 || donateMoney > myBalance1) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber1 + donateMoney;
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



   <p class='text-xs text-gray-500'>
  ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString(
      "en-GB",
      { hour12: false }
    )} Bangladesh Standard Time (GMT+6)
</p>




    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
    document.getElementById("inputfield-1").value = "";
  });

//for card 2

document
  .getElementById("donate-now-btn-2")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-2");
    let myBalance = document.getElementById("my-balance").innerText;

    const accountBalance = document.getElementById("card-balance-2").innerText;
    const accountBalanceNumber2 = parseFloat(accountBalance);
    const myBalance2 = parseFloat(myBalance);
    if (isNaN(donateMoney) || donateMoney <= 0 || donateMoney > myBalance2) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber2 + donateMoney;
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



    <p class='text-xs text-gray-500'>
  ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString(
      "en-GB",
      { hour12: false }
    )} Bangladesh Standard Time (GMT+6)
</p>

    
    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
    document.getElementById("inputfield-2").value = "";
  });

//card-3

document
  .getElementById("donate-now-btn-3")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("inputfield-3");
    let myBalance = document.getElementById("my-balance").innerText;

    const accountBalance = document.getElementById("card-balance-3").innerText;
    const accountBalanceNumber3 = parseFloat(accountBalance);
    const myBalance3 = parseFloat(myBalance);

    if (isNaN(donateMoney) || donateMoney <= 0 || donateMoney > myBalance3) {
      alert(
        "Please enter a valid donation amount within your balance.Or try again."
      );
      return;
    }
    const UpdateBalance1 = accountBalanceNumber3 + donateMoney;
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

    <p class='text-xs text-gray-500'>
  ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString(
      "en-GB",
      { hour12: false }
    )} Bangladesh Standard Time (GMT+6)
</p>

    
    
    `;
    document.getElementById("history-section").appendChild(historyDiv);
    document.getElementById("inputfield-3").value = "";
  });

// history

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("section-1", "history-section");

  this.classList.remove("bg-gray-300", "text-black");
  this.classList.add("bg-lime-400", "text-white");

  document
    .getElementById("donate-btn")
    .classList.remove("bg-lime-400", "text-white");
  document
    .getElementById("donate-btn")
    .classList.add("bg-gray-300", "text-black");
});

//donate btn

document.getElementById("donate-btn").addEventListener("click", function () {
  showSectionById("history-section", "section-1");

  this.classList.remove("bg-gray-300", "text-black");
  this.classList.add("bg-lime-400", "text-white");

  document
    .getElementById("history-btn")
    .classList.remove("bg-lime-400", "text-white");
  document
    .getElementById("history-btn")
    .classList.add("bg-gray-300", "text-black");
});
