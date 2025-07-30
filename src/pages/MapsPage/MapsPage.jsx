import React from "react";
import MapComponent from "../../components/MapComponents/MapComponent";
import TravelSVG from "../../assets/travel-planning-53.svg";

const MapsPage = () => {
  return (
    <div className="flex flex-col mt-30 container mx-auto  px-8 pb-10 g:px-20 xl:px-40 relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl  font-bold font-serif text-gray-800 text-center">
          Peta Tempat Bangunan Bersejarah di Tjitjtalengka
        </h2>
        <p className="mt-2 text-gray-600 text-md md:text-lg">
          Jelajahi lokasi-lokasi bersejarah di Cicalengka yang menjadi saksi
          bisu perjalanan waktu. Dari stasiun peninggalan kolonial hingga
          bangunan-bangunan tua yang menyimpan cerita, semua ditampilkan dalam
          peta interaktif untuk memudahkan Anda menelusuri jejak sejarah kota
          ini.
        </p>
      </div>

      <div className="relative inset-0 z-0 ">
        <MapComponent />
      </div>
    </div>
  );
};

export default MapsPage;
