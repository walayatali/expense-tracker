import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
	return (
		<Card className="expenses">
            {props.AllExpenses.map(exp => 
              <ExpenseItem 
                    ItemDate = {exp.ItemDate}
                    Title = {exp.Title}
                    Price = {exp.Price}
                />  
            )}
        </Card>
	)
}
export default Expenses;