import React from 'react';
import Info from '../cards/Info'; // Assuming Info is a React component
import Container from '../shared/Container'; // Assuming Container is a React component
import Paragraph from '../shared/Paragraph'; // Assuming Paragraph is a React component
import Title from '../shared/Title'; // Assuming Title is a React component

const AboutUs: React.FC = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col midmd:flex-row gap-10 lg:gap-12">
        <div className="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto">
          <div className="w-full h-80 sm:h-96 midmd:h-full relative">
            <div className="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
            <div className="absolute p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div>

            <span className="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span>
            <img
              src="/images/dev-with-c-1.webp"
              alt="banner"
              width="1240"
              height="1385"
              className="w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full"
            />
          </div>
        </div>
        <div className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
          <Title>We help drive your business forward faster</Title>
          <Paragraph className="mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
          </Paragraph>
          <div className="pt-8 grid grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]">
            <Info description="Lorem ipsum dolor sit amet consectetur" title="Mission">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </span>
            </Info>
            <Info description="Lorem ipsum dolor sit amet consectetur" title="Vision">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
