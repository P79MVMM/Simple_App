import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    {
      //Content is the task and the isComplete is the state that task is in
      content: 'Take a shower',
      isCompleted: false,
    },
    {
      content: 'Get haircut',
      isCompleted: true,
    },
    {
      content: 'Shave',
      isCompleted: true,
    }
  ]);

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }
  
  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }
  
  return (
    <div classname="app">
      <div classname="header">
        <img src={logo} classname="logo" alt="logo" />
      </div>
      <form classname="todo-list">
  <ul>
    {todos.map((todo, i) => (
      <div classname={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
      <div classname={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
        {todo.isCompleted && (
          <span>&#x2714;</span>
        )}
      </div>
      <input
        type="text"
        value={todo.content}
        onKeyDown={e => handleKeyDown(e, i)}
        onChange={e => updateTodoAtIndex(e, i)}
      />
    </div>
    ))}
  </ul>
</form>
    </div>
  );
}

export default App;
