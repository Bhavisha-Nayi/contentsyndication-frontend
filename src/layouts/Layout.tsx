import React from "react";
import Footer from "../components/elements/Footer";
import Header from "../components/elements/Navbar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`overflow-hidden overflow-y-auto bg-body`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
