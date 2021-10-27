import {TasksType} from "../App";

export const TaskReducer = (state:TasksType,action:any)=>{
   switch (action.type) {
       case 'ADD-TASK-FOR-NEW-TODOLIST':{
           return state
       }
       default:return state
   }
}

//
// export const addTaskForNewTodolist = ()=>{
//     return{
//
//     }
// }