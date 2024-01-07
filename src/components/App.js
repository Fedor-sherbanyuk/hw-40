import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleCompleted } from '../redux/actions';
import  Form from './Form';
import TodoList  from './List'; // Змінено на TodoList
import { Container, Paper, Typography } from '@mui/material';

const App = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);

    const submitHandler = (e) => {
        e.preventDefault();
        const todoText = e.target.elements.todoInput.value;
        dispatch(addTodo(todoText));
        e.target.reset();
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const toggleCompletedHandler = (id) => {
        dispatch(toggleCompleted(id));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5">Todo List</Typography>
                <TodoList list={todoList} onClickHandler={toggleCompletedHandler} onDelete={handleDelete} />
                <Form submitHandler={submitHandler} />
            </Paper>
        </Container>
    );
};

export default App;
