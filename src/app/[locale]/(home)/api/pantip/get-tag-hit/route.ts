import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({
    success: true,
    data: [
      {
        name: 'แบดมินตัน',
        slug: 'แบดมินตัน',
        pageview: 11041,
        topic_count: 17717,
        follow_count: 2138,
      },
      {
        name: 'BABYMONSTER (นักร้องนักดนตรี)',
        slug: 'BABYMONSTER_(นักร้องนักดนตรี)',
        pageview: 1303,
        topic_count: 2665,
        follow_count: 1145,
      },
      {
        name: 'เชียร์สด',
        slug: 'เชียร์สด',
        pageview: 1140,
        topic_count: 5011,
        follow_count: 404,
      },
      {
        name: 'เรตติ้งละคร',
        slug: 'เรตติ้งละคร',
        pageview: 1079,
        topic_count: 12254,
        follow_count: 2088,
      },
      {
        name: 'ละครโทรทัศน์',
        slug: 'ละครโทรทัศน์',
        pageview: 931,
        topic_count: 212554,
        follow_count: 2932,
      },
      {
        name: 'NewJeans (นักร้องนักดนตรี)',
        slug: 'NewJeans_(นักร้องนักดนตรี)',
        pageview: 735,
        topic_count: 2905,
        follow_count: 934,
      },
      {
        name: 'BTS (นักร้องนักดนตรี)',
        slug: 'BTS_(นักร้องนักดนตรี)',
        pageview: 714,
        topic_count: 19253,
        follow_count: 4934,
      },
      {
        name: 'อาวุธยุทโธปกรณ์',
        slug: 'อาวุธยุทโธปกรณ์',
        pageview: 634,
        topic_count: 47375,
        follow_count: 2901,
      },
      {
        name: 'BEC (ช่อง 3)',
        slug: 'BEC_(ช่อง_3)',
        pageview: 522,
        topic_count: 95956,
        follow_count: 1096,
      },
      {
        name: 'CGM48',
        slug: 'CGM48',
        pageview: 348,
        topic_count: 13428,
        follow_count: 1805,
      },
    ],
  });
};
