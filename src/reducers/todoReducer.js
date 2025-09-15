export const initialState = [];

// reducer is a pure function that define and gather all state update logic
export const todoReducer = (state, action) => {
        switch (action.type) {
            case 'DONE':
                return state.map(todo => {
                    if (action.id === todo.id) {
                        const done = !todo.done;
                        return {...todo, done: done};
                    }
                    return todo;
                })
            case 'ADD':
                return [...state,
                    action.todo]
            case 'DELETE':
                return state.filter(todo => todo.id !== action.id)
            case 'LOAD_TODOS':
                return action.todos
            case 'EDIT':
                return state.map(todo => {
                    if (todo.id === action.id) {
                        return {...todo, text: action.text}
                    }
                    return todo;
                })
        }
        return state;
    }
;
