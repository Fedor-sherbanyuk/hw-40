import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actions';

const initialState = {
    todos: [
        { id: '1', text: 'Item 1', isDone: false },
        { id: '2', text: 'Item 2', isDone: true },
        { id: '3', text: 'Item 3', isDone: false },
        { id: '4', text: 'Item 4', isDone: true },
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: crypto.randomUUID(),
                        text: action.payload.text,
                        isDone: false,
                    },
                ],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };

        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                ),
            };

        default:
            return state;
    }
};

export default todoReducer;
