import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: [],
    filter: "all"
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
        console.log("🚀 ~ file: GlobalState.js ~ line 38 ~ filterTask ~ status", status)
        dispatch({
            type: "FILTER_TASK",
            payload: status
        })
    }

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            filter: state.filter,
            addTask,
            editTask,
            deleteTask,
            filterTask,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


