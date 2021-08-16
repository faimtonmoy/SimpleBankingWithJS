function getInputValue(inputValue){
    const inputField= document.getElementById(inputValue);
    const inputText= inputField.value;
    const inputAmount= parseFloat(inputText);
    inputField.value= '';
    return inputAmount;

}
function inputTotalValue(Value, amount)
{
    const total= document.getElementById(Value);
    const previousAmount= total.innerText;
    const newTotal= parseFloat(previousAmount) + amount;
    total.innerText= newTotal;
}
function getCurrentBalance()
{
    const updateBalance= document.getElementById('balance-update');
    const previousBalance= updateBalance.innerText;
    const previousBalanceAmount= parseFloat(previousBalance);
    return previousBalanceAmount;
}
function updateBalance(amount,isAdd)
{
    const updateBalance= document.getElementById('balance-update');
    previousBalance= getCurrentBalance();
    
    if(isAdd== true)
    {
        const newBalance= previousBalance+ amount;
        updateBalance.innerText= newBalance;
    }
    else{
        const newBalance= previousBalance- amount;
        updateBalance.innerText= newBalance;
    }
    
}


//deposit handler
document.getElementById('deposit-submit').addEventListener('click', function(){
    // const inputDeposit= document.getElementById('deposit-input');
    // const newDepositText= inputDeposit.value;
    // const newDepositAmount= parseFloat(newDepositText);
    depositAmount= getInputValue('deposit-input');
    if(depositAmount>0)
    {
        inputTotalValue('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    // const depositTotal= document.getElementById('deposit-total');
    // const previousDepositAmount= depositTotal.innerText;
    // const newDepositTotal= parseFloat(previousDepositAmount) + depositAmount;
    // depositTotal.innerText= newDepositTotal;
   
    // const updateBalance= document.getElementById('balance-update');
    // const previousBalance= updateBalance.innerText;
    // const newBalance= parseFloat(previousBalance)+ depositAmount;
    // updateBalance.innerText= newBalance;
    
})
//withdraw handler
document.getElementById('withdraw-submit').addEventListener('click', function(){
    // const newWithdraw= document.getElementById('withdraw-input');
    // const newWithdrawAmount= newWithdraw.value;
    withdrawAmount= getInputValue('withdraw-input');
    if(withdrawAmount>0 && withdrawAmount<getCurrentBalance())
    {
        totalAmount= inputTotalValue('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    // const withdrawTotal= document.getElementById('withdraw-total');
    // const previousWithdrawAmount= withdrawTotal.innerText;
    // const updatedWithdraw= parseFloat(previousWithdrawAmount) + withdrawAmount;
    // withdrawTotal.innerText= updatedWithdraw;
   
    //newWithdraw.value= '';
    // const updateBalance= document.getElementById('balance-update');
    // const previousBalance= updateBalance.innerText;
    // const newBalance= parseFloat(previousBalance)- withdrawAmount;
    // updateBalance.innerText= newBalance;
    


})
