'use client';

import { Navbar } from '@/components/Navbar';

import { RoomList } from './components/RoomList';
import { SectionSuggestTopicBehavior } from './components/SectionSuggestTopicBehavior';
import { SectionSuggestTopicPopular } from './components/SectionSuggestTopicPopular';

const Home = () => {
  return (
    <>
      <Navbar />
      <RoomList />
      <SectionSuggestTopicBehavior />
      <SectionSuggestTopicPopular />
    </>
  );
};

export default Home;
