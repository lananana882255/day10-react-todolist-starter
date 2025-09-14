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
            {
                state.length < 1 ?
                    (<p>Add the things you need to do today...</p>) :
                    (state.map(({id, text, done}) => {
                        return <div className={'todo-item-container'}>
                            <div className={`todo-item ${done ? 'done' : ''}`}
                                 onClick={() => toggleDone(id)}>{text}</div>
                            <button className={'delete'} onClick={() => toggleDelete(id)}>X</button>
                        </div>
                    }))
            }
        </div>
    );
}

export default TodoList