import axios from "axios";

const instance=axios.create({baseURL:'https://68c78c8d5d8d9f51473222a3.mockapi.io/api'});

export const getTodos=async ()=>{
    return await instance.get('/todos')
}

export const addTodo=async (todo)=>{
    return await instance.post('/todos',todo )
}

export const changeTodo=async (id,todo)=>{
    return await instance.put(`/todos/${id}`,todo )
}

export const deleteTodo=async (id)=>{
    return await instance.delete(`/todos/${id}`)
}