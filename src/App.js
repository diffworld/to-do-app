import React, { useContext } from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm';
import Header from './containers/Header';
import TodoList from './containers/TodoList';
import { TodoContextProvider } from './context/todo';

function App() {
  return (    
    <TodoContextProvider>
      <div>
        <Header />
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;