import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="container m-auto flex w-full h-screen p-5  flex-col items-center">
=======
    <div className="container flex w-full h-screen p-10 flex-col items-center">
>>>>>>> f76271539d1db25cd41aea66a473394da32787e0
      {children}
    </div>
  );
};

export default Layout;
