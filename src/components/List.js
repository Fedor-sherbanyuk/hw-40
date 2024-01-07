import React from 'react';
import { Button, List, ListItem, Typography } from '@mui/material';

const TodoList = ({ list, onClickHandler, onDelete }) => {
    return (
        <List>
            {list.map((todo) => (
                <ListItem
                    key={todo.id}
                    style={{ textDecoration: todo.isDone ? 'line-through' : 'none', marginBottom: '10px' }}
                    onClick={() => onClickHandler(todo.id)}
                >
                    {todo.text}
                    <Button onClick={() => onDelete(todo.id)} variant="outlined" size="small" style={{ marginLeft: '10px' }}>
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;
