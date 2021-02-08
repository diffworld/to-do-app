import React, { useState } from 'react';

export const TodosContext = React.createContext();

export const TODO_STATUS = { 'ACTIVE': 'active', 'DONE': 'done' };

export const TodoContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);

    const addTodo = (content) => {
        const newTodo = {
            content: content,
            status: TODO_STATUS.ACTIVE
        };
        
        fetch('https://todo-app-diffworld-default-rtdb.firebaseio.com/todo.json', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            header: { 'Content-Type': 'application/json' }
        }).then(reponse => { return reponse.json()
        }).then(responseData => {
            newTodo.id = responseData.name;
            setTodoList(todoList.concat(newTodo));
        });
    }

    const toggleStatus = (id) => {
        const index = todoList.findIndex( todo => todo.id === id );
        const newStatus = (todoList[index].status === TODO_STATUS.ACTIVE) ? TODO_STATUS.DONE: TODO_STATUS.ACTIVE;

        fetch(`https://todo-app-diffworld-default-rtdb.firebaseio.com/todo/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ status: newStatus }),
        }).then(responseData => {
            const updatedArray = [...todoList];
            updatedArray[index].status = newStatus;
            setTodoList(updatedArray);
        });
    };

    const delTodo = (id) => {
        fetch(`https://todo-app-diffworld-default-rtdb.firebaseio.com/todo/${id}.json`, {
            method: 'DELETE'
        }).then(responseData => {
            const updatedTodo = todoList.filter( todo => todo.id !== id );
            setTodoList(updatedTodo);
        });
    };

    return (
        <TodosContext.Provider
            value={{ todoList,
                    addTodo,
                    toggleStatus,
                    delTodo }}>
            {children}
        </TodosContext.Provider>
    );
};
