import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //There is lot function going on such as toggle, listing, editing, delete etc...
    //intially we will create a todo array which consist of object items in it.

    todos: [

        //    //Consist of object here like this, This is template afterall we will have only empty array

        {
            id: 1,
            todo: "Todo Msg",
            completed: "false" //Toggle
        }

    ],
    //Other Functions Here we only giving name not adding functionalitites
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }

})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider