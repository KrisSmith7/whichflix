import React from "react";

const Header = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light text-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand" href="/">Watchflix</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
};

export default Header;