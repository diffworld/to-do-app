import React, { useContext, useState } from 'react';
import { TodosContext } from '../context/todo';
import LoadingUI from '../ui/loading';

export default function AddTodoForm() {
    const [inputState, setInputState] = useState('');
    const { addTodo } = useContext(TodosContext);

    const handleInputChange = (e) => {
        setInputState(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.todoInput.value);
        setInputState('');
    }

    return (
        <div>
            <form class="form-inline" onSubmit={handleOnSubmit}>
                <input type='text' name='todoInput' value={inputState} onChange={handleInputChange} placeholder="Add todo here..." maxLength='255'/>
                <button class="plus-button"></button>
            </form>
        </div>
    )
}