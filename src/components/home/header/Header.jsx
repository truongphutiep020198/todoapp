import React, { useContext } from "react";
import "./header.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { GlobalContext } from "context/GlobalState";
import { useRef } from "react";


function Header() {
    const { tasks, searchTask } = useContext(GlobalContext)

    const [searchValue, setSearchValue] = useState("")
    const inputRef = useRef()
    const handleSearchTask = () => {
        searchTask(searchValue)
        setSearchValue("")
        inputRef.current.focus()
    }
    return (
        <div className="header">
            <Link to="/add">
                <button className="header-createtask">Create a new Task</button>
            </Link>
            <div className="header-search">
                <input type="text" placeholder="Type something to search"
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => { setSearchValue(e.target.value) }}
                />
                <Link to="/">
                    <button type="submit"
                        onClick={handleSearchTask}
                    >Search</button>
                </Link>
            </div>
        </div >
    );
}

export default Header;