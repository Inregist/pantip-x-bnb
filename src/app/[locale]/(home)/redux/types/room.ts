export type Room = {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  description: string;
  link_url: string;
  room_icon_url: string;
  is_pinned: boolean;
  pinned_time: Date;
  order: number;
};
