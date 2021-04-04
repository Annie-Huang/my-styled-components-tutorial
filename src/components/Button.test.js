import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button, Button8 } from './Button';

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('toHaveStyleRule works', () => {
  const tree = renderer.create(<Button8 />).toJSON();
  expect(tree).toHaveStyleRule('color', 'red');
  expect(tree).toHaveStyleRule('color', 'green', {
    media: '(max-width: 640px)',
    modifier: ':hover',
  });
});
