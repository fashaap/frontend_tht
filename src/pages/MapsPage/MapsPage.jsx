import React from "react";
import MapComponent from "../../components/MapComponents/MapComponent";
import TravelSVG from "../../assets/travel-planning-53.svg"

const MapsPage = () => {
  // const imageGroups = [
  //   [
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  //   ],
  //   [
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  //   ],
  //   [
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  //   ],
  //   [
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  //     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  //   ],
  // ];

  return (
    <div className="flex flex-col mt-30 container mx-auto  px-8 pb-10 g:px-20 xl:px-40 relative">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Peta Tempat Bangunan Bersejarah di Tjitjtalengka
      </h2>

      {/* <img className="h-[500px] absolute left-0 top-10" src={TravelSVG} alt="travel_svg" /> */}

      <div className="relative inset-0 z-0 ">
        <MapComponent />
      </div>

      {/* <div className=" h-full pb-10 pt-15">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-grow border-t border-gray-300 "></div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center whitespace-nowrap">
            Visualisasi
          </h1>
          <div className="flex-grow border-t border-gray-300 "></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  bg-gray-50">
        {imageGroups.map((group, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {group.map((src, imgIndex) => (
              <div key={imgIndex}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={src}
                  alt={`Gallery ${colIndex}-${imgIndex}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MapsPage;
