import React from 'react'
import './Navbar.css';

export default function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <a className="navbar-brand" id='logo' href="/home">SingularSystems</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/custom-build">Custom PC's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/pre-built">Pre-Builts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workstation">Workstations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item first" href="/orders">Your Orders</a>
                                        </li>
                                        <li><a className="dropdown-item second" href="/warranty">Warranty</a>
                                        </li>
                                        <li><a className="dropdown-item second" href="/refund">Refund/Return Policy</a>
                                        </li>
                                        <li><a className="dropdown-item third" href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Login/Signup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><span class="material-symbols-outlined">
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
