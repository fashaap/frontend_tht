import React, { useState } from "react";
import { Link } from "react-router-dom";
import articleData from "../../jsons/ArticleData";
import SearchAndFilterComponent from "../../components/ArticleComponents/SearchAndFilterComponent";

const ArticlesHomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredArticles = articleData.filter((article) => {
    const matchCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchSearch = article.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 mt-25">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-800">
            Jejak Sejarah
          </h1>
          <p className="mt-4 text-gray-600 text-md md:text-lg">
            Kumpulan cerita dan peninggalan bersejarah yang membentuk identitas
            dan perjalanan bangsa. Temukan kisah-kisah penuh makna dari masa
            lalu.
          </p>
        </div>

        <SearchAndFilterComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Daftar Artikel */}
        <div className="space-y-10">
          {filteredArticles.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-medium">
              Artikel tidak ditemukan.
            </p>
          ) : (
            filteredArticles.map((article) => (
              <Link to={`/article/${article.id}/${`${article.name.replace(/\s+/g, "-")}`}`} key={article.id}>
                <div className="flex flex-col md:flex-row items-start mb-5 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.name}
                    className="w-full md:w-64 h-48 md:h-40 object-cover"
                  />
                  <div className="p-5 flex-1">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                      {article.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                      Klik untuk membaca selengkapnya mengenai {article.name}.
                    </p>
                    <span className="text-orange-500 text-sm font-medium hover:underline">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesHomePage;
