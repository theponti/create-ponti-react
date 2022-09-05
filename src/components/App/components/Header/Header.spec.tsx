/* eslint-disable react/jsx-handler-names */
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <Header isAuthenticated={false} onLogin={() => {}} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render authenticated header', () => {
    const { container } = render(
      <BrowserRouter>
        <Header isAuthenticated onLogin={() => {}} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
