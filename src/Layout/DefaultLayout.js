import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'todos'}>todos</NavLink></li>
                    <li><NavLink to={'about'}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>copyright</footer>
    </>;
}