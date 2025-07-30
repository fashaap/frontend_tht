import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MaintenanceSVG from "../assets/under-constructions-55.svg"; // Ganti path jika kamu punya ilustrasi SVG
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaFacebook } from "react-icons/fa";

const MaintenancePage = () => {
  const targetDate = new Date("2025-07-23T00:00:00"); // YYYY-MM-DDTHH:mm:ss

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { total, days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      {/* Gambar ilustrasi maintenance (optional) */}
      <img src={MaintenanceSVG} alt="Maintenance" className="w-30 md:w-50 " />

      {/* Judul */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Situs Sedang Dalam Perawatan
      </h1>

      {/* Deskripsi */}
      <p className="text-sm md:text-base text-gray-600 max-w-md mb-6">
        Kami sedang melakukan pemeliharaan rutin untuk meningkatkan pengalaman
        Anda. Mohon kembali beberapa saat lagi.
      </p>

      {total > 0 ? (
        <div className="flex gap-4 text-orange-500 text-lg md:text-2xl font-mono font-semibold mb-6">
          <div>
            <span>{String(days).padStart(2, "0")}</span>
            <div className="text-xs text-gray-500">Hari</div>
          </div>
          <div>
            <span>{String(hours).padStart(2, "0")}</span>
            <div className="text-xs text-gray-500">Jam</div>
          </div>
          <div>
            <span>{String(minutes).padStart(2, "0")}</span>
            <div className="text-xs text-gray-500">Menit</div>
          </div>
          <div>
            <span>{String(seconds).padStart(2, "0")}</span>
            <div className="text-xs text-gray-500">Detik</div>
          </div>
        </div>
      ) : (
        <p className="text-green-600 font-semibold mb-6">Mohon tunggu ya!</p>
      )}

      <div className="bg-orange-500 text-white px-4 py-2 rounded-full mb-6 flex items-center justify-center gap-2">
        <Link to="https://www.instagram.com" className="hover:text-orange-200">
          <AiFillInstagram />
        </Link>
        <Link to="https://www.youtube.com" className="hover:text-orange-200">
          <FaYoutube />
        </Link>
        <Link to="https://www.facebook.com" className="hover:text-orange-200">
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
};

export default MaintenancePage;
