/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from './index';
import { render, screen } from '../../utils/test-utils';

describe('Login Component', () => {
  test('should contain pepe', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { name: 'pepe' },
        },
      },
    });

    expect(screen.getByText(/pepe/i)).toBeInTheDocument();
  });
  test('should contain stranger', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: false,
        },
      },
    });

    expect(screen.getByText(/stranger/i)).toBeInTheDocument();
  });
});
