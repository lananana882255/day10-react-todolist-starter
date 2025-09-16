import axios from "axios";

const instance = axios.create({baseURL: 'http://localhost:8080'});

export const getTodos = async () => {
    return await instance.get('/todos')
}

export const addTodo = async (todo) => {
    return await instance.post('/todos', todo)
}

export const changeTodo = async (id, todo) => {
    return await instance.put(`/todos/${id}`, todo)
}

export const deleteTodo = async (id) => {
    return await instance.delete(`/todos/${id}`)
}

export const getTodo = async (id) => {
    return await instance.get(`/todos/${id}`)
}

instance.interceptors.request.use(
    (config) => {
        console.log('request successfully', config)
        config.metadata = {startTime: Date.now()}
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        console.log('request successfully', response)
        console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) + 'ms')
        return response;
    },
    (error) => {

        console.log(error)
        const {status, data} = error.response
        if (status === 404) {
            alert(`response Error ${status} ${data}`)
        }
        if (status === 422) {
            alert(`response Error ${status} ${data}`)
        }
        return Promise.reject(error)
    }
)