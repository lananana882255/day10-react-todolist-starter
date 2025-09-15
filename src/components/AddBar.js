import {useEffect, useState} from "react";
import './AddBar.css'
import {addTodo} from "../apis/api";
import { Button, message } from 'antd';
export function AddBar(props) {
    const [todo, setTodo] = useState('');

    const handleClick= async()=> {
        if(todo!==''){
            const newTodo={done:false,text:todo}
            const response=await addTodo(newTodo).then(message.success('Add todo successfully!'))
            props.onChange(todo);
        }
        setTodo('');

    }

    function handleInput(event) {
        setTodo(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <div className={'add-bar-container'}>
            <input  placeholder={'please input todo...'} className={'input-todo'} type="text" value={todo} onChange={handleInput} onKeyDown={handleKeyDown}/>
            <Button className={'add-todo'} onClick={handleClick}>Add</Button>
        </div>
    );
}