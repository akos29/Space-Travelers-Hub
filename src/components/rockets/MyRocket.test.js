import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Store from '../../redux/store';
import MyRocket from './MyRocket';

it('Rockets Component snapshot test', () => {
  const rockets = TestRenderer
    .create(
      <Provider store={Store}>
        <MyRocket />
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
