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

let newExpense = 0;
let updatedEntertainment =0;
let updatedFood = 0;
let updatedClothing = 0;
let updatedBills = 0;


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
<<<<<<< HEAD
    // event.preventDefault();
    // newExpense = purchase_input.value;
    // total_spent.innerText = "$" + newExpense;
    // purchase_input.value = "";
    
    if (category_selection.value === "Entertainment"){
        event.preventDefault();
        newExpense = purchase.input.value;
        total_entertainment.innerText = "$" + newExpense;
=======

    if (category_selection.value === 'Entertainment') {
    event.preventDefault();
    newExpense = purchase_input.value;
    newExpense = parseInt(newExpense);
    updatedEntertainment += newExpense;
    total_entertainment.innerText = "$" + updatedEntertainment;
    purchase_input.value = "";
    } else if (category_selection.value === 'Food') {
        event.preventDefault();
        newExpense = purchase_input.value; 
        newExpense = parseInt(newExpense);
        updatedFood += newExpense;
        total_food.innerText = "$" + updatedFood;
        purchase_input.value = "";
        
    } else if (category_selection.value === 'Clothing') {
        event.preventDefault();
        newExpense = purchase_input.value;
        newExpense = parseInt(newExpense);
        updatedClothing += newExpense;
        total_clothing.innerText = "$" + updatedClothing;
        purchase_input.value = "";
    } else if (category_selection.value === 'Bills') {
        event.preventDefault();
        newExpense = purchase_input.value;
        newExpense = parseInt(newExpense);
        updatedBills += newExpense;
        total_bills.innerText = "$" + updatedBills;
>>>>>>> cdbb94e6567cfc80e6970550cf76828a92c8a586
        purchase_input.value = "";
    }
}


