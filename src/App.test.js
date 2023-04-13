import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
//import TestRenderer from 'react-test-renderer';


test('renders learn react link', () => {
  ;
  
  expect(render(<Calculator />)).toMatchSnapshot();
  expect(render(<Home />)).toMatchSnapshot();
  expect(render(<Quotes />)).toMatchSnapshot();
});
/*
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});*/

/*
it('renders correctly', () => {
  const tree = TestRenderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});*/
