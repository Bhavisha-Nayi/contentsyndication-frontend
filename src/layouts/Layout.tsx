import React, { useEffect, useState } from "react";
import Footer from "../components/elements/Footer";
import Header from "../components/elements/Navbar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("appTheme") || "light"
  );
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("appTheme", theme);
    document.body.setAttribute('data-theme', theme); // Update body data-theme attribute
  }, [theme]);

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className={`overflow-hidden overflow-y-auto bg-body ${theme}`}>
      <Header 
        isNavOpen={isNavOpen} 
        onToggle={toggleNav} 
        currentTheme={theme} 
        onSwitchTheme={switchTheme} 
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
