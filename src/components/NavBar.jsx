import React from "react";


 const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">DAMS Power Equiptment Providers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Equipment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Customers</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <br></br>
            <br></br>
        </nav>

        
    )
 }

 export default NavBar;