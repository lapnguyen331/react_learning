import React, { useState } from "react";
import './ExpenseForm.css'
function ExpensesForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
        // });
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
        // setEnteredAmount({
        //     ...userInput,
        //     enteredAmount:e.target.value
        // });
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
        // setEnteredAmount({
        //     ...userInput,
        //     enteredDate:e.target.value
        // });
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveChangeData(expenseData)
        console.log(props);
        //sau khi submit clear form
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2030-01-01" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}
export default ExpensesForm;