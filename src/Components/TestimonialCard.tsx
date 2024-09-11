// src/Components/TestimonialCard.tsx
import React from "react";

export interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  rating: string[];
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  rating,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col h-[300px] border border-1 border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-16 h-16 object-cover"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="flex gap-1 mt-[-70px]">
          {rating.map((star, index) => (
            <img key={index} src={star} alt="Star rating" className="w-6 h-6" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default TestimonialCard;
