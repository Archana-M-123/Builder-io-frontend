import React from "react";

const Statistics: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-start self-end px-32 py-11 mt-20 max-w-full bg-yellow-100 rounded-md w-[1640px] max-md:px-5 max-md:mt-10 ml-24 mr-24 ">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1100px]">
        <div className="flex gap-5">
          <div className="flex gap-2 items-center self-start py-3.5 pr-3 pl-3 mt-1.5 bg-yellow-400 rounded-md min-h-[50px]">
            <img
              loading="lazy"
              src="customer.png"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt="100+"
            />
          </div>
          <div className="flex flex-col">
            <p className="self-start text-2xl font-bold leading-none text-black">
              100 +
            </p>
            <p className="text-base leading-7 text-stone-950">
              Number of customers
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center self-start py-3.5 pr-3 pl-3 mt-1.5 bg-yellow-400 rounded-md min-h-[50px]">
            <img
              loading="lazy"
              src="clock.png"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt="10+"
            />
          </div>
          <div className="flex flex-col">
            <p className="self-start text-2xl font-bold leading-none text-black">
              10 +
            </p>
            <p className="text-base leading-7 text-stone-950">
              Years of experience
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center self-start py-3.5 pr-3 pl-3 mt-1.5 bg-yellow-400 rounded-md min-h-[50px]">
            <img
              loading="lazy"
              src="bag.png"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt="25+"
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <p className="self-start text-2xl font-bold leading-none text-black">
              25+
            </p>
            <p className="text-base leading-7 text-stone-950">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
