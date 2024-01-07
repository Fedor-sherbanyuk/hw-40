import React from 'react';
import { Button, TextField } from '@mui/material';

const Form = ({ submitHandler }) => {
    return (
        <form onSubmit={submitHandler} style={{ marginTop: '20px' }}>
            <TextField label="Name of store" autoComplete="off" name="todoInput" fullWidth />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Add Todo
            </Button>
        </form>
    );
};

export default Form;
