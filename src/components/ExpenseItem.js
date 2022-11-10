import './ExpenseItem.css'

const ExpenseItem = (props) => {

return (
    <div className='expense-item'>
    <div className= 'expense-item__description'>
        <h2>{props.title}</h2>
    </div>
    </div>
)
}

export default ExpenseItem
