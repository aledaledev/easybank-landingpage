import React, { useState } from "react";

const Hero = () => {
  
  const getInnerWidth = () => {
    return window.innerWidth < 768 ? `mobile` : `desktop`;
  };

  const [width, setWidth] = useState(getInnerWidth());
  
  window.addEventListener("resize", () => setWidth(getInnerWidth()));

  return (
    <section className="md:flex flex-row-reverse">
      <div className="h-full -mb-28 md:m-0">
        <div className="absolute -z-10 w-full top-3 md:-top-24 md:-right-80">
          <img
            className="w-full"
            src={`./assets/images/bg-intro-${width}.svg`}
            alt="bg-hero"
          />
        </div>
        <div className="relative -top-28 -z-10 md:top-0">
          <img
            className="mx-auto w-11/12"
            src="./assets/images/image-mockups.png"
            alt="hero"
          />
        </div>
      </div>
      <article className="pt-4 pb-20 px-6 flex flex-col items-center max-w-lg mx-auto md:py-0 md:my-auto">
        <h1 className="text-center font-normal text-4xl text-dark-blue md:mr-10 md:text-left">
          Next generation digital banking
        </h1>
        <p className="p md:text-left md:mr-12">
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
