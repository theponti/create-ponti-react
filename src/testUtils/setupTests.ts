import '@testing-library/jest-dom';
import mediaQuery from 'css-mediaquery';
import 'whatwg-fetch';

import { DESKTOP_RESOLUTION_HEIGHT, DESKTOP_RESOLUTION_WIDTH } from 'testUtils';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  onAuthStateChanged: vi.fn(),
  setPersistence: vi.fn(),
  signInWithRedirect: vi.fn(() => ({ user: {} })),
  signOut: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  addDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn().mockReturnValue({ docs: [] }),
  getFirestore: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
}));

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
      function matchQuery(): boolean {
        return mediaQuery.match(query, {
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      const listeners: (() => void)[] = [];
      const instance = {
        matches: matchQuery(),
        addEventListener: (_: 'change', listener: () => void): void => {
          listeners.push(listener);
        },
        removeEventListener: (_: 'change', listener: () => void): void => {
          const index = listeners.indexOf(listener);
          if (index >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            listeners.splice(index, 1);
          }
        },
      };
      window.addEventListener('resize', () => {
        const change = matchQuery();
        if (change !== instance.matches) {
          instance.matches = change;
          for (const listener of listeners) listener();
        }
      });

      return instance;
    },
  });
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: () => {},
  });
  Object.defineProperty(window, 'resizeTo', {
    writable: true,
    value: (width: number, height: number) => {
      Object.assign(window, {
        innerWidth: width,
        innerHeight: height,
      }).dispatchEvent(new window.Event('resize'));
    },
  });
});

beforeEach(() => {
  window.resizeTo(DESKTOP_RESOLUTION_WIDTH, DESKTOP_RESOLUTION_HEIGHT);
});
