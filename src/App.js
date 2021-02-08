import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm';
import TodoList from './containers/TodoList';
import { TodoContextProvider } from './context/todo';

function App() {
  
  return (    
    <TodoContextProvider>
      <div>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
