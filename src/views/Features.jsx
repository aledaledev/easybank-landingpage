import React from "react";
import List from "../components/List";
import getFeaturesData from "../helpers/getFeaturesData";

const features = await getFeaturesData();

const Features = () => {
  return (
    <section className="py-10 px-6 bg-light-grayish-blue md:py-16 sticky z-30">
      <div className="max-w-5xl mx-auto">
        <article className = "mt-4 max-w-2xl mx-auto lg:max-w-5xl">
          <h2 className="h2 mx-8 md:text-left md:mx-0 ">Why choose Easybank?</h2>
          <p className="p max-w-lg mx-auto md:text-left md:mx-0 md:mr-16 ">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finance like never before.
          </p>
        </article>
        <div className="py-3 grid grid-cols-1 sm:max-w-2xl sm:mx-auto sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:max-w-5xl">
          {features.map(feature => <List key={feature.title}  feature={feature}/>)}
        </div>
      </div>
    </section>
  );
};

export default Features;
