/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="pb-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple block">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg: mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex justify-center items-center md:max-w-60 max-w-32 gap-3"
            >
              <img
                src={img}
                alt={name}
                className={`${id === 2 ? "md:w-16 w-10" : "md:w-10 w-5"}`}
              />
              <span className="md:text-xl text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
