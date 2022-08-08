import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
 const { queryByText } = render(<AddToCart available={false} />);
  expect(queryByText(/learn react/i)).toBeNull()
});
//Previous one
//render(<App />);
//const linkElement = screen.getByText(/learn react/i);
//expect(linkElement).toBeInTheDocument();
