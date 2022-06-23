import React, { useContext, useEffect, useState } from "react";
import "./showtask.css"
import { Link } from "react-router-dom"
import { GlobalContext } from 'context/GlobalState';
import ReactPaginate from 'react-paginate';


function Showtask() {
    const { tasks, filter, searchValue, filterTask } = useContext(GlobalContext)
    const [data, setData] = useState(tasks || []);

    useEffect(() => {
        const searchTasks = tasks.filter((task) => (
            (task.title.toLowerCase()).includes(searchValue.toLocaleLowerCase()) === true ||
            (task.creator.toLowerCase()).includes(searchValue.toLocaleLowerCase()) === true
        ))
        filterTask("")
        setData(searchTasks)
    }, [searchValue, tasks])

    useEffect(() => {
        switch (filter) {
            case 'all':
                setData(tasks);
                break;
            case 'New':
                setData(tasks.filter(task => task.status === filter));
                break;
            case 'Doing':
                setData(tasks.filter(task => task.status === filter));
                break;
            case 'Done':
                setData(tasks.filter(task => task.status === filter));
                break;
            default:
                setData(tasks);
                break;
        }
    }, [filter, tasks])

    // 
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <div className="show-task">
            <div className="task-list">
                {
                    currentItems.map(task => (
                        <div className="task-item" key={task.id}>
                            <Link to={`edit${task.id}`}>
                                <div className="task-item-title">Title: {task.title}</div>
                                <div className="task-item-creator">Creator: {task.creator}</div>
                                <div className={`task-item-status ${task.status.toLocaleLowerCase()}`}>Status: {task.status}</div>
                                <div className="task-item-line"></div>
                                <div className="task-item-description">
                                    <span>Descriptions:</span> <br />{task.description}
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </div>
    );
}

export default Showtask;