import React from "react";
const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning text-dark h-auto">
        <a class="navbar-brand" href="#">Clinic Management Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>  
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
               
               
            </ul>
           
        </div>
    </nav>

);


export default Navbar;