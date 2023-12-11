const logoutButton = document.getElementById('logout_button');
const depositButton = document.getElementById('deposit_button');
const withdrawButton = document.getElementById('withdraw_button');

// Logout
logoutButton.addEventListener('click', () => {
    window.location.href = "https://alif0007.github.io/bank-dashboard/Login/login.html";
});

// Get input value
function getInputValue(inputID) {
    const amountField = document.getElementById(inputID);
    const newValue = amountField.value;
    const finalAmount = parseFloat(newValue);
    return finalAmount;
}

// Update total values
function updateTotalValue(totalValueID, moneyAmount) {
    const totalAmount = document.getElementById(totalValueID);
    const previousAmount = parseFloat(totalAmount.innerText);
    const currentAmount = previousAmount + moneyAmount;
    totalAmount.innerText = currentAmount;
}

// Update total balances
function updateTotalBalance(balanceID, moneyAmount, isAdd) {
    const totalBalance = document.getElementById(balanceID);
    const previousBalance = parseFloat(totalBalance.innerText);

    isAdd == true ? totalBalance.innerText = Math.max(0, previousBalance + moneyAmount) : totalBalance.innerText = Math.max(0, previousBalance - moneyAmount);
}

// Deposit
depositButton.addEventListener('click', () => {
    const depositAmount = getInputValue('deposit_money_field');
    if (depositAmount > 0 && depositAmount <= 1000) {
        updateTotalValue('deposit_total', depositAmount);
        updateTotalBalance('balance_total', depositAmount, true);
    } else {
        document.getElementById('deposit_error_message').innerHTML = "Amount must be positive numbers or deposit money between $1 and $1000!";
    }
});

// Withdraw 
// Withdraw 
withdrawButton.addEventListener('click', () => {
    console.log("Withdraw button clicked");
    const withdrawAmount = getInputValue('withdraw_money_field');
    const currentBalance = parseFloat(document.getElementById('balance_total').innerText);

    if (withdrawAmount > 0 && withdrawAmount <= 1000) {
        console.log("Valid withdrawal amount");
        if (withdrawAmount <= currentBalance) {
            // Update total values
            updateTotalValue('withdraw_total', withdrawAmount);
            updateTotalBalance('balance_total', withdrawAmount, false);
            document.getElementById('withdraw_error_message').innerHTML = ''; // Clear error message
        } else {
            // Insufficient balance error message
            document.getElementById('withdraw_error_message').innerHTML = "Insufficient balance";
            console.log("Insufficient balance");
        }
    } else {
        // Invalid amount error message
        document.getElementById('withdraw_error_message').innerHTML = "Amount must be positive numbers or withdraw money between $1 and $1000!";
        console.log("Invalid withdrawal amount");
    }
});

