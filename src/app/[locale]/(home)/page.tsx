'use client';

import { Navbar } from '@/components/Navbar';
import { SectionCard } from '@/components/SectionCard';
import { TopicCard } from '@/components/TopicCard';

import { useGetSuggestTopicBehaviorQuery } from './redux/apiPantip';

const Home = () => {
  const { data } = useGetSuggestTopicBehaviorQuery();

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center gap-20 py-10 sm:px-8">
        {data?.data.map(suggest => (
          <div key={suggest.room_id} className="flex w-full max-w-screen-lg">
            <div className="flex flex-wrap justify-center gap-3">
              <SectionCard label="#แนะนำ จากห้อง" title={suggest.room_name_th} />
              {suggest.topics.map(topic => (
                <TopicCard
                  key={topic.topic_id}
                  id={topic.topic_id}
                  title={topic.title}
                  image={topic.thumbnail_url}
                  author={{
                    id: topic.author.id,
                    name: topic.author.name,
                    image: topic.author.avatar.small,
                  }}
                  date={topic.created_time}
                  tags={topic.tags.map(tag => tag.name)}
                  viewCount={topic.views_count}
                  commentCount={topic.comments_count}
                  voteCount={topic.votes_count}
                />
              ))}
            </div>
          </div>
        ),
        )}
      </div>

    </>
  );
};

export default Home;
