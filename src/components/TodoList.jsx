import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css'
import {changeTodo, deleteTodo} from "../apis/api";
import {message} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

import {EditModal} from "./EditModal";


const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId,setEditId]=useState(0);
    const toggleDone = async (id) => {
        const action = {type: 'DONE', id: id}
        const doneTodo = state.find(todo => todo.id === id)
        const newTodo = {...doneTodo, done: !doneTodo.done}
        const response = await changeTodo(id, newTodo)
        dispatch(action)
    }

    const toggleDelete = async (id) => {
        const action = {type: 'DELETE', id: id}
        dispatch(action)
        const response = await deleteTodo(id);
        message.success('Delete todo successfully!')
    }

    function toggleEdit(id) {
        setEditId(id);
        setIsModalOpen(true);
    }

    function handleOk() {
        setIsModalOpen(false);

    }

    function handleCancel() {
        setIsModalOpen(false);

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
                            <EditOutlined onClick={() => toggleEdit(id)}>Edit</EditOutlined>
                            <DeleteOutlined onClick={() => toggleDelete(id)}>X</DeleteOutlined>
                        </div>
                    }))
            }
            <EditModal value={editId} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
        </div>
    );
}

export default TodoList