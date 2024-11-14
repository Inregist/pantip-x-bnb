import Link from 'next/link';
import { FaComment, FaEye, FaVoteYea } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

/* eslint-disable @next/next/no-img-element */
export type TopicCardProps = {
  id: number;
  title: string;
  image?: string;
  author: {
    id: number;
    name?: string;
    image: string;
  };
  date: Date;
  tags: string[];
  viewCount: number;
  commentCount: number;
  voteCount: number;
};

export const TopicCard = ({
  id,
  title,
  image,
  author,
  date,
  tags,
  viewCount,
  commentCount,
  voteCount,
}: TopicCardProps) => {
  return (
    <Link href={`https://pantip.com/topic/${id}`} target="_blank" className="flex">
      <div className={twMerge('min-w-40 max-w-80 rounded-lg bg-pantip-600 shadow-md flex flex-col transition-transform duration-300 ease-in-out hover:scale-105', image ? 'row-span-2' : 'row-span-1')}>
        {image && (
          <div className="flex justify-center overflow-hidden bg-gray-200/70">
            <img
              src={image}
              alt={title}
              className="max-h-40 transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        )}
        <h2 className="mb-2 p-4 text-lg font-semibold dark:text-white">{title}</h2>
        <div className="mt-auto p-4">
          <div className="mb-4 flex items-center">
            <img
              src={author.image || 'https://ptcdn.info/images/avatar_member_default.png'}
              alt="Author"
              width={32}
              height={32}
              className="mr-2 rounded-full"
            />
            <div>
              <p className="text-sm font-medium dark:text-white">{author.name || 'Anonymous'}</p>
              <p className="text-xs text-gray-200">
                {
                  date.toLocaleString('th-TH')
                }
              </p>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-200">
            <div className="flex items-center">
              <FaEye className="mr-1 size-4" />
              <span>{viewCount}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="mr-1 size-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center">
              <FaVoteYea className="mr-1 size-4" />
              <span>{voteCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};
