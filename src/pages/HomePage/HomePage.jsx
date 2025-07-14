import { useEffect, useState } from "react";
import backgroundThumbnail from "../../assets/thumbnail.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import visualisasi01 from "../../assets/visualisasi_01.jpg";
import visualisasi02 from "../../assets/visualisasi_02.jpg";
import visualisasi03 from "../../assets/visualisasi_03.jpg";
import visualisasi04 from "../../assets/visualisasi_04.jpg";
import visualisasi05 from "../../assets/visualisasi_05.png";
import visualisasi06 from "../../assets/visualisasi_06.png";
import visualisasi07 from "../../assets/visualisasi_07.png";
import visualisasi08 from "../../assets/visualisasi_08.png";
import visualisasi09 from "../../assets/visualisasi_09.png";
import visualisasi10 from "../../assets/visualisasi_10.jpg";

import dokumentasi01 from "../../assets/dokumentasi_01.jpg";
import dokumentasi02 from "../../assets/dokumentasi_02.jpg";
import dokumentasi03 from "../../assets/dokumentasi_03.jpg";

import imageContent3 from "../../assets/foto_grup.jpg";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Set awal saat mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "hidden",
  //         background: "#FF7424",
  //         borderRadius: "100%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "hidden",
  //         background: "#FF7424",
  //         borderRadius: "100%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 487,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 518,
        settings: {
          slidesToShow: 1,
          dots: false,
          speed: 700,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          dots: false,
          speed: 700,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const dataVisualisasi = [
    {
      id: 1,
      src_image: visualisasi01,
      alt_image: "visualisasi",
    },
    {
      id: 2,
      src_image: visualisasi02,
      alt_image: "visualisasi",
    },
    {
      id: 3,
      src_image: visualisasi03,
      alt_image: "visualisasi",
    },
    {
      id: 4,
      src_image: visualisasi04,
      alt_image: "visualisasi",
    },
    {
      id: 5,
      src_image: visualisasi05,
      alt_image: "visualisasi",
    },
    {
      id: 6,
      src_image: visualisasi06,
      alt_image: "visualisasi",
    },
    {
      id: 7,
      src_image: visualisasi07,
      alt_image: "visualisasi",
    },
    {
      id: 8,
      src_image: visualisasi08,
      alt_image: "visualisasi",
    },
    {
      id: 9,
      src_image: visualisasi09,
      alt_image: "visualisasi",
    },
    {
      id: 10,
      src_image: visualisasi10,
      alt_image: "visualisasi",
    },
  ];

  const dataDokumentasi = [
    {
      id: 1,
      src_image: dokumentasi01,
      alt_image: "dokumentasi01",
    },
    {
      id: 2,
      src_image: dokumentasi02,
      alt_image: "dokumentasi02",
    },
    {
      id: 3,
      src_image: dokumentasi03,
      alt_image: "dokumentasi03",
    },
  ];

  const dataTestimoni = [
    {
      id: 1,
      profile_image: "https://picsum.photos/150",
      name: "Ayu Lestari",
      testimonial:
        "Saya jadi tahu banyak hal yang sebelumnya tidak pernah saya dengar tentang sejarah lokal. Kegiatannya seru dan sangat informatif!",
    },
    {
      id: 2,
      profile_image: "https://picsum.photos/150",
      name: "Rizky Pratama",
      testimonial:
        "Pengalaman mengikuti kegiatan ini benar-benar membuka mata saya akan pentingnya melestarikan warisan budaya. Terima kasih atas kesempatannya!",
    },
    {
      id: 3,
      profile_image: "https://picsum.photos/150",
      name: "Siti Nurhaliza",
      testimonial:
        "Melalui kegiatan ini, saya jadi merasa lebih dekat dengan sejarah kampung halaman sendiri. Menyenangkan sekaligus mendidik.",
    },
    {
      id: 4,
      profile_image: "https://picsum.photos/150",
      name: "Daniel Setiawan",
      testimonial:
        "Bukan sekadar belajar sejarah, tapi juga membangun rasa cinta terhadap daerah sendiri. Kegiatan ini luar biasa!",
    },
  ];

  return (
    <>
      {/* background image landing page */}
      <div
        className=" w-full h-100 bg-position-[center_top_-28rem] bg-no-repeat object-fill "
        style={{ backgroundImage: `url(${backgroundThumbnail})` }}
      >
        <div
          className={` absolute ${
            windowWidth < 322 ? "top-20" : "top-25"
          } lg:top-20 left-0 right-0 text-white`}
        >
          <div className="container mx-auto flex-row gap-3 px-5 py-5 lg:px-20 lg:py-4 xl:px-40 xl:py-11">
            <div className="">
              <h1 className="text-2xl sm:text-4xl font-bold md:w-160">
                Menelusuri Jejak Waktu Lewat Cerita & Warisan Cicalengka
              </h1>
              <p className="text-sm sm:text-lg  md:w-160">
                Walau hanya sebuah daerah kecil, tempat ini menyimpan nilai yang
                besar. Setiap jengkal tanahnya menjadi saksi bisu sejarah yang
                membentuk wajah dan jiwa masyarakatnya hari ini.
              </p>
            </div>
            <div className="mt-5">
              <Link className="py-2.5 px-5 pb-3 mb-2 text-sm lg:text-md font-medium  text-gray-100 hover:text-white bg-white/10 backdrop-blur-xl rounded-full border border-white hover:border-orange-500 hover:bg-orange-500">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-black/40 h-full w-full" />
      </div>

      {/* main */}
      <div className=" top-100 left-0 right-0  mb-10 mt-6">
        <div className="container mx-auto h-full px-5 pb-5 lg:px-20 xl:px-40">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-grow border-t border-gray-300 "></div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center whitespace-nowrap">
              Visualisasi Tjitjalengka
            </h1>
            <div className="flex-grow border-t border-gray-300 "></div>
          </div>
        </div>

        <div className="container mx-auto lg:mb-5 px-4">
          <Slider {...settings}>
            {dataVisualisasi.map((item, index) => (
              <div key={index} className="px-2">
                <div className="rounded-2xl transition transform hover:scale-105 duration-300 w-full h-40">
                  <img
                    src={item.src_image}
                    className="w-full h-full rounded-2xl shadow-lg object-cover"
                    alt={item.alt_image}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="container mx-auto max-w-8xl h-full py-4 px-5 lg:px-20 xl:px-40">
          {/* content 3*/}
          <div className="border-b pb-2 mb-8 border-gray-300 ">
            <h1 className="text-2xl font-medium mb-2">
              Menjaga Jejak, Menghidupkan Sejarah
            </h1>
            <p className="text-justify">
              Kami adalah komunitas yang peduli terhadap sejarah dan budaya
              lokal Cicalengka. Melalui program wisata edukatif, kami
              mengenalkan kembali jejak kolonial, semangat pergerakan nasional,
              dan kekayaan budaya masyarakat Cicalengka. Tujuan kami mendirikan
              komunitas ini agar warisan ini tidak terlupakan dan bisa dinikmati
              generasi sekarang dan yang akan datang.
            </p>
          </div>

          <div className="grid lg:grid-cols-6  gap-5">
            <img
              className="col-span-3 w-full h-full rounded-2xl shadow-lg object-cover"
              src={imageContent3}
              alt="image"
            />
            <div className="col-span-3 w-full">
              <div className="flex-row">
                <div className="mb-5">
                  <h1 className="font-medium text-lg m-0 p-0">Walking Tour</h1>
                  <p className="m-0 p-0 text-justify">
                    Jelajahi kota kecil dengan langkah kita perlahan, tapi penuh
                    makna. Setiap sudut jalan menyimpan cerita, setiap senyum
                    warga menyambut hangat. Di balik hiruk-pikuk kota besar,
                    Cicalengka hadir sebagai tempat di mana waktu seakan
                    berjalan lebih lambat, memberi ruang bagi kita untuk
                    benar-benar melihat, merasakan, dan memahami.
                  </p>
                </div>
                <div className="mb-5">
                  <h1 className="font-medium text-lg m-0 p-0">Vakansi Lokal</h1>
                  <p className="m-0 p-0 text-justify">
                    Vakansi lokal menawarkan pengalaman sederhana namun
                    berkesan. Menyusuri jalan-jalan kecil, menikmati jajanan
                    khas, hingga menjelajahi tempat-tempat bersejarah dan alam
                    perbukitan yang menenangkan. Semua bisa dinikmati tanpa
                    harus pergi jauh untuk melangkah, dan biarkan Cicalengka
                    bercerita.
                  </p>
                </div>
                <div className="">
                  <h1 className="font-medium text-lg m-0 p-0">
                    Historical Camp
                  </h1>
                  <p className="m-0 p-0 text-justify">
                    Historical Camp menghadirkan pengalaman belajar sejarah
                    dalam suasana kebersamaan dan reflektif. Peserta diajak
                    berkumpul, berdiskusi, menyimak arsip dan cerita lama, serta
                    menikmati sajian budaya lokal. Tak sekadar jalan-jalan,
                    kegiatan ini membangun ruang untuk mengenal Cicalengka
                    secara lebih dalam dengan interaksi, narasi, dan kesadaran
                    kolektif tentang jejak masa lalu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* tagline 2 */}
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="flex-grow border-t border-gray-300 "></div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center whitespace-nowrap">
              Dokumentasi kegiatan
            </h1>
            <div className="flex-grow border-t border-gray-300 "></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {dataDokumentasi
              .slice(0, windowWidth < 1024 ? 1 : 3)
              .map((items, index) => (
                <div key={index} className="relative h-45 lg:h-60 w-full">
                  <img
                    src={items.src_image}
                    alt={items.alt_image}
                    className="absolute inset-0 h-45 lg:h-full w-full rounded-2xl object-cover shadow-lg brightness-75"
                  />
                  <div className="absolute inset-0 h-45 lg:h-full bg-gradient-to-t from-orange-500/50 rounded-2xl" />
                </div>
              ))}
          </div>
          <div className="container mx-auto   items-center justify-center w-35 mt-8">
            <Link className="border-2 px-5 border-orange-500 text-orange-500 font-medium hover:bg-orange-500 hover:text-white w-auto text-center pb-3 py-2 rounded-full">
              Selengkapnya
            </Link>
          </div>
        </div>

        <div className="container mx-auto max-w-8xl h-full py-4 px-5 lg:px-20 xl:px-40">
          <div className="border-b pb-2 mb-8 border-gray-300 ">
            <h1 className="text-2xl font-medium mb-2">Apa Kata Mereka?</h1>
            <p className="text-justify">
              Dengarkan langsung pengalaman teman-teman yang telah mengikuti
              kegiatan kami. Melalui kegiatan ini, mereka belajar tentang
              sejarah lokal dan menyadari bahwa mempelajari sejarah tidak hanya
              memperluas wawasan, tetapi juga menumbuhkan rasa penghargaan
              terhadap warisan budaya dan sejarah di sekitar kita.
            </p>
          </div>

          <Slider {...settings2}>
            {dataTestimoni.slice(0, 4).map((item, index) => (
              <div key={index} className="px-2">
                {" "}
                {/* Spacing antar-slide */}
                <div className="h-full w-full rounded-2xl bg-orange-500 shadow-md">
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <img
                      src={item.profile_image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mb-2"
                    />
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-white text-sm text-center mt-2">
                      <span className="text-lg font-medium">"</span>{" "}
                      {item.testimonial}{" "}
                      <span className="text-lg font-medium">"</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
