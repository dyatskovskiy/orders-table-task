'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type sortDirection = 'asc' | 'desc';

type SortState = {
  sortBy: string;
  direction: sortDirection;
  setSort: (key: string) => void;
};

const SortContext = createContext<SortState | undefined>(undefined);

export const useSort = () => {
  const context = useContext(SortContext);

  if (!context) throw new Error('useSort must be used in SortProvider');

  return context;
};

export const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortBy, setSortBy] = useState('');
  const [direction, setDirection] = useState<sortDirection>('asc');

  const setSort = useCallback(
    (key: string) => {
      if (sortBy === key) {
        setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortBy(key);
        setDirection('asc');
      }
    },
    [sortBy],
  );

  const value = useMemo(
    () => ({ sortBy, direction, setSort }),
    [sortBy, direction, setSort],
  );

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
