import React, { useEffect, useState } from "react";
import { fetchCategories } from './api'; // Import the API call

interface Category {
  name: string;
  imgSrc: string;
  ellipseImg: string;
}

const CategoryCard: React.FC<Category> = ({ name, imgSrc, ellipseImg }) => {
  return (
    <article className="flex flex-col items-center">
      <div
        className="relative w-[200px] h-[150px] flex items-center justify-center mb-4"
        style={{
          backgroundImage: `url(${ellipseImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          loading="lazy"
          src={imgSrc}
          className="object-contain w-[80px] h-[80px] mr-12"
          alt={`${name} category`}
        />
      </div>
      <h3 className="text-base font-medium leading-none text-center text-black mr-12">
        {name}
      </h3>
    </article>
  );
};

const TopCategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mt-16 max-md:mt-10">
      <div className="flex justify-between items-center ml-32 mr-32">
        <h2 className="text-3xl font-bold leading-none text-zinc-600">
          Top Categories
        </h2>
        <a
          href="#all-categories"
          className="flex gap-1.5 items-center text-base font-medium leading-none text-right text-neutral-800"
        >
          View All
          <img
            loading="lazy"
            src="arrow.png"
            className="object-contain shrink-0 aspect-square w-[18px]"
            alt="Arrow Icon"
          />
        </a>
      </div>

      <div className="relative w-[1580px] h-px bg-gray-200 ml-32 mr-32 mt-4">
        <div className="absolute top-0 left-0 w-[230px] bg-yellow-400  h-[4px] bg-yellow-400 rounded-full"></div>
      </div>

      <div className="mt-20 ml-20 flex justify-around max-w-full w-[768px] max-md:mt-10 ml-32 gap-10 ">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            imgSrc={category.imgSrc}
            ellipseImg={category.ellipseImg}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCategoriesSection;
