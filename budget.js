document.querySelector("#update_budget").addEventListener("click", setBudget);
document
  .querySelector("#update_expenses")
  .addEventListener("click", maybeAddExpense);

let weekly_budget = document.getElementById("weekly_budget");
let budget_input = document.getElementById("budget_input");
let weeklyAmount = 0;
let expenseTotal = 0;
let balance = 0;
let remaining_balance = document.querySelector("#remaining_balance");

let purchase_input = document.querySelector("#purchase_input");
let category_selection = document.querySelector("#category_selection");
let update_expenses = document.querySelector("#update_expenses");

let newExpense = 0;
let updatedEntertainment = 0;
let updatedFood = 0;
let updatedClothing = 0;
let updatedBills = 0;
let totalExpenses = 0;

function setBudget(event) {
  event.preventDefault();
  weeklyAmount = budget_input.value;
  weekly_budget.innerText = "$" + weeklyAmount;
  budget_input.value = "";
  updateBalance();
}

function maybeAddExpense(event) {
  event.preventDefault();
  let newExpense = purchase_input.value;
  newExpense = parseInt(newExpense);
  if (balance - newExpense < 0) {
    alert("No more money :(");
  } else {
    addExpense(event);
  }
}

<<<<<<< HEAD
function addExpense(event) {
  if (category_selection.value === "Entertainment") {
    event.preventDefault();
    newExpense = purchase_input.value;
    newExpense = parseInt(newExpense);
    updatedEntertainment += newExpense;
    total_entertainment.innerText = "$" + updatedEntertainment;
    purchase_input.value = "";
  } else if (category_selection.value === "Food") {
    event.preventDefault();
    newExpense = purchase_input.value;
    newExpense = parseInt(newExpense);
    updatedFood += newExpense;
    total_food.innerText = "$" + updatedFood;
    purchase_input.value = "";
  } else if (category_selection.value === "Clothing") {
    event.preventDefault();
    newExpense = purchase_input.value;
    newExpense = parseInt(newExpense);
    updatedClothing += newExpense;
    total_clothing.innerText = "$" + updatedClothing;
    purchase_input.value = "";
  } else if (category_selection.value === "Bills") {
    event.preventDefault();
    newExpense = purchase_input.value;
    newExpense = parseInt(newExpense);
    updatedBills += newExpense;
    total_bills.innerText = "$" + updatedBills;
    purchase_input.value = "";
  }

  totalExpenses =
    updatedEntertainment + updatedFood + updatedClothing + updatedBills;
  total_spent.innerText = "$" + totalExpenses;

  updateBalance();
}
=======

    function addExpense(event) {
        newExpense = purchase_input.value;
        if(!Number.isNaN(newExpense)) {
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
                    purchase_input.value = "";
                }
            
                totalExpenses = updatedEntertainment + updatedFood + updatedClothing + updatedBills;
                total_spent.innerText = "$" + totalExpenses;
            
                updateBalance();
        }
        
    };
             
>>>>>>> 308dd54d0c72fa8ed26b556b7cbf31520209d58e

function updateBalance() {
  balance = weeklyAmount - totalExpenses;
  remaining_balance.innerText = "$" + balance;
}
