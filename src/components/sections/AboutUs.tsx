import React from "react";
import { motion } from "framer-motion";
import Info from "../cards/Info";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const HowItWorks = () => {
  return (
    <section className="bg-white py-16" id="about-us">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-md text-gray-500">
          ContentSyndication is a global digital platform that publishes content
          related to technology and business insights from industry experts.
        </p>
      </div>

      <Container className="w-full h-full flex flex-col midmd:flex-row gap-10 lg:gap-12 mb-20 p-10">
        <div className="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto h-300 sm:h-96 relative">
          <div className="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
          <div className="absolute p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div>

          <span className="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span>
          <div className="relative flex flex-1 lg:w-1/2 mx-auto lg:mx-0 max-w-2xl bg-white p-4 rounded-lg shadow-xl">
          <img
            src="https://b2bconnecthub.com/wp-content/uploads/2024/08/successful-company-with-happy-employees-in-modern-office.jpg"
            alt="banner"
            className="w-full h-auto rounded-lg shadow-lg aspect-video"
          />
          </div>
        </div>
        <div className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col max-w-7xl mx-auto text-center lg:mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            Life is more interesting with every news
          </h2>
          <p className="mt-4 text-md text-gray-500">
            Contentsyndication is a global digital platform that publishes content
            related to technology and business insights from industry experts.
          </p>
          <p className="mt-4 text-md text-gray-500">
            Get the latest news, discussions & strategic expertise with thoughts
            and assessments on business challenges.
          </p>
        </div>
      </Container>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Analyzing the Contentsyndication: A Digital Platform for Business
          Insights
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Based on the description, Contentsyndication seems to be a valuable
          resource for professionals looking to stay updated on the latest
          trends in technology and business. Here’s a breakdown of its key
          features:
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Global Reach:",
            "Industry Experts:",
            "Diverse Content:",
            "Strategic Expertise:",
          ].map((step, index) => (
            <motion.div
              className="flex flex-col items-center"
              key={step}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2 * index, duration: 0.6 },
              }}
            >
              <div className="p-6 bg-blue-600 text-white rounded-full shadow-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d={
                      step === "Global Reach:"
                        ? "M2 12l2 0M22 12l-2 0M12 2l0 2M12 22l0-2M7.5 7.5l3.5 3.5M16.5 7.5l-3.5 3.5M7.5 16.5l3.5-3.5M16.5 16.5l-3.5-3.5"
                        : step === "Industry Experts:"
                        ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                        : step === "Diverse Content:"
                        ? "M3 3h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm5 16h2v-6H8v6zm4 0h2v-6h-2v6zm4 0h2v-6h-2v6zM8 7h2V3H8v4zm4 0h2V3h-2v4zm4 0h2V3h-2v4z"
                        : "M12 2l2 4h-4l2-4zm0 16l2-4h-4l2 4zm0 2c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                    }
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-600 mt-2">
                {step === "Global Reach:"
                  ? "The platform's global nature suggests it caters to a diverse audience, offering insights from various regions and perspectives."
                  : step === "Industry Experts:"
                  ? "By featuring content from industry experts, Contentsyndication provides authoritative and in-depth analysis on business challenges."
                  : step === "Diverse Content:"
                  ? "The platform likely offers a variety of content formats, such as articles, blog posts, interviews, and webinars, to cater to different learning styles and preferences."
                  : "The focus on 'thoughts and assessments' indicates that the platform provides strategic insights and actionable advice for businesses."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          How ContentSyndication Works
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Effortlessly distribute your content across multiple platforms with a
          streamlined approach.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Plan", "Schedule", "Distribute", "Analyze"].map((step, index) => (
            <motion.div
              className="flex flex-col items-center"
              key={step}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2 * index, duration: 0.6 },
              }}
            >
              <div className="p-6 bg-blue-600 text-white rounded-full shadow-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d={
                      step === "Plan"
                        ? "M12 1v22M2 12h20"
                        : step === "Schedule"
                        ? "M7 8h10M7 12h10M7 16h10"
                        : step === "Distribute"
                        ? "M21 10l-6 6-4-4-5 5"
                        : "M8 9l3 3l-3 3M12 15l3-3l-3-3M16 9l3 3l-3 3"
                    }
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-600 mt-2">
                {step === "Plan"
                  ? "Organize your content strategy by setting up distribution goals and defining your audience."
                  : step === "Schedule"
                  ? "Automate scheduling for optimal times, ensuring your content reaches audiences when engagement is highest."
                  : step === "Distribute"
                  ? "Publish seamlessly across multiple channels with a single click, reaching your audience wherever they are."
                  : "Track performance across platforms, refine your strategy, and gain insights for continuous improvement."}
              </p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HowItWorks;
