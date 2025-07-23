// FitBounds.jsx
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

const FitBounds = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || positions.length === 0) return;
    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [50, 50] }); // Padding opsional
  }, [map, positions]);

  return null;
};

export default FitBounds;
