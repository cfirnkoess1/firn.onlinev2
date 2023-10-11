
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
return (
    
    <nav className = 'navbar navbar-expand-lg navbar -light bg-light' padding = "10wh">
    <span className = 'navbar-brand' href ='#'>
        Welcome to my page
    </span>
    <button className = 'navbar-toggler'
    type = 'button'
    data-toggle='collapse'
    data-targets = '#navbarNavAltMarkup'
    aria-controls ='navbarNavAltMarkup'
    aria-expanded = 'false'
    aria-label = 'Toggle navigation'
    >
        <span className ='navbar-toggler-icon'></span>
    </button>
    <div className = 'collapse navbar-collapse' id = 'navbarNavAltMarkup'>
        <div className = 'navbar-nav'>
            <span className = 'nav-item nav-link active' href='#'>
                <Link to='/'>Main</Link>
            </span>
            <span className = 'nav-item nav-link' href = '/new'>
                <Link to ='/new' >Click! If you dare</Link>
               


            </span>
            
            
        </div>
    </div>

    </nav>
);
};

export default NavBar;