import { render, screen } from '@testing-library/react';
import { signOut } from 'firebase/auth';
import { User } from 'services/auth';
import { authSelectors } from 'services/store';
import TestWrapper from 'testUtils/TestWrapper';
import { describe, Mock, test } from 'vitest';
import Account from '.';

const user = {
  displayName: 'foobar',
  photoURL: 'http://someimage',
  email: 'example@example.com',
  emailVerified: false,
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

  test('should be able to logout', () => {
    vi.spyOn(authSelectors, 'getUser').mockReturnValue(user as User);
    const { container } = render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(signOut).toBeCalled();
    expect(container).toMatchSnapshot();
  });

  test('should handle logout error', () => {
    vi.spyOn(authSelectors, 'getUser').mockReturnValue({} as User);
    (signOut as Mock).mockImplementation(() => Promise.reject());
    render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    const button = screen.getByTestId('logoutButton');
    button.click();
    expect(signOut).toBeCalled();
  });
});
