// Import necessary libraries and modules for testing
import SignUp from './SignUp';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';


describe('SignUp Component Tests', () => {
  test('Empty Email Field', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    const emailInput = getByPlaceholderText('Enter email');
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.submit(emailInput);
    await waitFor(() => expect(getByText('Please enter an email address.')).toBeInTheDocument());
  });

  test('Empty Password Field', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.submit(passwordInput);
    await waitFor(() => expect(getByText('Please enter a password.')).toBeInTheDocument());
  });

  test('Empty Confirm Password Field (in SignUp mode)', async () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<SignUp />);
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const switchButton = getByText('Sign UP');
    fireEvent.click(switchButton);
    fireEvent.change(confirmPasswordInput, { target: { value: '' } });
    fireEvent.submit(confirmPasswordInput);
    await waitFor(() => expect(getByText('Please enter a password.')).toBeInTheDocument());
  });

  test('Mismatched Passwords (in SignUp mode)', async () => {
    const { getByText, getByLabelText } = render(<SignUp />);
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const switchButton = getByText('Sign UP');
    fireEvent.click(switchButton);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });
    fireEvent.submit(confirmPasswordInput);
    await waitFor(() => expect(getByText('Passwords do not match.')).toBeInTheDocument());
  });

  

});
