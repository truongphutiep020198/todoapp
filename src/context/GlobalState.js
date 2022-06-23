import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: [
        {
            id: uuidv4(),
            title: "Task1",
            creator: "Max1",
            status: "New",
            description: "This is task1111111111111111111111111111111111111111",
        },
        {
            id: uuidv4(),
            title: "Task2",
            creator: "Max2",
            status: "Doing",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task3",
            creator: "Max3",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task4",
            creator: "Max4",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Doing",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Doing",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Doing",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Doing",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task3",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task3",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task2",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task2",
            creator: "Max",
            status: "New",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task1",
            creator: "Max",
            status: "Done",
            description: "This is task",
        },
        {
            id: uuidv4(),
            title: "Task1",
            creator: "Max",
            status: "Doing",
            description: "This is task",
        },
    ],
    filter: "",
    searchValue: ""
}
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //  Actions
    const addTask = (task) => {
        dispatch({
            type: "ADD_TASK",
            payload: task
        })
    }
    const editTask = (task) => {
        dispatch({
            type: "EDIT_TASK",
            payload: task
        })
    }
    const deleteTask = (task) => {
        dispatch({
            type: "DELETE_TASK",
            payload: task
        })
    }
    const filterTask = (status) => {
        dispatch({
            type: "FILTER_TASK",
            payload: status
        })
    }
    const searchTask = (searchValue) => {
        dispatch({
            type: "SEARCH_TASK",
            payload: searchValue
        })
    }

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            filter: state.filter,
            searchValue: state.searchValue,
            addTask,
            editTask,
            deleteTask,
            filterTask,
            searchTask,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


