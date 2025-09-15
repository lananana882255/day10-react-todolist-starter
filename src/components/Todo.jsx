import {useEffect, useReducer} from "react";
import {initialState, todoReducer} from "../reducers/todoReducer";
import {TodoContext} from "../contexts/TodoContext";
import TodoList from "./TodoList";
import {AddBar} from "./AddBar";
import {getTodos} from "../apis/api";

export function Todo() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch}
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
        <TodoContext.Provider value={value}>
            <TodoList/>
        </TodoContext.Provider>
        <AddBar onChange={toggleAdd}></AddBar>
    </>;
}