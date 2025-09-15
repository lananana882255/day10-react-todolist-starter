import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css'
import {changeTodo, deleteTodo} from "../apis/api";
import {message} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)

    const toggleDone = async (id) => {
        const action = {type: 'DONE', id: id}
        dispatch(action)
        const doneTodo = state.find(todo => todo.id === id)
        const newTodo = {...doneTodo, done: !doneTodo.done}
        const response = await changeTodo(id, newTodo)
    }

    const toggleDelete = async (id) => {
        const action = {type: 'DELETE', id: id}
        dispatch(action)
        const response = await deleteTodo(id).then(message.success('Delete todo successfully!'))
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