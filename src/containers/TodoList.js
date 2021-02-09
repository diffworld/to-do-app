import React, { useContext, useEffect } from 'react';
import { TodosContext, TODO_STATUS } from '../context/todo';
import LoadingUI from '../ui/loading';

export default function TodoList() {
    const { todoList, toggleStatus, delTodo, getTodo } = useContext(TodosContext);

    useEffect(() => {
        getTodo();
    }, [] );

    let pendingItems, doneItems = null;
    pendingItems = todoList.filter(todo => todo.status === TODO_STATUS.ACTIVE);
    doneItems = todoList.filter(todo => todo.status === TODO_STATUS.DONE);

    return (        
        <div>
            <div class="listBox">
                <h2>Pending</h2>
                <ul class="todoList">
                    {pendingItems.slice(0).reverse().map( todo => {
                        return  <li key={todo.id}>
                                <button class="doneButton" onClick={(id) => toggleStatus(todo.id)}><i class="far fa-square"></i></button>
                                <div><span>{todo.content}</span></div>                                    
                                <button onClick={(id) => delTodo(todo.id)}><i class="far fa-trash-alt"></i></button>
                                </li>
                    })}
                    {(pendingItems.length ===0 ) ? <p class="noItem">👋🏼 No pending todo, add one!</p>: ''}
                </ul>
            </div>
            <div class="listBox">
                <h2>Done</h2>
                <ul class="todoList done">
                    {doneItems.slice(0).reverse().map( todo => {
                        return  <li key={todo.id}>
                                <button class="revertButton" onClick={(id) => toggleStatus(todo.id)}><i class="fas fa-undo"></i></button>
                                <div><span>{todo.content}</span></div>                                    
                                <button onClick={(id) => delTodo(todo.id)}><i class="far fa-trash-alt"></i></button>
                                </li>
                    })}
                    {(doneItems.length === 0 ) ? <p class="noItem">✌️ Yay</p>: ''}
                </ul>
            </div>
        </div>
    )
}