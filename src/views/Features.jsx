import React from "react";
import Article from '../components/Article'

const Features = () => {
  return (
    <section className="py-10 px-6 bg-light-grayish-blue">
      <article className="mt-4">
        <h2 className="h2 mx-8">Why choose Easybank?</h2>
        <p className="p">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finance like never before.
        </p>
      </article>
      <div className="py-3">
        <Article/>
        <Article/>
        <Article/>
        <Article/>
      </div>
    </section>
  );
};

export default Features;
