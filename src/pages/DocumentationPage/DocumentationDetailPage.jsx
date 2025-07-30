import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import documentationGallery from "../../jsons/GalleryItems";
import toast from "react-hot-toast";

const DocumentationDetailPage = () => {
  const { id } = useParams();
  const [galleryGetData, setGalleryGetData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const gallery = documentationGallery.find((item) => item.id === Number(id));
    if (gallery) {
      setGalleryGetData(gallery);
    }
  }, [id]);

  console.log(galleryGetData);

  if (!galleryGetData) {
    return (
      <div className="text-center pt-20 text-gray-600">
        Data tidak ditemukan untuk ID: {id}
      </div>
    );
  }

const downloadImage = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Dokumentasi-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error("Gagal download:", err);
    toast.error("Gagal mengunduh gambar. Silakan coba lagi atau simpan manual.");
  }
};


  return (
    <div className="container mx-auto pt-30 pb-20 px-6 md:px-10 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">
          {galleryGetData.title}
        </h1>
        <p className="text-gray-500 text-lg">
          Potret kenangan yang penuh cerita dan momen tak terlupakan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryGetData.images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={image}
              alt={`Dokumentasi ${index + 1}`}
              className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(image)}
                className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition "
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Preview"
                className="rounded-xl w-full max-h-[90vh] object-contain border border-white shadow-xl"
              />

              {/* Tombol close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                ✕
              </button>

              {/* Tombol download langsung */}
              <button
                onClick={() => downloadImage(selectedImage)}
                className="absolute top-3 left-3 flex items-center gap-2 bg-white text-gray-800 rounded-full px-4 py-2 shadow-lg backdrop-blur hover:bg-gray-100 transition-all text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationDetailPage;
