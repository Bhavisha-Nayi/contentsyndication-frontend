import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../utils/data"; // Assuming this contains your service data

const ServiceDetail: React.FC = () => {
  const { servicedetail } = useParams();
  console.log(servicedetail, 'service name')

  const service = services.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === servicedetail
  );

  console.log(service, 'service')

  if (!service) {
    return (
      <section className="relative pt-20 lg:pt-20 lg:mt-8">
        <div className="text-center py-20">Service not found.</div>
      </section>
    );
  }

  return (
    <section className="relative pt-20 lg:pt-20 lg:mt-8">
      <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{service.description}</p>
      {/* Additional content can be added here */}
    </section>
  );
};

export default ServiceDetail;
