import type { Tag } from './tag';

export type Topic = {
  topic_id: number;
  topic_type: number;
  title: string;
  thumbnail_url?: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: {
    id: number;
    name: string;
    avatar: {
      large: string;
      medium: string;
      small: string;
    };
    slug: string;
  };
  created_time: Date;
  tags: Tag[];
};
