import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={twMerge('rounded-md text-gray-800 border px-4 py-1 text-sm flex items-center justify-center gap-2', className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
