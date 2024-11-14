/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { Loading } from '@/components/Loading';

import { useGetRoomRecommendQuery } from '../redux/apiPantip';

export const RoomList = () => {
  const { data: rooms } = useGetRoomRecommendQuery();

  return (
    <div className="mt-10 flex gap-1 overflow-x-scroll">
      {rooms
        ? rooms.data.map(room => (
          <Link key={room.id} href={`https://pantip.com/forum/${room.slug}`} target="_blank">
            <div key={room.id} className="w-20 text-center">
              <img src={room.room_icon_url} alt={room.name} className="mx-auto size-16 rounded-md bg-pantip-900/50" />
              <span className="text-center">{room.name}</span>
            </div>
          </Link>
        ))
        : <div className="flex w-full items-center justify-center"><Loading className="h-20" fontSize={40} /></div> }
    </div>
  );
};
