import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-orange-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Cicalengka Heritage. Semua hak
          dilindungi.
        </p>
        <p className="text-xs sm:text-sm mt-2 text-white-400">
          Dibuat dengan semangat melestarikan warisan lokal.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
