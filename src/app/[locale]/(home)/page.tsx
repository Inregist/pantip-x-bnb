'use client';

import { Navbar } from '@/components/Navbar';

import { RoomList } from './components/RoomList';
import { SectionAnnounce } from './components/SectionAnnounce';
import { SectionSuggestTopicBehavior } from './components/SectionSuggestTopicBehavior';
import { SectionSuggestTopicPopular } from './components/SectionSuggestTopicPopular';

const Home = () => {
  return (
    <>
      <Navbar />
      <RoomList />
      <SectionAnnounce />
      <SectionSuggestTopicBehavior />
      <SectionSuggestTopicPopular />
    </>
  );
};

export default Home;
