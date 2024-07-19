import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import TodoItems from './TodoItems';
import AddItem from './AddItem';
import { Stack } from '@mui/material';
import {v4 as uuid} from 'uuid'

function TodoInitialize(){
    const initialTodos = JSON.parse(localStorage.getItem('todos'))
    if(!initialTodos) return []
    return initialTodos
}


export default function Todos() {
  const [todos, setTodos] = useState(TodoInitialize);

  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  function isComplete(id){
    setTodos(currTodo=>{
        return currTodo.map(ele=>{
            if(ele.id===id){
                // console.log(ele.completed)
                // console.log(ele)
                return {...ele, completed:!ele.completed}
            }else{
                // console.log({...ele})
                return ele
            }
        })
    })

  }

  function removeTodo(id){
    
    setTodos(currTodo=>(
        currTodo.filter(ele=> ele.id!==id)
    ))
  }

  function addTodo(text){
    setTodos(currTodo=>{
        return [...currTodo,{id:uuid(),items:text,completed:false}]
    })
  }

  return (
    <Stack>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                todos.map((ele) => {
                    return <TodoItems toggleComplete={isComplete} todos={ele} key={ele.id} removeTodo={removeTodo} />
                })
            }
        <AddItem addItem={addTodo} sx={{width: '100%'}}/>
        </List>
    </Stack>
  );
}
