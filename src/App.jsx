import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import ItemEntery from "./components/AddTodo";

import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";


function App() {

  const defaultDisplay=[]

  const [todoItems,setTodoItems]=useState(defaultDisplay);
  
  const handleNewItem=(itemName,itemDueDate) => {
    // const newTodoItems=[...todoItems,{name:itemName,date:itemDueDate}]
    setTodoItems((currVal)=>{
      const newTodoItems=[...currVal,{name:itemName,date:itemDueDate}]
      return newTodoItems;
    });
  }

  const handleDeleteItem = (todoItemName) =>{
    const deletedTodoItems=todoItems.filter( (item) => item.name !== todoItemName)
    setTodoItems(deletedTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem} ></AddTodo>
      {todoItems.length === 0 && <ErrorMessage></ErrorMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
