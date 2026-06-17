let accDetail = document.getElementById("accDetail");
let money = document.getElementById("amtInput");
const sendBtn = document.getElementById("send");
const upiBtn = document.getElementById("upi");
const accBtn = document.getElementById("accTrans");
const billsBtn = document.getElementById("bills");
const inputs = document.getElementById("inputs");
let message = document.getElementById("message");
const billsOption = document.getElementById("billsOptions");

upiBtn.addEventListener('click',function()
{
    upiBtn.classList.remove("unselectedButton");
    upiBtn.classList.add("selectedButton");

    accBtn.classList.remove("selectedButton");
    accBtn.classList.add("unselectedButton");

    billsBtn.classList.remove("selectedButton");
    billsBtn.classList.add("unselectedButton");

    inputs.style.display = "block";
    billsOption.style.display = "none";
    sendBtn.style.display = "block";

    accDetail.placeholder = "Enter UPI ID";

    message.textContent = "";
})
accBtn.addEventListener('click',function()
{
    accBtn.classList.remove("unselectedButton");
    accBtn.classList.add("selectedButton");
    
    upiBtn.classList.remove("selectedButton");
    upiBtn.classList.add("unselectedButton");

    billsBtn.classList.remove("selectedButton");
    billsBtn.classList.add("unselectedButton");

    inputs.style.display = "block";
    billsOption.style.display = "none";
    sendBtn.style.display = "block";

    accDetail.placeholder = "Enter Account Number";

    message.textContent = "";

})
billsBtn.addEventListener('click',function()
{
    billsBtn.classList.remove("unselectedButton");
    billsBtn.classList.add("selectedButton");
    
    accBtn.classList.remove("selectedButton");
    accBtn.classList.add("unselectedButton");

    upiBtn.classList.remove("selectedButton");
    upiBtn.classList.add("unselectedButton");

    inputs.style.display = "none";
    billsOption.style.display = "block";
    sendBtn.style.display = "none";
    
    billsOption.style.display = "flex";
    billsOption.style.gap = "5%";

    message.textContent = "";

})

sendBtn.addEventListener('click',function()
{
    if(accDetail.value.length == 0)
    {
        message.textContent = "Please enter valid receiver details";
        message.style.color = "red";
    }
    else if(money.value <= 0)
    {
        message.textContent = "Please Enter a valid amount.";
        message.style.color = "red";
    }
    else
    {
        message.textContent = "";
    }
})