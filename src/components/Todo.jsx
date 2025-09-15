import {useContext, useEffect, useReducer} from "react";
import TodoList from "./TodoList";
import {AddBar} from "./AddBar";
import {getTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";

export function Todo() {
    const {state, dispatch} = useContext(TodoContext)

    function toggleAdd(todo) {
        dispatch({type: 'ADD', todo: todo})
    }

    return <>
        <h1>Todo List</h1>
        <TodoList/>
        <AddBar onChange={toggleAdd}></AddBar>
    </>;
}