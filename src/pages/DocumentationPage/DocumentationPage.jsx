import React from "react";
import { Link} from "react-router-dom";

const DocumentationPage = () => {


  const galleryItems = [
    {
      id: 1,
      title: "Tjitjalengka Historical X Cerita Bandung",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Tjitjalengka Historical X Mahasiswa UNPAS",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Tjitjalengka Historical X Komunitas Abeng",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Tjitjalengka Historical X Komunitas Aleut",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="container mx-auto py-10 mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Galeri Dokumentasi Kegiatan
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 bg-white"
          >
            <div className="w-full h-48  aspect-[4/3] ">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
              </div>
              <Link
                to={`/documentation/${item.id}${
                  item.title
                    ? `/${encodeURIComponent(item.title.replace(/\s+/g, "-"))}`
                    : ""
                }`}
                className=" bottom-0 inline-block px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700 transition-colors text-center"
              >
                Lihat
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationPage;
