import React, { useState } from 'react';

export const TodosContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);

    const addTodo = (content) => {
        const newTodo = { id: Date.now(), content: content };
        setTodoList([...todoList, newTodo]);
    }
    const delTodo = (id) => {
        const updatedTodo = todoList.filter( todo => todo.id !== id );
        setTodoList(updatedTodo);
    };

    return (
        <TodosContext.Provider
            value={{ todoList,
                    addTodo,
                    delTodo
            }}>
            {children}
        </TodosContext.Provider>
    );
};
