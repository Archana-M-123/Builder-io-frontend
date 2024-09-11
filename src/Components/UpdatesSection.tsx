import React, { useEffect, useState } from 'react';
import LatestUpdates from './LatestUpdates';
import UpdateCard from './UpdateCard';
import { fetchLatestUpdates } from './api'; // Import the API function

interface UpdateCardProps {
  imageUrl: string;
  subHeading: string;
  heading: string;
  linkUrl: string;
  linkImageUrl: string;
}

const UpdatesSection: React.FC = () => {
  const [updates, setUpdates] = useState<UpdateCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpdates = async () => {
      const data = await fetchLatestUpdates();
      setUpdates(data);
      setLoading(false);
    };

    loadUpdates();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <LatestUpdates />
      <section className="mt-14 w-[1580px] ml-20">
        <div className="flex gap-5 max-md:flex-col">
          {updates.map((update, index) => (
            <UpdateCard key={index} {...update} />
          ))}
        </div>
      </section>
    </>
  );
};

export default UpdatesSection;
