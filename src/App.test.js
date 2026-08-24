import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio masthead and primary navigation', () => {
  render(<App />);
  expect(screen.getByText('The Written Record of a Web3 Researcher')).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
});
