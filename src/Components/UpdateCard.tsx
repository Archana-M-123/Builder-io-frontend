import React from "react";

interface UpdateCardProps {
  imageUrl: string;
  subHeading: string;
  heading: string;
  linkUrl: string;
  linkImageUrl: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  imageUrl,
  subHeading,
  heading,
  linkUrl,
  linkImageUrl,
}) => {
  const renderImage = (src: string, altText: string) => (
    <img
      loading="lazy"
      src={src}
      className="object-contain w-full rounded-xl aspect-[1.52]"
      alt={altText}
    />
  );

  const renderLinkImage = (src: string, altText: string) => (
    <img
      loading="lazy"
      src={src}
      className="object-contain self-stretch my-auto w-4 aspect-square"
      alt={altText}
    />
  );

  return (
    <article className="flex flex-col w-[33%] max-md:w-full">
      <div className="flex flex-col grow pb-4 rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
        {renderImage(imageUrl, "")} {/* Decorative image */}
        <div className="flex flex-col mt-2.5 ml-4 max-w-full w-[101px] max-md:ml-2.5">
          <p className="text-base leading-loose text-gray-900 max-md:mr-1.5">
            {subHeading}
          </p>
          <h3 className="mt-6 text-2xl font-bold leading-none text-indigo-950">
            {heading}
          </h3>
          <a
            href={linkUrl}
            className="flex gap-2 items-center px-3 py-3.5 mt-6 bg-yellow-400 rounded-md border border-yellow-400 border-solid h-[49px] min-h-[50px] w-[49px]"
            aria-label="Read more"
          >
            {renderLinkImage(linkImageUrl, "Read more")} {/* Functional image */}
          </a>
        </div>
      </div>
    </article>
  );
};

export default UpdateCard;
