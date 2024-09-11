import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { fetchTestimonials, TestimonialCardProps} from "./api"

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-28 max-md:mt-10">
      <div className="flex flex-wrap gap-5 justify-between w-[1580px] ml-32">
        <h2 className="text-3xl font-bold tracking-wider leading-none text-zinc-600">
          Testimonials
        </h2>
        <a
          href="#all-testimonials"
          className="flex gap-1.5 items-center self-start mt-3.5 text-base font-medium leading-none text-right text-neutral-800"
        >
          View All
          <img
            loading="lazy"
            src="arrow.png"
            className="object-contain shrink-0 aspect-square w-[18px]"
            alt="View All"
          />
        </a>
      </div>
      <div className="flex gap-4 items-start mt-10 w-[1580px] max-md:flex-wrap max-md:max-w-full ml-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-1 flex-grow">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 mt-4 mr-20">
        <span className="w-2 h-[7px] bg-neutral-700 rounded-full"></span>
        <span className="w-2 h-[7px] bg-stone-300 bg-opacity-30 rounded-full"></span>
        <span className="w-2 h-[7px] bg-stone-300 bg-opacity-30 rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimonials;
