import React from "react";
import "./header.css"
import { Link } from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <Link to="/add">
                <button className="header-createtask">Create a new Tag</button>
            </Link>
            <div className="header-search">
                <input type="text" placeholder="Type something to search" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;