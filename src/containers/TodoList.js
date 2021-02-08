import React, { useContext, useEffect, useState } from 'react';
import { TodosContext, TODO_STATUS } from '../context/todo';
import LoadingUI from '../ui/loading';

export default function TodoList() {
    const { todoList, toggleStatus, delTodo, getTodo } = useContext(TodosContext);

    useEffect(() => {
        getTodo();
    }, [] );

    return (
        <div>
            <div class="listBox">
                <h2>Pending</h2>
                <ul class="todoList">
                    {todoList.slice(0).reverse().map( todo => {
                            if (todo.status === TODO_STATUS.ACTIVE ) {
                                return <li key={todo.id}>
                                            <button class="doneButton" onClick={(id) => toggleStatus(todo.id)}><i class="fas fa-check"></i></button>
                                            <div><span>{todo.content}</span></div>                                    
                                            <button onClick={(id) => delTodo(todo.id)}><i class="far fa-trash-alt"></i></button>
                                        </li>
                            }
                        })
                    }
                </ul>
            </div>
            <div class="listBox">
                <h2>Done</h2>
                <ul class="todoList">
                    {todoList.slice(0).map( todo => {
                        if (todo.status === TODO_STATUS.DONE ) {
                            return <li key={todo.id}>
                                        <button onClick={(id) => toggleStatus(todo.id)}><i class="fas fa-undo"></i></button>
                                        <div>{todo.content}</div>                                    
                                        <button onClick={(id) => delTodo(todo.id)}><i class="far fa-trash-alt"></i></button>
                                    </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}