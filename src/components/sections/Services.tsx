import React from "react";
import { services } from "../../utils/data";
import { Link } from "react-router-dom"; // Import Link for routing
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ServicesSection: React.FC = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-20 lg:pt-20 lg:mt-8">
      <div className="max-w-5xl mx-auto px-8" id="services">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-md text-gray-500">
            B2B Connect Hub is a global digital platform that publishes content
            related to technology and business insights from industry experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 relative z-40">
  {services.map((project, idx) => (
    <Link
      key={project.title}
      to={`/services/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl z-30" // Ensure hover effect is below navigation
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800 border border-transparent group-hover:border-slate-700 relative z-20">
        <div className="p-4">
          <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
            {project.title}
          </h4>
          <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServicesSection;
