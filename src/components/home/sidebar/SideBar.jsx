import { GlobalContext } from "context/GlobalState";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"

import "./sidebar.css"


function SideBar() {
    const { tasks, filterTask } = useContext(GlobalContext)

    const handleFilterAllTask = () => {
        filterTask("all")
    }
    const handleFilterNewTask = () => {
        filterTask("New")
    }

    const handleFilterDoingTask = () => {
        filterTask("Doing")
    }

    const handleFilterDoneTask = () => {
        filterTask("Done")
    }

    return (
        <div className="header-sidebar">
            <Link to="/" className="button">
                <button onClick={handleFilterAllTask}>All Task</button>
                <button onClick={handleFilterNewTask}>New Task</button>
                <button onClick={handleFilterDoingTask}>Doing Task</button>
                <button onClick={handleFilterDoneTask}>Done Task</button>
            </Link>
        </div>
    );
}

export default SideBar;