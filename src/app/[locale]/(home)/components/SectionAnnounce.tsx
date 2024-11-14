/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { useGetAnnounceQuery } from '../redux/apiPantip';

export const SectionAnnounce = () => {
  const { data: announces } = useGetAnnounceQuery();

  if (!announces) {
    return null;
  }

  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">Announcements</h1>
      <ul className="space-y-4">
        {announces.data.map(announce => (
          <li key={announce.announce_id} className="rounded border p-4">
            <h2 className="mb-2 font-semibold">
              Announcement #
              {announce.announce_id}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: announce.display_message }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
