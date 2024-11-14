'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BasePantipResponse } from './types/base-pantip-response';
import type { Room } from './types/room';
import type { SuggestTopicBehavior } from './types/suggest-topic-behavior';
import type { Tag } from './types/tag';

export const apiSlice = createApi({
  reducerPath: 'pantip',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/pantip' }),
  endpoints: builder => ({
    getTagHit: builder.query<BasePantipResponse<Tag[]>, void>({
      query: () => `/get-tag-hit`,
    }),
    getSuggestTopicBehavior: builder.query<BasePantipResponse<SuggestTopicBehavior[]>, void>({
      query: () => `/get-suggest-topic-behavior`,
    }),
    getRoomRecommend: builder.query<BasePantipResponse<Room[]>, void>({
      query: () => `/get-room-recommend`,
    }),
  }),
});

export const { useGetTagHitQuery, useGetSuggestTopicBehaviorQuery, useGetRoomRecommendQuery } = apiSlice;
