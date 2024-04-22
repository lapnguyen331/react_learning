import './ExpenseItem.css'
function ExpenseItem(){
    const date  = new Date(2021,2,15)
    const expenseTittle = 'car Insurance'
    const expensePrice = '294.67'
    return (
        <div className='expense-item'>
            <div>{date.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{expenseTittle}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem