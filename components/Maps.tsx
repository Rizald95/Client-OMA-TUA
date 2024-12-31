"use client";

import React, { useEffect, useRef } from "react";

interface MapsProps {
  apiKey: string;
}

const Maps: React.FC<MapsProps> = ({ apiKey }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapContainerRef.current) return;

      const location = { lat: -8.4796184, lng: 115.2013867 };

      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: location,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: location,
        map,
        title: "Lokasi Tujuan",
      });
    };

    if (typeof window !== "undefined" && !window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google) initMap();
      };
      document.head.appendChild(script);
    } else if (window.google) {
      initMap();
    }
  }, [apiKey]);

  return <div ref={mapContainerRef} style={{ height: "400px", width: "100%" }} />;
};

export default Maps;
