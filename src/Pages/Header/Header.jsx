import React from 'react';
import { Button, Container } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css'
const Header = () => {
    return (
        <>
          <header style={{ background: "#000" }}>
            <nav className="navbar navbar-expand-lg navbar-sticky">
            <div className="container">
                <a className="navbar-brand logoName" href="#">
                <img
                    decoding="async"
                    src="/icons/vector.svg"
                    className="img-fluid w-25 navbar-brand-regular px-3"
                />
                <img
                    decoding="async"
                    src="/icons/brand.svg"
                    className="img-fluid navbar-brand-sticky"
                />
                BachelorsCave
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="ti-align-justify navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a
                        className="nav-link scroll active"
                        aria-current="page"
                        href="#home"
                    >
                        <form action="" className="">
                        <img src="/icons/vector1.svg" alt="" />
                        </form>
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: "bold",
                        }}
                    >
                        I’m an owner <KeyboardArrowDownIcon />
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <a className="dropdown-item" href="#">
                        List Property
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                        Login
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                        Signup
                        </a>
                    </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link scroll" href="#app-screenshots">
                        <Button
                        variant="outlined"
                        style={{
                            color: "#fff",
                            borderColor: "#fff",
                            padding: "0px 15px",
                            textTransform: "capitalize",
                        }}
                        >
                        Register
                        </Button>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>  
        </>
    )
}


export default Header