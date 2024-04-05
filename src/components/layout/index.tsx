import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container flex w-full h-screen p-10 flex-col items-center">
      {children}
    </div>
  );
};

export default Layout;
