import React from "react";
import Layout from "../../layouts/Layout";
import ServiceDetail from "../../components/sections/ServiceDetail";

const ServiceDetailPage: React.FC = () => {

  return (
    <Layout title="Welcome to Contentsyndication">
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        <ServiceDetail />
      </main>
    </Layout>
  );
};

export default ServiceDetailPage;
