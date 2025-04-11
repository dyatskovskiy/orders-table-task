import React from 'react';
import classNames from 'classnames';
import { getPaginationItems } from '@/lib/getPaginationRange';

interface OrdersPaginationControlPanelProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingsQuantity?: number;
}

export const OrdersPaginationControlPanel: React.FC<
  OrdersPaginationControlPanelProps
> = ({ currentPage, totalPages, onPageChange, siblingsQuantity = 2 }) => {
  const pages = getPaginationItems(currentPage, totalPages, siblingsQuantity);

  return (
    <div className='flex flex-rowx items-center  justify-center gap-3'>
      {currentPage > 1 && (
        <button
          className='p-2 text-grey dark:text-white'
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}

      <ul className={`flex flex-row items-center gap-3`}>
        {totalPages > 0 &&
          pages.map((item, index) => {
            if (item !== 'ellipsis') {
              return (
                <li key={index}>
                  <button
                    onClick={() => onPageChange(item)}
                    className={classNames(
                      'min-w-10 rounded-lg px-[9px] py-2 bg-light-grey dark:bg-dark',

                      `${currentPage === item && 'bg-purple dark:bg-purple text-white'}`,
                    )}
                  >
                    {item}
                  </button>
                </li>
              );
            }

            return (
              <li key={`ellipsis-${index}`} className='px-2'>
                &hellip;
              </li>
            );
          })}
      </ul>

      {currentPage < totalPages && (
        <button
          className='p-2 text-grey dark:text-white'
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
};
