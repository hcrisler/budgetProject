document.querySelector('#update_budget').addEventListener("click", setBudget);
document.querySelector('#update_expenses').addEventListener("click", addExpense);

let weekly_budget = document.getElementById("weekly_budget");
let budget_input = document.getElementById("budget_input");
let weeklyAmount = 0;
let expenseTotal = 0;
let balance = 0;
let remaining_balance = document.querySelector('#remaining_balance');

let purchase_input = document.querySelector('#purchase_input');
let category_selection = document.querySelector('#category_selection');
let update_expenses = document.querySelector('#update_expenses');

let newExpense = 0

function setBudget(event) {
    event.preventDefault();
    weeklyAmount = budget_input.value;
    weekly_budget.innerText = "$" + weeklyAmount;
    budget_input.value = "";
    updateBalance();
}

function updateBalance() {
    balance = weeklyAmount - expenseTotal;
    remaining_balance.innerText = "$" + balance;
}

function addExpense(event) {
    // event.preventDefault();
    // newExpense = purchase_input.value;
    // total_spent.innerText = "$" + newExpense;
    // purchase_input.value = "";
    
    if (category_selection.value === "Entertainment"){
        event.preventDefault();
        newExpense = purchase.input.value;
        total_entertainment.innerText = "$" + newExpense;
        purchase_input.value = "";
    }
}

