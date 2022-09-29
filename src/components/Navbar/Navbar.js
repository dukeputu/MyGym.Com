import React from 'react';
import logo3 from './logo3.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
             {/* <a className="navbar-brand" href="/#"><img src={logo3} alt=""  className='logo'/></a> */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                <a className="navbar-brand" href="/#"><img src={logo3} alt=""  className='logo'/></a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/#">Blog</a>
                            </li>
                       
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;