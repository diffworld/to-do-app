import React, { useState, useReducer } from 'react';
import httpReducer from '../reducer/httpState';

export const TodosContext = React.createContext();

export const TODO_STATUS = { 'ACTIVE': 'active', 'DONE': 'done' };

export const TodoContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);
    const [ httpState, httpDispatch ] = useReducer(httpReducer, {loading: false, error: null});

    const getTodo = () => {
        httpDispatch({ type: 'SEND' });
        fetch('https://todo-app-diffworld-default-rtdb.firebaseio.com/todo.json', {
            method: 'GET',
            header: { 'Content-Type': 'application/json' }
        }).then(reponse => { return reponse.json()
        }).then(responseData => {
            httpDispatch({ action: 'RESPONSE' });
            const loadedTodo = [];            
            for (const key in responseData) {
                loadedTodo.push({
                    id: key,
                    content: responseData[key].content,
                    status: responseData[key].status
                });
            }
            setTodoList(loadedTodo);
        }).catch(error => {
            httpDispatch({ action: 'ERROR', payload: { errorData: 'Something went wrong.'} });
        });
    };

    const addTodo = (content) => {
        const newTodo = {
            content: content,
            status: TODO_STATUS.ACTIVE
        };

        httpDispatch({ type: 'SEND' });
        fetch('https://todo-app-diffworld-default-rtdb.firebaseio.com/todo.json', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            header: { 'Content-Type': 'application/json' }
        }).then(reponse => { return reponse.json()
        }).then(responseData => {
            httpDispatch({ action: 'RESPONSE' });
            newTodo.id = responseData.name;
            setTodoList(todoList.concat(newTodo));
        }).catch(error => {
            httpDispatch({ action: 'ERROR', payload: { errorData: 'Something went wrong.'} });
        });
    }

    const toggleStatus = (id) => {
        const index = todoList.findIndex( todo => todo.id === id );
        const newStatus = (todoList[index].status === TODO_STATUS.ACTIVE) ? TODO_STATUS.DONE: TODO_STATUS.ACTIVE;

        httpDispatch({ type: 'SEND' });
        fetch(`https://todo-app-diffworld-default-rtdb.firebaseio.com/todo/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ status: newStatus }),
        }).then(responseData => {
            httpDispatch({ action: 'RESPONSE' });
            const updatedArray = [...todoList];
            updatedArray[index].status = newStatus;
            setTodoList(updatedArray);
        }).catch(error => {
            httpDispatch({ action: 'ERROR', payload: { errorData: 'Something went wrong.'} });
        });
    };

    const delTodo = (id) => {
        httpDispatch({ type: 'SEND' });
        fetch(`https://todo-app-diffworld-default-rtdb.firebaseio.com/todo/${id}.json`, {
            method: 'DELETE'
        }).then(responseData => {
            httpDispatch({ action: 'RESPONSE' });
            const updatedTodo = todoList.filter( todo => todo.id !== id );
            setTodoList(updatedTodo);
        }).catch(error => {
            httpDispatch({ action: 'ERROR', payload: { errorData: 'Something went wrong.'} });
        });
    };

    return (
        <TodosContext.Provider
            value={{ todoList,
                    httpState,
                    getTodo,
                    addTodo,
                    toggleStatus,
                    delTodo }}>
            {children}
        </TodosContext.Provider>
    );
};
