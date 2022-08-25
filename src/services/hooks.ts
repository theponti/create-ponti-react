import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useQuery } from 'react-query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import api from './api';
import { setUser } from './auth';
import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const feedback = {
  connection: 'There was an issue connection to the server',
  server: 'There was an issue on the server. Our bad',
};

interface Transaction {
  id: string;
  amount: number;
  payee: number;
}

interface Account {
  id: string;
  name: string;
  type: string;
}

export const useMountedState = () => {
  const isMountedRef = useRef<boolean>(false);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMounted;
};

export const useAccounts = () => useQuery<Account[], Error | null>('getAccounts', () => api.get('accounts').then((d) => d.data));

export const useProfile = () => {
  const reqRef = useRef<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Transaction[] | null>(null);
  const dispatch = useDispatch();

  const getProfile = useCallback(async () => {
    if (reqRef.current) {
      return;
    }

    setError(null);
    setLoading(true);

    try {
      reqRef.current = true;
      const response = await api.get('/me');
      dispatch(setUser(response.data));
      setData(response.data);
    } catch (err: any) {
      setError(err.statusCode === 0 ? feedback.connection : feedback.server);
    } finally {
      if (reqRef.current) {
        reqRef.current = false;
      }
      setLoading(false);
    }
  }, [dispatch]);

  return {
    loading, error, data, getProfile,
  };
};
