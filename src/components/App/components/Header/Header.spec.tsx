/* eslint-disable react/jsx-handler-names */
import { render, screen } from '@testing-library/react';
import { signInWithRedirect } from 'firebase/auth';
import TestWrapper from 'testUtils/TestWrapper';
import {
  beforeEach, describe, expect, Mock, vi,
} from 'vitest';
import Header from './Header';

describe('<Header/>', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render unauthenticated header', () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render authenticated header', () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should log in user', () => {
    render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>,
    );
    const button = screen.getByTestId('loginButton');
    button.click();
  });

  test('should sign up user', () => {
    render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>,
    );
    const button = screen.getByTestId('loginButton');
    button.click();
    expect(signInWithRedirect).toBeCalled();
  });

  test('should sign up user', () => {
    (signInWithRedirect as Mock).mockImplementation(() => Promise.reject().catch());
    render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>,
    );
    const button = screen.getByTestId('loginButton');
    button.click();
    expect(signInWithRedirect).toBeCalled();
  });
});
