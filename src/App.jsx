import { useState } from 'react'
import Todo from './components/Todo'
import TodoForms from './components/TodoForms'
import Search from './components/search'

import './App.css'




function App() {
 const [todos, setTodos] = useState([
  {
    id: 1,
    text: "criar funcionalidade x no sistema",
    catergory: "trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para a academia",
    catergory: "pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    catergory: "estudos",
    isCompleted: false,
  },
 ]);

 


const [search, setSearch] = useState("");

 const addTodo = (text , catergory) => {
    const newTodos = [...todos, 
    {
      id: Math.floor(Math.random() * 10000),
      text,
      catergory,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
 }

 const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
 }

 const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

  setTodos(newTodos);
 }

  return (
   <div className='app'>
    <h1>Lista de tarefas</h1>
    < Search search={search} setSearch={setSearch}/>
    <div className="todo-list">
      {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (

       <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />

      ))}
    </div>
    <TodoForms addTodo={addTodo} />
   
   </div>
  )
}

export default App
