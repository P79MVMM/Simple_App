import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App available={true} />);
  expect(/learn react/i)).toBeInTheDocument();
});
//Previous one
//render(<App />);
//const linkElement = screen.getByText(/learn react/i);
//expect(linkElement).toBeInTheDocument();
