import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {ErrorPage} from "./components/ErrorPage";
import {Todo} from "./components/Todo";
import {DefaultLayout} from "./Layout/DefaultLayout";
import {TodoDetail} from "./components/TodoDetail";
import {DoneTodo} from "./components/DoneTodo";
import {useEffect, useReducer} from "react";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {getTodos} from "./apis/api";

const routes = [{
    path: '/',
    element: <DefaultLayout/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <h1>Home page</h1>,
        },
        {
            path: 'about',
            element: <h1>About Us</h1>
        },
        {
            path: 'todos',
            element: <Todo></Todo>
        },
        {
            path: 'todos/:key',
            element: <TodoDetail/>
        },
        {
            path: 'done',
            element: <DoneTodo/>
        }]
}];
const router = createBrowserRouter(routes);

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch}
    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'LOAD_TODOS', todos: response.data})
        })
    }, []);
    // the Hooks API manage component data state
    return (
        <div className="App">
            <TodoContext.Provider value={value}>
                <RouterProvider router={router}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
