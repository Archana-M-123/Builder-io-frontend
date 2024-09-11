import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
  <article className="flex flex-col px-8 py-11 bg-white rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.15)] max-md:px-5">
    <h3 className="self-start text-xl font-semibold leading-none">{title}</h3>
    <p className="mt-4 text-sm leading-5">{description}</p>
  </article>
);

const ValuesSection: React.FC = () => {
  return (
    <section className="mt-20 max-md:mt-30">
      <h2 className="text-center text-3xl font-semibold leading-none text-zinc-600">
        Our Values
      </h2>
      <p className="mt-5 text-base leading-5 text-center text-zinc-600 w-[500px] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Eget libero nisl etiam quisque.
      </p>
      <div className="mt-10 w-full max-w-[1049px] mx-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col pl-1 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col gap-14 grow text-zinc-600 max-md:mt-10 ">
              <ValueCard
                title="Excellence"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <ValueCard
                title="Integrity"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 pl-1 w-[33%] max-md:ml-0 max-md:w-full my-28">
            <ValueCard
              title="Empower"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="flex flex-col ml-5 pl-1 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col gap-14 grow text-zinc-600 max-md:mt-10">
              <ValueCard
                title="Empathy"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <ValueCard
                title="Trust"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
