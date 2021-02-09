import React, { useContext, useEffect } from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm';
import Header from './containers/Header';
import TodoList from './containers/TodoList';
import { TodoContextProvider } from './context/todo';
import { userContext } from './context/user';

function App() {

  const { getUserId, setUserId } = useContext(userContext);
  
  useEffect(() => {
    getUserId();
  }, []);

  return (        
      <TodoContextProvider>
        <div class="wrapper">
          <Header />
          <AddTodoForm />
          <TodoList />
        </div>
      </TodoContextProvider>
  );
}

export default App;