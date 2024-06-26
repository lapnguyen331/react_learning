import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import './ExpenseItem.css'


function ExpenseItem(props){
    const [title,setTittle]=useState(props.title);
    console.log("em");
    const click = () =>{
        setTittle("update");
        console.log("huhu");
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={click} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;