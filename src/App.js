import React ,{useState} from "react";
 
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let dummy =[
    {
        id:'e1',
        title:'School Fee',
        amount: 250,
        date:new Date(2021,5,12)
    },
    {
        id:'e2',
        title:'Book',
        amount: 300,
        date:new Date(2022,7,25)
    },
    {
        id:'e3',
        title:'House Rent',
        amount: 500,
        date:new Date(2022,6,12)
    },
    {
        id:'e4',
        title:'Food',
        amount: 400,
        date:new Date()
    }
];
 const App=()=>{
    
    const[expenses,setExpenses]=useState(dummy);
    const addExpenseHandler=(expense)=>{
        const updatedExpense =[expense,...expenses];
       setExpenses(updatedExpense);
    };
    return(
        <div >
           <NewExpense onAddExpense={addExpenseHandler}/>
           <Expenses item={expenses} />
        </div>
    );
 }
 export default App;