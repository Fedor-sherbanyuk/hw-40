import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

const mockStore = configureStore([]);

test('renders todo list', () => {
    const store = mockStore({
        todos: [
            { id: '1', text: 'Item 1', isDone: false },
            { id: '2', text: 'Item 2', isDone: true },
            { id: '3', text: 'Item 3', isDone: false },
            { id: '4', text: 'Item 4', isDone: true },
        ],
    });

    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 4/i)).toBeInTheDocument();
});

