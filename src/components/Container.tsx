import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='max-w-[1920px] px-4 mx-auto'>{children}</div>;
};
