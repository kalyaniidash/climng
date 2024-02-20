import React from "react";

const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-light text-dark h-auto button-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Patient Management Project</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Home.js">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/routes">
              <i class="fas fa-route"></i> Routes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vT-LSOv5WkrdtR9I1qZINS7yLbccGkn8mqfyMmfo9bUQD7hAh8YfUNRnU-53FBCGdMmdfO1TbiQE9SU/pub" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file"></i> Document
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar