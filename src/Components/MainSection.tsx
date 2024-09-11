import React from "react";

const MainSection: React.FC = () => {
  return (
    <main className="flex items-center justify-center  ml-28 ">
      <section className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:w-full ">
          <div className="flex flex-col items-start self-stretch my-auto w-full font-bold text-gray-900 max-md:mt-10 ">
            <h1 className="text-5xl leading-[62px] text-zinc-800 max-md:text-4xl max-md:leading-[58px]">
              Leaders in Detergent & Soaps Manufacturing
            </h1>
            <p className="mt-5 text-base leading-7 max-md:max-w-full">
              NeoBee is a budding multi-faceted technology-driven group that has
              begun its peregrination in manufacturing of Detergent Cake &
              Powders, Disinfectant cleaning liquids for household &
              institutional customers.
            </p>
            <a
              href="#contact"
              className="inline-block mt-9 px-6 py-4 bg-yellow-400 rounded-md text-sm"
            >
              Contact Now
            </a>
          </div>
        </div>
        <div className="flex flex-col w-8/12 max-md:w-full mt-[40px]">
          <div
            className="flex shrink-0 mx-auto max-w-full rounded-md h-[650px] w-[1300px] max-md:mt-10 mb-10 "
            role="img"
            aria-label="Decorative image"
          >
            <img
              loading="lazy"
              src="mainSection.png"
              className="h-[700px] w-[1040px]"
              alt="Neobee logo"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
