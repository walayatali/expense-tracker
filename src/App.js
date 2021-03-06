import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const ListExpenses = [
    {id: 'e1', ItemDate: new Date(2022, 1, 21), Title: 'Item 1', Price: 19.4},
    {id: 'e2', ItemDate: new Date(2021, 1, 22), Title: 'Item 2', Price: 31.1},
    {id: 'e3', ItemDate: new Date(2019, 1, 23), Title: 'Item 3', Price: 20.5},
    {id: 'e4', ItemDate: new Date(2018, 1, 24), Title: 'Item 4', Price: 23.7}
];

function App() {
  

    const [expenses, setExpenses] = useState(ListExpenses);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        })
      };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses AllExpenses = {expenses}/>
        </div>
    );
}

export default App;
