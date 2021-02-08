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
    const setAsDone = (id) => {
        const index = todoList.findIndex( todo => todo.id === id );
        const newArray = [...todoList];
        newArray[index].status = TODO_STATUS.DONE;
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
                    setAsDone,
                    delTodo }}>
            {children}
        </TodosContext.Provider>
    );
};
