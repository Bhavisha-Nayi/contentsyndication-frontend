import React from 'react';
import Service from '../cards/Service';
import Container from '../shared/Container';
import Paragraph from '../shared/Paragraph';
import Title from '../shared/Title';
import { services } from '../../utils/data';

type ServicesProps = {
  title: string;
  description: string;
  icon: string;
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>What we offer</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service: ServicesProps) => (
            <Service 
              key={service.title} // Add a unique key for each service
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
