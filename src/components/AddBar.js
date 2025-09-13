import {useState} from "react";

export function AddBar(props) {
    const [todo, setTodo] = useState('');

    function handleClick(event) {
        setTodo('');
        props.onChange(todo);
    }

    function handleInput(event) {
        setTodo(event.target.value);
    }

    return (
        <div>
            <input type="text" value={todo} onInput={handleInput}/>
            <button onClick={handleClick}>add</button>
        </div>
    );
}