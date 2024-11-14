'use client';

import { Navbar } from '@/components/Navbar';

import { RoomList } from './components/RoomList';
import { SectionSuggestTopicBehavior } from './components/SectionSuggestTopicBehavior';

const Home = () => {
  return (
    <>
      <Navbar />
      <RoomList />
      <SectionSuggestTopicBehavior />
    </>
  );
};

export default Home;
