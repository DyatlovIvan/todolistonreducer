import {todoLists} from "../App";


export const TodoListReducer = (state:Array<todoLists>,action:MainType)=>{
    switch (action.type){
        case 'REMOVE-TODOLIST':{
            console.log('removeList')
            return  state
        }
        case 'ADD-TODOLIST':{
            debugger
            let newState = [{id:action.NewTaskListID, title:action.title, filter: 'all'},...state]
            return newState
        }
        case 'UPDATE-TODOLIST':{
            console.log('removeList')
            return  state
        }
        case 'CHANGE-FILTER-TODOLIST':{
            console.log('removeList')
            return  state
        }
        default: return state
    }
}

type MainType = removeTodoListACType|AddNewTodoListACType|updateTodoListACType|changeFilterTodoListAC

type removeTodoListACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (todoListID:string)=>{
    return{
        type: 'REMOVE-TODOLIST',todoListID
    }as const
}

type AddNewTodoListACType = ReturnType<typeof AddNewTodoListAC>
export const AddNewTodoListAC = (NewTaskListID:string, title:string)=>{
    return{
        type:'ADD-TODOLIST',NewTaskListID, title
    }as const
}

type updateTodoListACType = ReturnType<typeof updateTodoListAC>
export const updateTodoListAC = (todoListID:string, title:string)=>{
    return{
        type:'UPDATE-TODOLIST',todoListID,title
    }as const
}

type changeFilterTodoListAC = ReturnType<typeof changeFilterTodoListAC>
export  const changeFilterTodoListAC = (todoListID:string,value:string)=>{
    return{
        type:'CHANGE-FILTER-TODOLIST',todoListID,value
    }as const
}