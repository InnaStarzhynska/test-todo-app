import React from 'react'
import todoProps from './types'
import TodoItem from './todoItem'


interface todoListProps {
    todos: [] | todoProps [],
    setTodos: React.Dispatch<React.SetStateAction<todoProps[] | []>>
}

export default function TodoList({todos = [], setTodos}: todoListProps) {
  return (
    <ul className='flex flex-col gap-[20px] flex-wrap md:flex-row'>
        {todos.map(item => {
            return <TodoItem key={item.id} todo={item} setTodos={setTodos}/>
        })}  
    </ul>
  )
}
