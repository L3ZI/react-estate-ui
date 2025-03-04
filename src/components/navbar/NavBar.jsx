import './navbar.scss';
import {useState} from "react";

function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className='left'>
                <a href='/' className='logo'>
                    <img src="/logo.png" alt="logo"/>
                    <span>Lama Estate</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className='right'>
                <a href='/'>Sign in</a>
                <a href='/' className='register'>Sing up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="menu" onClick={()=>setOpen(!open)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign in</a>
                    <a href='/'>Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;