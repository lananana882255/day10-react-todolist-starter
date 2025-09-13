import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css'

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)

    function toggleDone(id) {
        const action = {type: 'DONE', id: id}
        dispatch(action)
    }

    function toggleDelete(id) {
        const action = {type: 'DELETE', id: id}
        dispatch(action)
    }

    return (
        <div className={'todo-group'}>
            <h1>Todo List</h1>
            {
                state.map(({id, text, done}) => {
                    return <div>
                        <div className={`todo-item ${done ? 'done' : ''}`} onClick={() => toggleDone(id)}>{text}</div>
                        <button className={'delete'} onClick={()=>toggleDelete(id)}>Delete</button>
                    </div>
                })
            }
        </div>

    );
}

export default TodoList