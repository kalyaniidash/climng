import React from "react";

const Navbar = () => (
  <nav class="navbar navbar-expand navbar-light text-dark h-auto button-2 ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Patient Management Project</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse py-0 " id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/" ><i class="fa fa-home"/>
Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Techs">Technology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/routes">Routes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vS7Z44Qmef7Zlw0_17uYIAe4QS8YFqrwS_eyehS2AcvGSlSSJmZZ4VTYqIfbIxdq2NuNI0TP1iNkZz7/pub" target="_blank" rel="noopener noreferrer">
               Document 
            </a>
          </li>
          <li class="nav-item">
                        <a className="nav-link" href="https://github.com/kalyaniidash/climng" target="_blank" rel="noopener noreferrer">
                             <i class="fab fa-github" style={{ fontSize: '25px' }}></i>
                        </a>
                    </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar