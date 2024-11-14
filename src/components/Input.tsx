import React from 'react';
import { twMerge } from 'tailwind-merge';

type InputWithIconProps = {
  decorLeft?: React.ReactNode;
  decorRight?: React.ReactNode;

} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(
  props: InputWithIconProps = {},
) {
  const { decorLeft, decorRight, className = '', ...restProps } = props;
  return (
    <div className={twMerge('inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1', className)}>
      {decorLeft}
      <input
        className="border-none outline-none"
        {...restProps}
      />
      {decorRight}
    </div>
  );
}
