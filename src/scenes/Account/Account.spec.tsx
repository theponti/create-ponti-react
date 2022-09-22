import { render, screen } from '@testing-library/react';
import { describe, Mock, test } from 'vitest';

import { authSelectors } from 'services/store';
import { supabase } from 'services/supabase';
import TestWrapper from 'testUtils/TestWrapper';
import Account from '.';

const user = {
  id: 'foobar',
  email: 'foobar',
  name: 'foobar',
};

describe('Account', () => {
  test('should render', () => {
    const { container } = render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  test.skip('should be able to logout', () => {
    vi.spyOn(authSelectors, 'getUser').mockReturnValue(user);
    const { container } = render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(supabase.auth.signOut).toBeCalled();
    expect(container).toMatchSnapshot();
  });

  test.skip('should handle logout error', () => {
    vi.spyOn(authSelectors, 'getUser').mockReturnValue(user);
    (supabase.auth.signOut as Mock).mockImplementation(() => Promise.reject());
    render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(supabase.auth.signOut).toBeCalled();
  });
});
