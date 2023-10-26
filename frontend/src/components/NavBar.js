import React from 'react'
import './Navbar.css';

export default function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <a className="navbar-brand" id='logo' 
                        href="/">SingularSystems</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/platform">Custom PC's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/pre-built">Pre-Builts</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/workstation">Workstations</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/support">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login/Signup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart"><span class="material-symbols-outlined">
                                        shopping_cart
                                    </span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
