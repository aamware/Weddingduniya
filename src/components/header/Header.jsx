import React from "react";
import logo from "../../images/logo.png";
import "../../style/__header.scss";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent nvbar">
      <nav class="navbar navbar-light bg-transparent nvbar__icon">
        <a class="navbar-brand nvbar__icon__a" href="/">
          <img src={logo} className="Header-logo" alt="logo"/>
        </a>
      </nav>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse nvbar2" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
          <li class="nav-item active ">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
