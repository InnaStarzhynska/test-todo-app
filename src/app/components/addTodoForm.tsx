import React, { ChangeEvent, FormEvent, useState } from 'react'
import { addTodo } from './api';
import Notiflix from 'notiflix';
import todoProps from './types';

interface AddTodoFormProps {
    closeModal: () => void,
    setTodos:  React.Dispatch<React.SetStateAction<todoProps[]>>
}

export default function AddTodoForm({closeModal, setTodos}: AddTodoFormProps) {
    const [title, setTitle] = useState ('');
    const [isCompleted, setIsCompleted] = useState(false);
    const userId = 10;

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.target.value)
    }

    const hadleChageCompleted = (e: ChangeEvent<HTMLInputElement>) => {
        setIsCompleted(e.target.checked)
    }

    const handleSubmit = async (e: FormEvent)=> {
        e.preventDefault();
        if (title.trim()) {
            const response = await addTodo(userId, title, isCompleted);
            setTodos((prev: todoProps[])  => [...prev, response]);
            setTitle('');
            setIsCompleted(false);
            closeModal();
        } else {
            Notiflix.Notify.info("Please, add the title")
        }
    }

  return (
    <form className='w-full border p-[15px]' onSubmit={handleSubmit}>
        <p className='text-[24px] text-center mb-[20px] '>Add new todo</p>
        <label className='flex flex-col mb-[10px]'>
            Title
            <input className='border rounded-[3px] w-full p-[3px]' type="text" value={title} onChange={handleChangeTitle}/>
        </label>
        <label className='flex items-center mb-[20px]'>
            Completed
            <input className='ml-[5px]' type="checkbox" checked={isCompleted} onChange={hadleChageCompleted} />
        </label>
        <div className='flex justify-evenly'>
            <button className='block pt-[2px] pb-[2px] pl-[10px] pr-[10px] mb-[15px] border border-gray-500 rounded-[10px] cursor-pointer hover:bg-gray-200' type='submit'>OK</button>
            <button className='block pt-[2px] pb-[2px] pl-[10px] pr-[10px] mb-[15px] border border-gray-500 rounded-[10px] cursor-pointer  hover:bg-gray-200' type='button' onClick={()=>{closeModal()}}>Cancel</button>
        </div>

    </form>
  )
}
