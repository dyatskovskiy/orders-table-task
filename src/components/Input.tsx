import React, { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
interface InputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  className?: string;
  type?: string;
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export const Input: FC<InputProps> = ({
  name,
  className,
  type = 'text',
  handleChange,
  placeholder,
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className={classNames(
        'rounded w-full h-8 text-xl bg-primaryBg border border-borderColor focus:outline-none px-2 py-1',
        className,
      )}
      onChange={handleChange}
    />
  );
};
