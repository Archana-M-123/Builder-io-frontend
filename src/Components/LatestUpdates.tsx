import React from "react";

const LatestUpdates: React.FC = () => {
  return (
    <section className="relative mt-24 max-md:mt-10">
      <div className="flex flex-col items-center justify-center max-w-full w-[901px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold leading-tight text-center text-zinc-600">
            Our latest updates for you here!
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-900 text-center">
            What's happening at Neobee
          </p>
        </div>
      </div>
      <a
        href="#all-updates"
        className="absolute right-20 bottom-0 mr-10 mb-5 flex gap-1.5 text-base font-medium leading-none text-neutral-800 items-center"
      >
        View All
        <img
          loading="lazy"
          src="arrow.png"
          className="object-contain shrink-0 aspect-square w-[18px]"
          alt=""
        />
      </a>
    </section>
  );
};

export default LatestUpdates;
