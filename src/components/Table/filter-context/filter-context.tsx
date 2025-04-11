'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type FilterState = {
  filter: string;
  setFilter: (filter: string) => void;
};

const FilterContext = createContext<FilterState | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used in SortProvider');

  return context;
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState('');

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter, setFilter],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
