'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Tag } from '@/app/[locale]/(home)/api/pantip/get-tag-hit/route';

import type { BasePantipResponse } from './types/base-pantip-response';

export type { Tag };

export const apiSlice = createApi({
  reducerPath: 'pantip',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/pantip' }),
  endpoints: builder => ({

    getTagHit: builder.query<BasePantipResponse<Tag[]>, number | undefined>({
      query: limit => `/get-tag-hit?limit=${limit}`,
    }),
  }),
});

export const { useGetTagHitQuery } = apiSlice;
