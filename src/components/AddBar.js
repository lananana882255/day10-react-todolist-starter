import {useState} from "react";
import './AddBar.css'
export function AddBar(props) {
    const [todo, setTodo] = useState('');

    function handleClick(event) {
        setTodo('');
        if(todo!==''){ props.onChange(todo);}
    }

    function handleInput(event) {
        setTodo(event.target.value);
    }

    return (
        <div className={'add-bar-container'}>
            <input  className={'input-todo'} type="text" value={todo} onInput={handleInput}/>
            <button className={'add-todo'} onClick={handleClick}>Add</button>
        </div>
    );
}