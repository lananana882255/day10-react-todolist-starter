import {useContext, useEffect, useState} from "react";
import {message, Modal} from "antd";
import {TodoContext} from "../contexts/TodoContext";
import {changeTodo} from "../apis/api";
import Input from "antd/es/input/Input";

export function EditModal(props)  {
    const {state, dispatch} = useContext(TodoContext)
    const [editText, setEditText] = useState('');
    const targetTodo=state.find(todo=>todo.id===props.value);
    useEffect(() => {
        if (targetTodo) {
            setEditText(targetTodo.text);
        }
    }, [targetTodo, props.open]);

    const handleSave=async ()=> {
        if(editText.trim()!==''){
            dispatch({type:'EDIT',id:props.value,text:editText});
            const updateTodo={...targetTodo,text:editText}
            await changeTodo(props.value,updateTodo);
            message.success('Update todo successfully!')
            props.onOk();
        }
    }

    function handleCancel() {
        setEditText(targetTodo ? targetTodo.text : '');
        props.onCancel();
    }

    if(!targetTodo){
        return;
    }
    return <Modal  open={props.open} onOk={handleSave}
                   onCancel={handleCancel}>
        <h2>{targetTodo.text}</h2>
        <Input placeholder="Edit your todo..." value={editText} onChange={(e)=>setEditText(e.target.value)} onPressEnter={handleSave}></Input>
    </Modal>;
}