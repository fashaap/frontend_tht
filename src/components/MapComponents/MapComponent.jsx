import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import FitBounds from "./FitBounds";
import { Link } from "react-router-dom";
import destinations from "../../jsons/DataDestinations.js";
import { useEffect, useState } from "react";
import { RiArrowGoBackFill, RiArticleLine } from "react-icons/ri";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { FaSearchLocation } from "react-icons/fa";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const positions = destinations.map((d) => d.position);
  const [visible, setVisible] = useState(false);

  const MapInteractionToggle = ({ enabled }) => {
    const map = useMap();

    useEffect(() => {
      if (enabled) {
        map.scrollWheelZoom.enable();
        map.dragging.enable();
        map.doubleClickZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
        map.dragging.disable();
        map.doubleClickZoom.disable();
      }
    }, [enabled, map]);

    return null;
  };

  return (
    <div className="w-full h-[500px] relative  rounded-xl overflow-hidden">
      {/* Map */}
      <MapContainer
        key={visible ? "map-active" : "map-reset"}
        center={positions[0]}
        minZoom={5}
        maxZoom={18}
        scrollWheelZoom={visible}
        className="w-full h-full z-0" // HAPUS absolute
        style={{ position: "relative", zIndex: 0 }} // JANGAN pakai absolute
      >
        <MapInteractionToggle enabled={visible} />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap, © CartoDB"
        />
        {destinations.map((dest) => (
          <Marker key={dest.name} position={dest.position}>
            <Popup>
              <img className="rounded-xl" src={dest.img} />
              <div className="flex flex-col items-center ">
                <h1 className="text-lg font-medium py-2">{dest.name}</h1>
                <Link
                  className="hover:bg-black/20 w-full text-center p-1 rounded flex items-center justify-center gap-1"
                  to={`/article/${dest.id}/${`${dest.name.replace(/\s+/g, "-")}`}`}
                >
                  <RiArticleLine />
                  LIhat Sejarah
                </Link>
                <Link
                  className="hover:bg-black/20 w-full text-center p-1 rounded flex items-center justify-center gap-1"
                  to={`https://www.google.com/maps?q=${dest.position[0]}, ${dest.position[1]}
`}
                >
                  <TbBrandGoogleMaps />
                  Google Maps
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBounds positions={positions} />
      </MapContainer>

      {visible && (
        <>
          <div className="absolute bottom-10 right-10">
            <button
              onClick={() => setVisible(false)}
              className="cursor-pointer bg-orange-500  hover:bg-orange-500/50 text-white font-medium px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              Kembali
              <RiArrowGoBackFill />
            </button>
          </div>
        </>
      )}

      {!visible && (
        <>
          <div className="absolute inset-0 bg-orange-500 opacity-20  z-[100]" />
          <div className="absolute flex items-center justify-center inset-0 z-[200]">
            <button
              onClick={() => setVisible(true)}
              className="cursor-pointer bg-orange-500  text-white font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
            >
              Telusuri
              <FaSearchLocation className="inline-block ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MapComponent;
