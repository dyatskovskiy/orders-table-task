'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type SortOrder = 'asc' | 'desc';

type SortState = {
  sortBy: string;
  order: SortOrder;
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
  const [order, setOrder] = useState<SortOrder>('asc');

  const setSort = useCallback(
    (key: string) => {
      if (sortBy === key) {
        setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortBy(key);
        setOrder('asc');
      }
    },
    [sortBy],
  );

  const value = useMemo(
    () => ({ sortBy, order, setSort }),
    [sortBy, order, setSort],
  );

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
