import React, { useContext } from 'react'
import { TodosContext } from '../context/todo';
import LoadingUI from '../ui/loading';

export default function Header() {
    const { httpState } = useContext(TodosContext);

    return (
        <div class="header">
            <h1><i class="fas fa-tasks"></i> my to-do</h1>
            <div class="headerStatus"><LoadingUI isLoading={httpState.loading} /></div>
        </div>
    )
}
