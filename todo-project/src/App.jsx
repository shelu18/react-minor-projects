import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'



export default function App() {
  const [todos, setTodos] = useState([]); //state to store todos

const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])}// here we are using the concept the concept of the prev beacuse we want the previous to dos in the lisst and we are just spreading them and adding the new todo in the list again thad todo is not just a single toso but contains the id and the todo and the completeTodo // that id wala objec is todo itself and then prev both are spreading 

    
const updateTodo = (todo, id) => {
  setTodos((prev) => prev.map((item) => (item.id === id ? todo : item))); // here we are using the map function to map over the todos and then we are checking if the id of the todo is equal to the id of the todo that we want to update then we are updating the todo and if not then we are just returning the todo as it is  ... if else bhi laga sakte hai......
};
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((item) => item.id !== id));  //isme apan kya kar sakte he ki prev matlab us arrayme todo wale jitne bhi object he unka access hai  ab uspe call back laga ke unhe accesss karke kuch bhi logic laga sakte he 
                                                                //jese delete me bas id filter karwali ki jo id match nahi ho rhi wo lodad mat karo
};
const toggleComplete = (id) => {
  setTodos((prev)=>(prev.map((item)=>item.id===id?{...item, completed:!item.completed}:item)));//isme apan kya kar sakte he ki prev matlab us arrayme todo wale jitne bhi object he unka access hai  ab uspe call back laga ke unhe accesss karke kuch bhi logic laga sakte he
};


// creating local storage to store the todos
useEffect(() => {     //useEffect is used to run the code only once when the component is mounted and ye local storage se query karke load kar dega 
  const data = localStorage.getItem("todos");    //local storage se data get karne ke liye we can directly use the getItem method and pass the key of the data that we want to get we also have access to locastorage 
 
  if (data) {
    setTodos(JSON.parse(data));          //set karte time data json me convert karna parta hai kiuki ye string me store hota hai
  }
}, []);

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos)); //local storage me set karne ke liye we can use the setItem method and pass the key and the value that we want to store in the local storage
}, [todos]);







  return (
    <TodoProvider value ={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}    >
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                    <TodoItem todo={todo} />
                   
                </div>
            ))}
              </div>
        
        </div>
    </div>

</TodoProvider>
  )


}