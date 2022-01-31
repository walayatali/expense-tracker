import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props)	{

	const [userInput, setUserInput] = useState({
		title: 'test title',
		amount: '12.00',
		date: '2022-01-01'
	});
	
	const titleChangeHandler = (e) => {

		setUserInput((prevState)  => {
			return {...prevState, title: e.target.value}
		});

	}

	const amountChangeHandler = (e) => {

		setUserInput((prevState)  => {
			return {...prevState, amount: e.target.value}
		});
		
	}

	const dateChangeHandler = (e) => {

		setUserInput((prevState)  => {
			return {...prevState, date: e.target.value}
		});
		
	}

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = userInput;

		props.onSaveExpenseData(expenseData);
	}


	return (
		<form onSubmit = {submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input onChange={titleChangeHandler} type="text" value={userInput.title}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" value={userInput.amount}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input onChange={dateChangeHandler} type="date" min="2022-01-01" step="2022-12-31" value={userInput.date}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">
					Add Expense
				</button>
			</div>	
		</form>
	)
}

export default ExpenseForm;