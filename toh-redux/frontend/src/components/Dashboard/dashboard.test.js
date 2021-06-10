/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { screen, render } from '../../utils/test-utils';
import { loadHeroes } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  test('should display Abe Sapiens', () => {
    render(<Dashboard />, {
      initialState: {
        heroes: [{}, { name: 'Abe Sapiens' }],
      },
    });
    expect(screen.getByText(/Abe Sapiens/i)).toBeInTheDocument();
  });

  test('should call loadHeroes', () => {
    loadHeroes.mockReturnValue({ type: '' });
    render(<Dashboard />, {
      initialState: {
        heroes: [],
      },
    });
    expect(loadHeroes).toHaveBeenCalled();
  });
});
