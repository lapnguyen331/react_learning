import React from "react";
import './ExpenseForm.css'
function ExpensesForm(props){
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2030-01-01"/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpensesForm;