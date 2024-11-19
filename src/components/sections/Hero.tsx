import React from "react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";

const HeroSection = () => {
  return (
    <section className="relative pt-32 lg:pt-36 lg:mt-10">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-customOrange blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-customBlue blur-xl opacity-60"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-customBlue to-customOrange absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>

        <div className="relative flex flex-col lg:text-left lg:py-7 xl:py-8 sm:items-center lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <div>
            <h1 className="text-2xl/tight sm:text-3xl/tight md:text-4xl/tight xl:text-5xl/tight font-bold text-heading-1">
            Amplify Your Reach with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-customBlue from-20% via-customBlue via-10% to-customOrange">
              ContentSyndication
            </span>
            </h1>
            <Paragraph className="mt-8">
            Effortlessly manage, schedule, and distribute your content across
            platforms. Automate your workflow, boost engagement, and let your
            content do more with less effort.
            </Paragraph>
        </div>
          <div className="mt-10 w-full flex max-w-[730px] mx-auto">
              <Button
              className="min-w-max text-white mx-auto bg-customBlue" variant={"secondary"}>
                <span className="sm:flex relative z-[5]">Get Started</span>
              </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative flex flex-1 lg:w-1/2 mx-auto lg:mx-0 max-w-2xl bg-white p-4 rounded-lg shadow-xl">
          <video
            src="/images/home-video.mp4"
            className="w-full h-auto rounded-lg shadow-lg aspect-video"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
