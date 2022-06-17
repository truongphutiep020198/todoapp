const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const newArr = [...state.tasks, action.payload]
            return {
                ...state,
                tasks: newArr,
            }
        case "EDIT_TASK":
            const updateTask = action.payload;
            const updateTasks = state.tasks.map(task => {
                if (task.id === updateTask.id) {
                    return updateTask;
                }
                return task;
            })
            return {
                ...state,
                tasks: updateTasks,
            }
        case "DELETE_TASK":
            const DeletedTask = action.payload
            const currentTask = state.tasks
            const newTasks = currentTask.filter(task => { return task.id !== DeletedTask.id })
            return {
                ...state,
                tasks: newTasks
            }
        case "FILTER_TASK":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}
export default AppReducer