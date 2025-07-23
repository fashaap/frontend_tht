import { Link, useParams } from "react-router-dom";
import destinations from "../../jsons/DataDestinations";
import NotFoundArticle from "../NotFoundArticle";
import { CgFormatSlash } from "react-icons/cg";
import { HiMiniHome } from "react-icons/hi2";

const ArticlesPage = () => {
  const { id } = useParams();

  const data_article = destinations.find((article) => article.id === parseInt(id));

  if (!data_article) {
    return <NotFoundArticle />;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Gambar Header */}
      <div className="relative w-full h-80 md:h-[400px] lg:h-[300px] overflow-hidden">
        <img
          src={data_article.img}
          alt={data_article.name}
          className="object-cover w-full h-full brightness-75"
        />
      </div>

      {/* Konten Artikel */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-5">
        <nav className="w-full   py-3 text-sm">
          <ol className="flex items-center space-x-2">
            <Link to="/">
              <HiMiniHome className="text-gray-500 hover:text-orange-500" />
            </Link>
            <li>
              <CgFormatSlash className="text-gray-500 hover:text-orange-500" />
            </li>
            <Link
              to="/article"
              className="font-semibold text-gray-500  hover:text-orange-500"
            >
              Article
            </Link>
            <li>
              <CgFormatSlash className="text-gray-500 hover:text-orange-500" />
            </li>
            <li className="text-gray-500 font-medium">{data_article.name}</li>
          </ol>
        </nav>

        <h1 className="text-center text-4xl font-bold py-10">
          Stasiun Cicalengka, Saksi Bisu Perjalanan Waktu dari zaman kolonial
          hingga kini
        </h1>
        {/* 
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex flex-col text-md md:text-lg">
            <h1 className="flex items-center gap-1">
              <span >Penulis :</span>
              <span className="text-gray-800 font-medium">Atep Kurnia</span>
            </h1>

            <span className="text-gray-500">23 Mei 2025</span>
          </div>
        </div> */}

        <article className="prose prose-lg prose-gray max-w-none text-justify">
          <p>{data_article.text}</p>
        </article>
      </div>
    </div>
  );
};

export default ArticlesPage;
