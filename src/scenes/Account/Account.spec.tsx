import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import { authSelectors } from 'services/store';
import TestWrapper from 'testUtils/TestWrapper';
import Account from '.';

const user = {
  id: 'foobar',
  email: 'foobar',
  name: 'foobar',
};

describe('Account', () => {
  beforeEach(() => {
    vi.spyOn(authSelectors, 'getUser').mockReturnValue(user);
  });

  test('should render', () => {
    const { container } = render(
      <TestWrapper>
        <Account />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
