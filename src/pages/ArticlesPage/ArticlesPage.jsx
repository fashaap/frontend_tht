import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import destinations from "../../jsons/DataDestinations";
import NotFoundArticle from "../NotFoundArticle";
import { CgFormatSlash } from "react-icons/cg";
import { HiMiniHome } from "react-icons/hi2";
import mammoth from "mammoth";
import articleData from "../../jsons/ArticleData";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ArticlesPage = () => {
  const { id } = useParams();
  const data_article = articleData.find(
    (article) => article.id === parseInt(id)
  );
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocx = async () => {
      if (!data_article?.docxFile) {
        setHtmlContent("<p>Tidak ada konten.</p>");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(data_article.docxFile);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml(
          { arrayBuffer },
          { includeDefaultStyle: true }
        );

        setHtmlContent(result.value);
      } catch (error) {
        setHtmlContent("<p>Gagal memuat artikel.</p>");
        console.error("Gagal memuat .docx:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDocx();
  }, [data_article]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="relative w-full h-80 md:h-[400px] lg:h-[300px] overflow-hidden">
        <img
          src={data_article.thumbnail}
          alt={data_article.name}
          className="object-cover w-full h-full brightness-75"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-5">
        <nav className="w-full py-3 text-sm">
          <ol className="flex items-center space-x-2">
            <Link to="/">
              <HiMiniHome className="text-gray-500 hover:text-orange-500" />
            </Link>
            <li>
              <CgFormatSlash className="text-gray-500" />
            </li>
            <Link
              to="/article"
              className="font-semibold text-gray-500 hover:text-orange-500"
            >
              Article
            </Link>
            <li>
              <CgFormatSlash className="text-gray-500" />
            </li>
            <li className="text-gray-500 font-medium">{data_article.name}</li>
          </ol>
        </nav>

        <h1 className="text-center text-4xl font-bold py-10">
          {data_article.name}
        </h1>

        <article
          className="prose prose-lg prose-gray max-w-none text-justify text-md lg:text-lg [&>p]:whitespace-pre-wrap [&>p]:mb-6"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div className="mt-6">
          <Link
            to={`https://www.google.com/maps?q=${data_article.position[0]},${data_article.position[1]}`}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-full transition duration-200"
          >
            <FaMapMarkerAlt className="text-lg" />
            Lihat di Google Maps
          </Link>

          <div className="mt-12">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Bagikan Artikel Ini
            </h4>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#145dbf] text-white rounded-full transition duration-200 shadow-sm"
              >
                <FaFacebookF className="text-base" />
                <span className="text-sm font-medium">Facebook</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white rounded-full transition duration-200 shadow-sm"
              >
                <FaTwitter className="text-base" />
                <span className="text-sm font-medium">Twitter</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Tautan berhasil disalin 🔗");
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition duration-200 shadow-sm cursor-pointer"
              >
                <FaLink className="text-base" />
                <span className="text-sm font-medium">Salin Tautan</span>
              </button>
            </div>

            <div className="mt-16 bg-gray-100 rounded-2xl p-6 md:p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Berikan Saran & Masukan
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Kami sangat menghargai pendapat Anda. Silakan kirimkan saran
                atau masukan untuk pengembangan konten yang lebih baik.
              </p>
              <form
                action="mailto:alamat@emailmu.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Anda"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@domain.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    name="pesan"
                    rows="4"
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-200"
                >
                  Kirim Masukan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
