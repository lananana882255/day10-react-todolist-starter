import {useContext, useEffect, useReducer} from "react";
import TodoList from "./TodoList";
import {AddBar} from "./AddBar";
import {getTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";

export function Todo() {
    const {state, dispatch} = useContext(TodoContext)
    useEffect(() => {
        getTodos().then(response=>{
            dispatch({type:'LOAD_TODOS',todos:response.data})
        })
    }, []);
    function toggleAdd(todo) {
        dispatch({type: 'ADD', text: todo})
    }

    return <>
        <h1>Todo List</h1>
        <TodoList/>
        <AddBar onChange={toggleAdd}></AddBar>
    </>;
}