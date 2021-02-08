import React, { useContext } from 'react';
import { TodosContext, TODO_STATUS } from '../context/todo';

export default function TodoList() {
    const { todoList, toggleStatus, delTodo } = useContext(TodosContext);
    return (
        <div>
            <div>
                <h2>PENDING</h2>
                {todoList.slice(0).reverse().map( todo => {
                    if (todo.status === TODO_STATUS.ACTIVE ) {
                        return <div key={todo.id}>
                                    {todo.content} 
                                    <button onClick={(id) => toggleStatus(todo.id)}>DONE</button>
                                    <button onClick={(id) => delTodo(todo.id)}>DELETE</button>
                                </div>
                    }
                })}
            </div>
            <div>
                <h2>DONE</h2>
                {todoList.slice(0).map( todo => {
                    if (todo.status === TODO_STATUS.DONE ) {
                        return <div key={todo.id}>
                                    {todo.content}
                                    <button onClick={(id) => toggleStatus(todo.id)}>ACTIVE</button>
                                    <button onClick={(id) => delTodo(todo.id)}>DELETE</button>
                                </div>
                    }
                })}
            </div>
        </div>
    )
}