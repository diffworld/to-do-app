import React, { useContext, useState } from 'react';
import { TodosContext } from '../context/todo';

export default function AddTodoForm() {
    const [inputState, setInputState] = useState('');
    const todoContext = useContext(TodosContext);

    const handleInputChange = (e) => {
        setInputState(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const updatedTodoList = [...todoContext.todoList, e.target.todoInput.value];
        todoContext.setTodoList(updatedTodoList);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='text' name='todoInput' value={inputState} onChange={handleInputChange}/>
                <button>ADD</button>
            </form>
        </div>
    )
}