'use client'

import { useEffect, useState } from "react"
import {getTodos} from "./components/api";
import Notiflix from "notiflix";
import TodoList from "./components/todoList";
import CreateBtn from "./components/createBtn";
import { AxiosError } from "axios";
import AddTodoForm from "./components/addTodoForm";
import Modal from "./components/modal";
import todoProps from "./components/types";

export default function Home() {
  const [todos, setTodos] = useState<todoProps[] | []>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  useEffect(()=> {    
      const fetchData = async () => {
        try {
          const dataTodos = await getTodos();
          setTodos(dataTodos);
        }
        catch (error) {
            const err = error as AxiosError;
            Notiflix.Notify.failure(err.message)
        }
      }
      fetchData()
  }, [])
 return (
    <div>
      <h1 className="text-[28px] text-center mb-[20px] md:text-[36px] xl:text-[48px]">Your todo App</h1>
      <CreateBtn openModal={handleToggleModal} />
      <TodoList todos={todos} setTodos={setTodos}/>
      {isModalOpen && <Modal>
        <AddTodoForm closeModal={handleToggleModal} setTodos={setTodos}/>
      </Modal>}
    </div>
 )
}
