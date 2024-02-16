import React from "react";
const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bgcolor text-dark h-auto">
      <img src="https://dynamic.brandcrowd.com/preview/logodraft/86703d04-e5e9-43d9-a64f-04458484a28f/image/large.png" height="50" width="40" class="img-fluid" />
        <a class="navbar-brand" href="#">Clinic</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="nav justify-content-center class">
            <li class="nav-item">
              <a class="nav-link active" href="#HOME">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#FEATURE">FEATURE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ABOUT">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#PRICING">PRICING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </div>
    </nav>

);


export default Navbar;