import React from "react";
import ExpensesForm from "./ExpenseForm"; 

import "./NewExpense.css";
function NewExpense(props){
    return (
        <div className="new-expense">
            <ExpensesForm/>
        </div>
    );
}
export default NewExpense;