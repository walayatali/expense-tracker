import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    console.log(props.AllExpenses);

    const [ expenseFilterYear, setExpenseFilterYear ] = useState('2022');

    const expensesFilterHandler = (filterVal) => {
        setExpenseFilterYear(filterVal);
    }

	return (
        <div>
    		<Card className="expenses">
            <ExpensesFilter onChangeExpensesFilter = {expensesFilterHandler} selected={expenseFilterYear}/>
                {props.AllExpenses.map(exp => 
                  <ExpenseItem
                        key = {exp.id} 
                        ItemDate = {exp.ItemDate}
                        Title = {exp.Title}
                        Price = {exp.Price}
                    />  
                )}
            </Card>
        </div>
	)
}
export default Expenses;