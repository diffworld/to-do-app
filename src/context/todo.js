import React, { useState } from 'react';

export const TodosContext = React.createContext();

export const TODO_STATUS = { 'ACTIVE': 'active', 'DONE': 'done' };

export const TodoContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);

    const addTodo = (content) => {
        const newTodo = {
            id: Date.now(),
            content: content,
            status: TODO_STATUS.ACTIVE };
        setTodoList(todoList.concat(newTodo));
    }
    const toggleStatus = (id) => {
        const index = todoList.findIndex( todo => todo.id === id );
        const newArray = [...todoList];
        newArray[index].status = (newArray[index].status === TODO_STATUS.ACTIVE) ? TODO_STATUS.DONE: TODO_STATUS.ACTIVE;
        setTodoList(newArray);
    };
    const delTodo = (id) => {
        const updatedTodo = todoList.filter( todo => todo.id !== id );
        setTodoList(updatedTodo);
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
