import React from "react";
import ExpensesForm from "./ExpenseForm"; 

import "./NewExpense.css";
function NewExpense(props){
    const saveExpenseDataHandler = (enterExpenseDate) =>{
        const expenseData ={
            ...enterExpenseDate,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpensesForm onSaveChangeData={saveExpenseDataHandler} />
        </div>
    );
}
export default NewExpense;