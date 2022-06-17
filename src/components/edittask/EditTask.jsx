import Header from "components/home/header/Header";
import SideBar from "components/home/sidebar/SideBar";
import React, { useContext, useState, useEffect } from "react";
import "./edittask.css"
import { GlobalContext } from 'context/GlobalState';
import { Link, useParams } from "react-router-dom"
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
        const selectedTask = tasks.find(task => task.id === taskId)
        setSelectedTask(selectedTask)
    }, [params.id, tasks])

    const onSubmit = () => {
        const updateStatusSelectedTask = {
            ...selectedTask,
            status: status
        }
        editTask(updateStatusSelectedTask)
    }
    const onDelete = () => {
        deleteTask(selectedTask)
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
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="enter title" id="title"
                            name="title"
                            value={selectedTask?.title}
                            onChange={onChange}
                        /> <br />
                        <label htmlFor="creator">Creator</label>
                        <input type="text" placeholder="Name of creator" id="creator"
                            name="creator"
                            value={selectedTask?.creator}
                            onChange={onChange}
                        /> <br />
                        <label htmlFor="desciption">Desciption</label>
                        <input type="text" placeholder="Desciption Details" id="desciption"
                            name="description"
                            value={selectedTask?.description}
                            onChange={onChange}
                        /> <br />
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
                        <br />
                        <Link to="/">
                            <button type="submit"
                                onClick={onSubmit}
                            >Save</button>
                            <button onClick={onDelete}>Detele</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditTask;