import './ExpenseItem.css';
const ExpenseItem = () => {
	return (
		<div className="expense-item">
			<div>March 28th 2021</div>
			<div className="expense-item__description">
				<h2>Item 1</h2>
				<p className="expense-item__price">$ 19.4</p>
			</div>
		</div>
	)
}
export default ExpenseItem