import React, { useContext } from 'react';
import { TodosContext } from '../context/todo';

export default function TodoList() {
    const { todoList, setAsDone } = useContext(TodosContext);
    return (
        <div>
            {todoList.map( todo => {
                return <div key={todo.id}>
                            {todo.content} 
                            [{todo.status}]
                            <button onClick={(id) => setAsDone(todo.id)}>DONE</button>
                        </div>
            })}
        </div>
    )
}