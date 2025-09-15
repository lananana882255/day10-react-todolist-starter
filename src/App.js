import './App.css';
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./components/ErrorPage";
import {Todo} from "./components/Todo";
import {DefaultLayout} from "./Layout/DefaultLayout";

function TodoDetail() {
    const {key}=useParams();
    console.log(key);
    return <h1>this is: {key} detail</h1>;
}

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
        }]
}];
const router = createBrowserRouter(routes);

function App() {
    // the Hooks API manage component data state
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
