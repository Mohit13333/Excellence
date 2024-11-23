import React from "react";

const Footer = () => {

  return (
    <footer className="bg-blue-800 text-white py-6 px-4 sm:px-6 lg:px-8 mt-6 rounded-t-lg">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          &#169; {new Date().getFullYear()} Mohit Singh
        </p>
        <p className="mt-2 text-sm sm:text-base">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
