import styles from "./AddTodo.module.css"
import {useState,useRef} from 'react';

import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({onNewItem}) {

  const [todo,setTodo]=useState("");

  const [dueDate,setDueDate]=useState("");

  const todoElement=useRef();
  const dueDateElement=useRef();

  // const handleTodoNameChange=(event)=>{
  //   setTodo(event.target.value);
  // }

  // const handleDueDateChange=(event)=>{
  //   setDueDate(event.target.value);
  // }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoElement.current.value,dueDateElement.current.value);

    // console.log(`${todoElement.current.value} : ${dueDateElement.current.value}`)
    
    todoElement.current.value=""
    dueDateElement.current.value=""
    // setDueDate("");
    // setTodo("");
  }

  return (
    <div className="container">
      <form onSubmit={handleAddButtonClicked} className={`${styles.newRow} row`}>
        <div className="col-6">
          <input type="text" ref={todoElement} placeholder="Enter Todo Here" /* value={todo} onChange={handleTodoNameChange} */ ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} /* onChange={handleDueDateChange} value={dueDate} */ ></input>
        </div>
        <div className="col-2">
          <button
           className={`${styles.newButton} btn btn-success`}>
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
