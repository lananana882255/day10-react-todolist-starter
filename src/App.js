import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {AddBar} from "./components/AddBar";

function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch}
    function toggleAdd(todo){
        dispatch({type:'ADD',text:todo})
    }
    return (
        <div className="App">
            <TodoContext.Provider value={value}>
                <TodoList/>
            </TodoContext.Provider>
            <AddBar onChange={toggleAdd}></AddBar>
        </div>
    );
}

export default App;
