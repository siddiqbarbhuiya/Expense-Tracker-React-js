import Expenses from "./components/Expenses/Expenses";
import React, {useState} from 'react';
import NewExpense from "./components/NewExpenses/NewExpense";


let DUMMY_EXPENSE = [
     {
        id: 'e1',
        title: 'school Fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },

    {
        id: 'e2',
        title: 'Books',
        amount: 230,
        date: new Date(2021, 2, 12)
    },

    {
        id: 'e3',
        title: 'House Rent',
        amount: 700,
        date: new Date(2021, 1, 12)
    },

    {
        id: 'e4',
        title: 'school Fee',
        amount: 500,
        date: new Date(2021, 6, 12)
    } 
    
];

const App = () => {

const [expenses, setExpenses ] = useState(DUMMY_EXPENSE)

const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
}

/* let expenseDate = new Date(2021, 3, 28);
let expenseTitle = "School Fee";
let expenseAmount = 300; */


    return ( 
        <div>
            <NewExpense onAddExpense= {addExpenseHandler} />
            <Expenses item ={ expenses} />
        </div>
     );
}
 
export default App;