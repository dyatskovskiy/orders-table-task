'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

export type PaginationState<T> = {
  limit: number;
  setLimit: (limit: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  items: Array<T>;
  setItems: (items: T[]) => void;
};
export function createPaginationContext<T>() {
  const Context = createContext<PaginationState<T> | undefined>(undefined);

  const usePagination = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('usePagination must be used within PaginationProvider');
    }
    return context;
  };

  const PaginationProvider = ({ children }: { children: React.ReactNode }) => {
    const [limit, setLimit] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [items, setItems] = useState<Array<T>>([]);

    const value = useMemo(
      () => ({
        limit,
        setLimit,
        items,
        setItems,
        currentPage,
        setCurrentPage,
      }),
      [limit, items, currentPage],
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    PaginationProvider,
    usePagination,
  };
}
