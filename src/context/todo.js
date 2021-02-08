import React, { useState } from 'react';

export const TodosContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);
    return (
        <TodosContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodosContext.Provider>
    );
};
