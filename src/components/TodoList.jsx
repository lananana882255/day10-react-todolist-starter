import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css'
import {changeTodo, deleteTodo} from "../apis/api";
import {Button, message} from "antd";
import {DeleteOutlined, EditOutlined, SnippetsOutlined} from "@ant-design/icons";

import {EditModal} from "./EditModal";
import {useNavigate} from "react-router";


const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState(0);
    const navigate=useNavigate();
    const toggleDone = async (id) => {
        const action = {type: 'DONE', id: id}
        const doneTodo = state.find(todo => todo.id === id)
        const newTodo = {...doneTodo, done: !doneTodo.done}
        const response = await changeTodo(id, newTodo)
        if (newTodo.done) {
            message.success('Congratulaions!')
        }
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
                    (<h2>Add the things you need to do today...</h2>) :
                    (state.map(({id, text, done}) => {
                        return <div className={'todo-item-container'}>
                            <div className={`todo-item ${done ? 'done' : ''}`}
                                 onClick={() => toggleDone(id)}>{text}</div>
                            <Button type="text" style={{fontSize: '18px',marginLeft:'5px'}} icon={<EditOutlined/>}
                                    onClick={() => toggleEdit(id)} className="todo-action-btn"></Button>
                            <SnippetsOutlined style={{fontSize: '18px',marginLeft:'5px'}} onClick={()=>navigate(`/todos/${id}`)}>> </SnippetsOutlined>
                            <Button type="text" danger style={{fontSize: '18px',marginLeft:'5px'}} icon={<DeleteOutlined/>}
                                    onClick={() => toggleDelete(id)} className="todo-action-btn"></Button>
                        </div>
                    }))
            }
            <EditModal value={editId} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
        </div>
    );
}

export default TodoList