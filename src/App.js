import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {AddBar} from "./components/AddBar";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li>todoList</li>
                    <li><NavLink to={'about'}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>xxx</h1>
            <Outlet></Outlet>
        </main>
        <footer>copyright</footer>
    </>;
}

const routes=[{
    path:'/',
    element:<DefaultLayout/>,
    children:[{
        path:'/',
        element:<h1>Home page</h1>,
    },
        {
            path:'about',
            element: <h1>About Us</h1>
        }]
}];
const router=createBrowserRouter(routes);

function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch}
    function toggleAdd(todo){
        dispatch({type:'ADD',text:todo})
    }
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
            {/*<h1>Todo List</h1>*/}
            {/*<TodoContext.Provider value={value}>*/}
            {/*    <TodoList/>*/}
            {/*</TodoContext.Provider>*/}
            {/*<AddBar onChange={toggleAdd}></AddBar>*/}
        </div>
    );
}

export default App;
