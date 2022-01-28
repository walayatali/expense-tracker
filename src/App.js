import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';

function App() {
  
    const Expenses = [
        {id: 'e1', ItemDate: new Date(2022, 1, 21), Title: 'Item 1', Price: 19.4},
        {id: 'e2', ItemDate: new Date(2022, 1, 22), Title: 'Item 2', Price: 31.1},
        {id: 'e3', ItemDate: new Date(2022, 1, 23), Title: 'Item 3', Price: 20.5},
        {id: 'e4', ItemDate: new Date(2022, 1, 24), Title: 'Item 4', Price: 23.7}
    ];

    return (
        <div>
            {Expenses.map(exp => 
              <ExpenseItem 
                    ItemDate = {exp.ItemDate}
                    Title = {exp.Title}
                    Price = {exp.Price}
                />  
            )}
        </div>
    );
}

export default App;
