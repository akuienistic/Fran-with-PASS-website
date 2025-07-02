import { Link } from 'react-router-dom';

import './Header.css'


function Header(){
        return(
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-1 fixed-top custom-navbar">
                                <div class="container">
                                        <Link to="/" class="navbar-brand brand brand-name">FRAN ROBY</Link>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                                                <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navmenu">
                                                <ul class="navbar-nav mx-auto">
                                                        <li class="nav-items"><Link to="/" class="nav-link">Home</Link></li>
                                                        <li class="nav-items"><Link to="/AboutPass" class="nav-link">What happens at PASS</Link></li>
                                                        <li class="nav-items"><Link to="/Contact" class="nav-link">Contact me</Link></li>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                );
}

export default Header;