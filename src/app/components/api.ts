import axios, { AxiosError} from "axios";
import Notiflix from "notiflix";
import todoProps from "./types";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos/'

export async function getTodos (): Promise <todoProps []>{
    try {
        const response = await axios.get('?_limit=10');
        return response.data
    }
    catch (error) {
        const err = error as AxiosError;
        Notiflix.Notify.failure(err.message);
        throw err
    }
}

export async function addTodo (userId: number, title: string, isCompleted: boolean ): Promise <todoProps> {
    try {
        const response = await axios.post('', {userId, title, completed: isCompleted });
        Notiflix.Notify.success("New todo have added")
        return response.data
    }
    catch (error) {
        const err = error as AxiosError;
        Notiflix.Notify.failure(err.message);
        throw err
    }
}

export async function deleteTodo (id: number): Promise<void> {
    try {
        await axios.delete(`${id}`);
        Notiflix.Notify.success("The todo have deleted")
    }
    catch (error) {
        const err = error as AxiosError;
        Notiflix.Notify.failure(err.message)
        throw err
    }
}