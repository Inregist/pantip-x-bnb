import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({
    success: true,
    data: [
      {
        announce_id: 890,
        category_name: 'highlight',
        type: 'random',
        display_message: '<a target="_blank" href="https://pantip.com/s/hfgF2">🎧 <strong>Pantip Daily Podcast</strong> 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 13 พฤศจิกายน 📊</a>',
        created_time: '2024-11-14T05:11:53.956Z',
      },
      {
        announce_id: 950,
        category_name: 'activity',
        type: 'random',
        display_message: '<a target="_blank" href="https://pantip.com/s/wIOwF"><strong>Pantip Point 💰</strong> ถ้าฉันรวย ฉันจะ …? 📝💰😍</a>',
        created_time: '2024-11-01T07:58:14.842Z',
      },
    ],
  });
};
