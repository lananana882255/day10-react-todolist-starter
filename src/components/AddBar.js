import {useEffect, useState} from "react";
import './AddBar.css'
import {addTodo} from "../apis/api";
export function AddBar(props) {
    const [todo, setTodo] = useState('');

    const handleClick= async()=> {
        if(todo!==''){
            const newTodo={done:false,text:todo}
            const response=await addTodo(newTodo)
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
            <button className={'add-todo'} onClick={handleClick}>Add</button>
        </div>
    );
}