import React from 'react'
import todoProps from './types'
import { deleteTodo } from './api'

interface todoItemProps {
    todo: todoProps,
    setTodos: React.Dispatch<React.SetStateAction<todoProps[] | []>>
}

export default function TodoItem({todo, setTodos}: todoItemProps) {

  const handleClickDelete = ()=> {
    deleteTodo(todo.id);
    setTodos(prev => {
      const updTodos = [...prev];
      const index = updTodos.findIndex(item => item.id===todo.id);
      updTodos.splice(index, 1);
      return updTodos
    })
  }
  return (
    <li className={`flex flex-col w-full p-[15px] ${todo.completed ? 'bg-green-100' : 'bg-yellow-50'} rounded-[5px] md:w-[calc((100%-20px)/2)]  xl:w-[calc((100%-40px)/3)]`}>
      <p className='font-semibold text-center text-gray-700 mb-[20px]'>{todo.title}</p>
      <div className='flex justify-between mt-auto'>
        <p>{todo.completed ? 'Completed' : 'In progress'}</p>
        <button className='pt-[2px] pb-[2px] pl-[10px] pr-[10px] border border-gray-500 rounded-[10px] cursor-pointer' type='button' onClick={handleClickDelete}>Delete</button>
      </div>
    </li>
  )
}
  
