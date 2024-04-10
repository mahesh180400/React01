import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
test('rendering', () => {
    render(<Greeting></Greeting>)
    const helloText = screen.getByText("Hello Sir/Mam");
    expect(helloText).toBeInTheDocument();
  });
  
