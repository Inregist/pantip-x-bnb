import type { Topic } from './topic';

export type SuggestTopicBehavior = {
  room_id: number;
  room_name_th: string;
  room_name_en: string;
  type: string;
  topics: Topic[];
};
