import React, { useState } from "react";

const Hero = () => {
  
  const getInnerWidth = () => {
    return window.innerWidth < 768 ? `mobile` : `desktop`;
  };

  const [width, setWidth] = useState(getInnerWidth());
  
  window.addEventListener("resize", () => setWidth(getInnerWidth()));

  return (
    <section className="bg-very-light-gray md:flex md:flex-row-reverse md:justify-center lg:h-screen">
      <div className="h-full -mb-28 md:m-0 lg:-mb-24">
          <img
            className="w-full absolute z-10 top-3 md:-top-36 md:-right-96 lg:-right-1/2 "
            src={`./assets/images/bg-intro-${width}.svg`}
            alt="bg-hero"
          />
          <img
            className="mx-auto w-11/12 relative -top-28 z-10 md:-top-24 md:-right-20 md:z-40 md:scale-150 lg:scale-110"
            src="./assets/images/image-mockups.png"
            alt="hero"
          />
      </div>
      <article className="pt-4 pb-20 px-6 flex flex-col items-center max-w-lg mx-auto md:py-0 md:my-auto lg:mr-0 lg:ml-12 lg:pl-16">
        <h1 className="text-center font-normal text-4xl text-dark-blue md:mr-10 md:text-left lg:mr-16 lg:text-5xl">
          Next generation digital banking
        </h1>
        <p className="p md:text-left md:mr-12 lg:m-0 lg:mr-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className= "button mt-3 md:self-start">
          request invite
        </button>
      </article>
    </section>
  );
};

export default Hero;
