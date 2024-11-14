import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import type { IconBaseProps } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';

export const Loading = (props: IconBaseProps) => {
  const { className, ...restProps } = props;
  return <AiOutlineLoading3Quarters className={twMerge('animate-spin', className)} {...restProps} />;
};
