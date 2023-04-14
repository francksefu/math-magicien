import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator, { Span } from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

// import TestRenderer from 'react-test-renderer';
test('renders learn react link', () => {
  expect(render(<Calculator />)).toMatchSnapshot();
  expect(render(<Home />)).toMatchSnapshot();
  expect(render(<Quotes />)).toMatchSnapshot();
});

test('testing button 1', () => {
  const mockClick = jest.fn();
  render(<Span classons="aucun" valeur="1" cliquons={mockClick} />);
  const button = screen.getByRole('button', { valeur: '1' });
  fireEvent.click(button);
  expect(mockClick).toHaveBeenCalled();
});

test('testing button AC', () => {
  const mockClick = jest.fn();
  render(<Span classons="aucun" valeur="AC" cliquons={mockClick} />);
  const button = screen.getByRole('button', { valeur: 'AC' });
  fireEvent.click(button);
  expect(mockClick).toHaveBeenCalled();
});
