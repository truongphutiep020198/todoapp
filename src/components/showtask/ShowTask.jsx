import React, { useContext, useEffect, useState } from "react";
import "./showtask.css"
import { Link } from "react-router-dom"
import { GlobalContext } from 'context/GlobalState';



function Showtask() {
    const { tasks, filter } = useContext(GlobalContext)
    const [data, setData] = useState(tasks || []);
    useEffect(() => {
        console.log(filter);
        switch (filter) {
            case 'all':
                setData(tasks);
                break;
            case 'New':
                setData(tasks.filter(task => task.status == filter));
                break;
            case 'Doing':
                setData(tasks.filter(task => task.status == filter));
                break;
            case 'Done':
                setData(tasks.filter(task => task.status == filter));
                break;
            default:
                setData(tasks);
                break;
        }
    }, [filter])

    return (
        <div className="show-task">
            {
                data.map(task => (
                    <div className="task-list" key={task.id}>
                        <Link to={`edit${task.id}`}>
                            <div>Title: {task.title}</div>
                            <div>Creator: {task.creator}</div>
                            <div>Status: {task.status}</div>
                            <div>Descriptions: {task.description}</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Showtask;