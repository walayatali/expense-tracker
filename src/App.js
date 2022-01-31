import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  
    const ListExpenses = [
        {id: 'e1', ItemDate: new Date(2022, 1, 21), Title: 'Item 1', Price: 19.4},
        {id: 'e2', ItemDate: new Date(2022, 1, 22), Title: 'Item 2', Price: 31.1},
        {id: 'e3', ItemDate: new Date(2022, 1, 23), Title: 'Item 3', Price: 20.5},
        {id: 'e4', ItemDate: new Date(2022, 1, 24), Title: 'Item 4', Price: 23.7}
    ];

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
      };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses AllExpenses = {ListExpenses}/>
        </div>
    );
}

export default App;
