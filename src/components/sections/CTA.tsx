import React from "react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";

const CallToActionSection: React.FC = () => {
  return (
    <section id="cta" className="pb-20">
      <Container>
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
          {/* Right blur effect */}
          <div className="absolute right-0 top-0 h-full w-full flex justify-end">
            <div className="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
            </div>
          </div>

          {/* Left blur effect */}
          <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
            <div className="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
            </div>
          </div>

          {/* Main content */}
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative">
            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-heading-1">
              Quick Start your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
                Strategic Digital
              </span>{" "}
              Marketing Campaign
            </h1>
            <Paragraph className="pt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              delectus architecto ullam earum
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10">
              <Button variant={"primary"}>
                <span className="text-white relative z-[5]">Get In Touch</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToActionSection;
