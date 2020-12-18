import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../src/components/App';

test(`App renders`, () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
