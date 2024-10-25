import React from 'react';
import Container from '../shared/Container';

const StatisticsSection: React.FC = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container>
        <div className="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12">
          <div className="text-center">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">12+</h2>
            <p className="mt-2 text-heading-3">Created projects</p>
          </div>

          <div className="text-center">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">200+</h2>
            <p className="mt-2 text-heading-3">Projects</p>
          </div>

          <div className="text-center">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">120</h2>
            <p className="mt-2 text-heading-3">Happy Clients</p>
          </div>

          <div className="text-center">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">5+</h2>
            <p className="mt-2 text-heading-3">Years</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
