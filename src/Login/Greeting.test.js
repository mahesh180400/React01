import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

test('rendering', () => {
    render(<Greeting />);
    const helloText = screen.getByText("Hello Sir/Mam");
    expect(helloText).toBeInTheDocument();
});

test('renders "good to see you" if button was NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
});

test('renders "Done" if the button was clicked', async () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    await waitFor(() => {
        const outputElement = screen.getByText('Done');
        expect(outputElement).toBeInTheDocument();
    });
});
