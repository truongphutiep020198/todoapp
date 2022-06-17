import React, { useContext, useState } from "react";
import Header from "components/home/header/Header";
import SideBar from "components/home/sidebar/SideBar";
import { Link } from "react-router-dom"
import "./addtask.css"
import { GlobalContext } from 'context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
    const [title, setTitle] = useState("")
    const [creator, setCreator] = useState("")
    const [description, setDescription] = useState("")
    const { addTask, tasks } = useContext(GlobalContext)
    console.log("🚀 ~ file: AddTask.jsx ~ line 14 ~ AddTask ~ addTask", tasks)
    const onSubmit = () => {
        const newTask = {
            id: uuidv4(),
            title: title,
            creator: creator,
            status: "New",
            description: description,
        }
        addTask && addTask(newTask)
    }
    return (
        <div className="container">
            <Header />
            <div className="main">
                <SideBar />
                <div className="add-task">
                    <form className="add-task-form" >
                        <label htmlFor="title">Title:</label>
                        <input type="text" placeholder="Place hoder" id="title"
                            value={title} onChange={(e) => { setTitle(e.target.value) }}
                        /> <br />
                        <label htmlFor="creator">Creator:</label>
                        <input type="text" placeholder="Name of creator" id="creator"
                            value={creator} onChange={(e) => { setCreator(e.target.value) }}
                        /> <br />
                        <label htmlFor="desciption">Desciption:</label>
                        <input type="text" placeholder="Desciption Details" id="desciption"
                            value={description} onChange={(e) => { setDescription(e.target.value) }}
                        /> <br />
                        <Link to="/">
                            <button type="submit"
                                onClick={onSubmit}
                            >Save</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default AddTask;