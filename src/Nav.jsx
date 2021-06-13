import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand font-weight-bold text-success" href="#">
        CRUD-OPERATION
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link list-group-item-warning btn" href="#">
              <Link to="/">From</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link list-group-item-warning btn ml-4" href="#">
              <Link to="/showdata"> Show Data</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
