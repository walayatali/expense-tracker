import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
	return (
		<div className="expenses">
            {props.AllExpenses.map(exp => 
              <ExpenseItem 
                    ItemDate = {exp.ItemDate}
                    Title = {exp.Title}
                    Price = {exp.Price}
                />  
            )}
        </div>
	)
}
export default Expenses;