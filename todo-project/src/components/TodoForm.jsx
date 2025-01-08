import React from 'react'
import { useState, useEffect } from 'react'
import { useTodo } from '../contexts/TodoContext'


function TodoForm() {
    const [todo, setTodo] = useState("");   
    const { addTodo } = useTodo(); //using the useTodo hook to get the addTodo function from the context
const add = (e) => {
    e.preventDefault();  //preventing the default behaviour of the form
    if (!todo) return;  //checking if the todo is empty or not
    addTodo({todo:todo,complwted:false });  //calling the addTodo function from the context and passing the todo object
setTodo("");  //resetting the todo to empty string
}

    return (
        <form onSubmit ={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                 value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

