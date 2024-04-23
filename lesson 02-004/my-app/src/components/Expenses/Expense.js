
import Card from '../UI/Card.js'
import './Expense.css'
import ExpenseItem from './ExpenseItem.js';
function Expense(props){
    return(
        <Card className='expenses'>
            <h2>Lets start</h2>
            <ExpenseItem id={props.items[0].id} title={props.items[0].title} amount ={props.items[0].amount} date ={props.items[0].date} ></ExpenseItem>
            <ExpenseItem id={props.items[1].id} title={props.items[1].title} amount ={props.items[1].amount} date ={props.items[1].date} ></ExpenseItem>
            <ExpenseItem id={props.items[2].id} title={props.items[2].title} amount ={props.items[2].amount} date ={props.items[2].date} ></ExpenseItem>
        </Card>
    );
}
export default Expense;