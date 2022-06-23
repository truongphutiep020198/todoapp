import Header from "components/home/header/Header";
import SideBar from "components/home/sidebar/SideBar";
import React, { useContext, useState, useEffect } from "react";
import "./edittask.css"
import { GlobalContext } from 'context/GlobalState';
import { Link, useParams, Navigate } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';




function EditTask() {
    const { tasks, editTask, deleteTask } = useContext(GlobalContext)

    const statusList = [
        {
            id: 1,
            name: "New"
        },
        {
            id: 2,
            name: "Doing"
        },
        {
            id: 3,
            name: "Done"
        }
    ]
    const [status, setStatus] = useState("New")
    const [selectedTask, setSelectedTask] = useState({
        id: "",
        title: "",
        creator: "",
        description: "",
    })
    const editTaskList = tasks.map(task => {
        return {
            ...task,
            status: status
        }
    })

    const params = useParams();
    useEffect(() => {
        const taskId = params.id;
        const selectedTask = editTaskList.find(task => task.id === taskId)
        console.log(selectedTask);
        setSelectedTask(selectedTask)
    }, [params.id, tasks,])

    const onSubmit = () => {
        const updateStatusSelectedTask = {
            ...selectedTask,
            status: status
        }
        editTask(updateStatusSelectedTask)
    }
    const handleDelete = () => {
        deleteTask(selectedTask)
    }
    const handleReset = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        setSelectedTask({
            ...selectedTask,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="container">
            <Header />
            <div className="main">
                <SideBar />
                <div className="edit-task">
                    <form className="edit-task-form" >
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder="enter title" id="title"
                                name="title"
                                value={selectedTask?.title}
                                onChange={onChange}
                            /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="creator">Creator</label>
                            <input type="text" placeholder="Name of creator" id="creator"
                                name="creator"
                                value={selectedTask?.creator}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desciption">Desciption</label>
                            <input type="text" placeholder="Desciption Details" id="desciption"
                                name="description"
                                value={selectedTask?.description}
                                onChange={onChange}
                            />
                        </div>
                        {/* <div className="form-group"> */}
                        <div className="status-list">
                            {
                                statusList.map(item => (
                                    <div className="status-item" key={item.id}>
                                        <input
                                            type="radio"
                                            checked={status === item.name}
                                            onChange={() => setStatus(item.name)}
                                        />
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                        {/* </div> */}
                        <div className="form-group">
                            <Link to="/">
                                <button type="submit"
                                    onClick={onSubmit}
                                >Save</button>
                            </Link>
                            <button onClick={handleReset}>Reset</button>
                            <Link to="/">
                                <button onClick={handleDelete}>Detele</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditTask;