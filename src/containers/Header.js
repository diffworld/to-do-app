import React, { useContext } from 'react'
import { TodosContext } from '../context/todo';
import LoadingUI from '../ui/loading';

export default function Header() {
    const { httpState } = useContext(TodosContext);

    return (
        <div>
            <h1><i class="fas fa-tasks"></i> my to-do</h1>
            <LoadingUI isLoading={httpState.loading} />
        </div>
    )
}
