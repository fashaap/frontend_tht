import { Link } from "react-router-dom";
import notFoundSVG from "../assets/404-page-not-found-1-24.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 py-12 text-center">
      {/* <h1 className="text-6xl font-bold text-orange-500">404</h1> */}
      <img className="h-25 lg:h-30 xl:h-40" src={notFoundSVG} alt="404" />

      <div className="max-w-md mt-5">
        <p className="text-xl md:text-2xl font-semibold text-gray-800">
          Halaman Tidak Ditemukan
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm md:text-base text-white font-medium hover:bg-orange-600 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
