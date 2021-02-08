import React, { useContext } from 'react';
import { TodosContext } from '../context/todo';

export default function TodoList() {
    const todoContext = useContext(TodosContext);
    return (
        <div>
            {todoContext.todoList.map( todo => {
                return <div key={todo.id}>
                            {todo.content}
                            <button onClick={(id) => todoContext.delTodo(todo.id)}>X</button>
                        </div>
            })}
        </div>
    )
}
