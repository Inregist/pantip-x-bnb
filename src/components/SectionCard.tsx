import { twMerge } from 'tailwind-merge';

export type SectionCardProps = {
  label: string;
  title: string;
  className?: string;
};
export const SectionCard = (props: SectionCardProps) => {
  const { title, label, className } = props;
  return (
    <div className={twMerge('flex w-full min-w-40 max-w-80 flex-col items-center justify-center gap-2 rounded-lg border bg-pantip-600/40 py-4', className)}>
      <h5 className="text-gray-700">{label}</h5>
      <h1 className="text-2xl font-bold text-gray-900">
        {title}
      </h1>
    </div>
  );
};
