import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    
    let AllExpenses = props.AllExpenses;


    const [ expenseFilterYear, setExpenseFilterYear ] = useState('2022');

    const expensesFilterHandler = (filterVal) => {
        setExpenseFilterYear(filterVal);
    }

    const subExpenses =  AllExpenses.filter(function (el) {
        return el.ItemDate.getFullYear().toString() === expenseFilterYear;
    });

    let conditionalContent = <p>No Items found !!!</p>;

    if (subExpenses.length > 0) {
        conditionalContent = subExpenses.map(exp => 
          <ExpenseItem
                key = {exp.id} 
                ItemDate = {exp.ItemDate}
                Title = {exp.Title}
                Price = {exp.Price}
            />  
        )
    }

	return (
        <div>
    		<Card className="expenses">
            <ExpensesFilter onChangeExpensesFilter = {expensesFilterHandler} selected={expenseFilterYear}/>
                {conditionalContent}
            </Card>
        </div>
	)
}
export default Expenses;