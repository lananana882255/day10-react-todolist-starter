import {useState} from "react";
import './AddBar.css'
import {addTodo} from "../apis/api";
import {Button, message} from 'antd';
import Input from "antd/es/input/Input";

export function AddBar(props) {
    const [todo, setTodo] = useState('');

    const handleClick = async () => {
        if (todo !== '' && todo.trim() !== '') {
            const newTodo = {done: false, text: todo}
            const response = await addTodo(newTodo);
            props.onChange(response.data);
            message.success('Add todo successfully!')
        }
        setTodo('');

    }

    function handleInput(event) {
        setTodo(event.target.value);
    }


    return (
        <div className={'add-bar-container'}>
            <Input placeholder={'please input todo...'} className={'input-todo'} type="text" value={todo}
                   onChange={handleInput} onPressEnter={handleClick}/>
            <Button type="primary" className={'add-todo'} onClick={handleClick}>Add</Button>
        </div>
    );
}