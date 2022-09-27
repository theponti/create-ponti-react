/* eslint-disable react/jsx-handler-names */
import { render, screen } from '@testing-library/react';
import { supabase } from 'services/supabase';
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

  test.skip('should be able to logout', () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(supabase.auth.signOut).toBeCalled();
    expect(container).toMatchSnapshot();
  });

  test.skip('should handle logout error', () => {
    (supabase.auth.signOut as Mock).mockImplementation(() => Promise.reject());
    render(
      <TestWrapper>
        <Header isAuthenticated />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(supabase.auth.signOut).toBeCalled();
  });
});
