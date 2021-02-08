import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm';
import TodoList from './containers/TodoList';
import { TodoContextProvider } from './context/todo';

function App() {
  
  return (
    <div>
      <TodoContextProvider>
          <AddTodoForm />
          <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
