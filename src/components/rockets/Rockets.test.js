import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Store from '../../redux/store';
import Rockets from './Rockets';

it('Rockets Component snapshot test', () => {
  const rockets = TestRenderer
    .create(
      <Provider store={Store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
