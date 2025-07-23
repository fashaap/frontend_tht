import { Link } from "react-router-dom";

const NotFoundArticle = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12 text-center">
      <div className="text-5xl md:text-6xl mb-4">🧐</div>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Oops! Artikel tidak ditemukan.
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 max-w-md">
        Artikel yang kamu cari tidak tersedia atau sudah dihapus. Silakan
        periksa URL atau kembali ke halaman sebelumnya.
      </p>

      <Link
        to="/"
        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition text-sm sm:text-base"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFoundArticle;
