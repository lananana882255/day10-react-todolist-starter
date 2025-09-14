import {useState} from "react";
import './AddBar.css'
export function AddBar(props) {
    const [todo, setTodo] = useState('');

    function handleClick() {
        setTodo('');
        if(todo!==''){ props.onChange(todo);}
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
            <input  placeholder={'please input todo...'} className={'input-todo'} type="text" value={todo} onInput={handleInput} onKeyDown={handleKeyDown}/>
            <button className={'add-todo'} onClick={handleClick}>Add</button>
        </div>
    );
}