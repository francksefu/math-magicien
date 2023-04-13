import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import operate from './logic/operate';

//import TestRenderer from 'react-test-renderer';
test('renders learn react link', () => {
  expect(render(<Calculator />)).toMatchSnapshot();
  expect(render(<Home />)).toMatchSnapshot();
  expect(render(<Quotes />)).toMatchSnapshot();
});

