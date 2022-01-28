import './ExpenseItem.css';
const ExpenseItem = (props) => {
	const month = props.ItemDate.toLocaleString('en-US', { month: 'long' });
  	const day = props.ItemDate.toLocaleString('en-US', { day: '2-digit' });
  	const year = props.ItemDate.getFullYear();
	return (
		<div className="expense-item">
			<div className="expense-date">
				<div className="expense-date__month">{month}</div>
				<div className="expense-date__year">{year}</div>
				<div className="expense-date__day">{day}</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.Title}</h2>
				<p className="expense-item__price">$ {props.Price}</p>
			</div>
		</div>
	)
}
export default ExpenseItem