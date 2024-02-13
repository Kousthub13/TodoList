import React, { useState , useEffect } from "react";
import ReactDOM from 'react-dom/client';

function TodoList() {
    
    const storedItems = JSON.parse(localStorage.getItem('todos'));
    
    const [inputValue, setInputValue] = useState("");
    const[todos, setTodos] = useState(storedItems);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    function handleInputChange(e){
        setInputValue(e.target.value);
    }
    function handleAddTodos() {
        if (inputValue !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
        }
    }
//    const storedItems = JSON.parse(localStorage.getItem('todos'));

  return( 
  <div>
      <div className="todo-container">
        <h1>Todo List</h1>
        <input type="text" value={inputValue} placeholder="Enter a list"
           onChange={handleInputChange}
        />
        <button onClick={handleAddTodos}>Ok</button>

        <ul className="class-todoslist">
            {todos.map((todo) =>(
                <li>
                    <span>{todo.text}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  ); 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />);

export default TodoList ;
// import React , { useState } from 'react';

// function CountClick() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count+1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default CountClick ;