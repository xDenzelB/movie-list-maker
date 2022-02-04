import { render, screen } from '@testing-library/react';
import App from './App';

test('Title:', () => {
  render(<App />);
  const linkElement = screen.getByText(/Title:/i);
  expect(linkElement).toBeInTheDocument();
});
