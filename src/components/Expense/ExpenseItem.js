import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	return (
		<div className="expense-item">
			<ExpenseDate ExpDate = {props.ItemDate}/>
			<div className="expense-item__description">
				<h2>{props.Title}</h2>
				<p className="expense-item__price">$ {props.Price}</p>
			</div>
		</div>
	)
}
export default ExpenseItem