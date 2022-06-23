import { GlobalContext } from "context/GlobalState";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"

import "./sidebar.css"


function SideBar() {
    const { tasks, filterTask, searchTask } = useContext(GlobalContext)

    const handleFilterAllTask = () => {
        filterTask("all")
        searchTask("")
    }
    const handleFilterNewTask = () => {
        filterTask("New")
        searchTask("")
    }

    const handleFilterDoingTask = () => {
        filterTask("Doing")
        searchTask("")
    }

    const handleFilterDoneTask = () => {
        filterTask("Done")
        searchTask("")
    }

    return (
        <div className="header-sidebar">
            <Link to="/">
                <div className="btn btn-alltask">
                    <button onClick={handleFilterAllTask}>All Task</button>
                </div>
                <div className="btn btn-newtask">
                    <button onClick={handleFilterNewTask}>New Task</button>
                </div>
                <div className="btn btn-doingtask">
                    <button onClick={handleFilterDoingTask}>Doing Task</button>
                </div>
                <div className="btn btn-donetask">
                    <button onClick={handleFilterDoneTask}>Done Task</button>
                </div>
            </Link>
        </div>
    );
}

export default SideBar;