/* eslint-disable react/jsx-handler-names */
import { render, screen } from '@testing-library/react';
import { signInWithPopup } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';
import TestWrapper from 'testUtils/TestWrapper';
import {
  beforeEach, describe, expect, Mock, vi,
} from 'vitest';
import Header from './Header';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  setPersistence: vi.fn(),
  signInWithPopup: vi.fn(() => ({ user: {} })),
}));

vi.mock('firebase/firestore', () => ({
  addDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn(),
  getFirestore: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
}));

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
    (getDocs as Mock).mockResolvedValue({ docs: [] });
    render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>,
    );
    const button = screen.getByTestId('loginButton');
    button.click();
    expect(signInWithPopup).toBeCalled();
  });
});
