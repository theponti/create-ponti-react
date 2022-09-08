/* eslint-disable react/jsx-handler-names */
import { render } from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper';
import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import Header from './Header';

describe('<Header/>', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render unauthenticated header', () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated={false} onLogin={vi.fn()} />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render authenticated header', () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated onLogin={vi.fn()} />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
