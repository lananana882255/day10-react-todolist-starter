import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function DoneTodo() {
    const {state, dispatch} = useContext(TodoContext)
    const doneTodos = state.filter(todo => todo.done === true)
    return <div>
        {
            doneTodos.length < 1 ?
                (<p>Add the things you need to do today...</p>) :
                (doneTodos.map(({id, text, done}) => {
                    return <div className={'todo-item-container'}>
                        <div className={'todo-item'}>{text}</div>
                    </div>
                }))
        }
    </div>;
}