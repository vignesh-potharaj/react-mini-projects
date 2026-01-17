import {Outlet, Link} from 'react-router-dom';
import './Layout.css';

const projects =[
    {name: 'Counter', path: '/counter'}
]

function Layout() {
    return(
        <div className='layout'>
            <nav className='navbar'>
                <Link to='/' className="logo">React Projects</Link>
                <div className="nav-links">
                    <Link to="/">Home </Link>
                    {projects.map(proj=> (
                        <Link key = {proj.path} to={proj.path}>
                            {proj.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <main className='main-content'>
                <Outlet /> {}
            </main>
            <footer className="footer">
                <p>React Mini Projects . Built with Vite + Typescript </p>
            </footer>
        </div>
    )
}

export default Layout;