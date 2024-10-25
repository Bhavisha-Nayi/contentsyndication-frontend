// Brands.jsx

import React from 'react';
import Container from '../shared/Container';
import Title from '../shared/Title';

const Brands = () => {
  const logos = [
    { src: '/logos/spotify.png', alt: 'spotify' },
    { src: '/logos/slack.png', alt: 'slack' },
    { src: '/logos/paypallogo.png', alt: 'paypal' },
  ];

  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>
            Trusted by companies like
          </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo, index) => (
                <div key={index} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group">
                  <img 
                    src={logo.src} 
                    width="100" 
                    height="60" 
                    alt={logo.alt} 
                    className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" 
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
