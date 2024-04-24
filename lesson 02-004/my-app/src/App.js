import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense.js'
import Expense from './components/Expenses/Expense.js';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = expense =>{
    console.log('inapp');
    console.log(expense);
  }
  // return React.createElement('div',{},
  //   React.createElement('h2',{},'Lets start'),
  //   React.createElement(NewExpense,{}),
  //   React.createElement(Expense, {items:expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
