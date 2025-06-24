"use client";

import React, { useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, } from "@react-google-maps/api";

// Container styles
const mapContainerStyle = {
  width: "100%",
  height: "450px",
};

// Default location (e.g., Bengaluru)
const defaultCenter = {
  lat: 25.5941,
  lng: 85.1376,
};


const GoogleMapSection = () => {
  const searchBoxRef = useRef(null);
  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  // Update map when a place is selected
const handlePlacesChanged = () => {
  const places = searchBoxRef.current?.getPlaces();

  if (!places || places.length === 0) {
    console.warn("No places found");
    return;
  }

  const place = places[0];
  if (!place.geometry || !place.geometry.location) {
    console.warn("Selected place has no geometry");
    return;
  }

  const newPosition = {
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  };

  setCenter(newPosition);
  setMarkerPosition(newPosition);
};




  return (
    <div className="my-14 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Find Us on Google Map</h2>
      <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>

      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}       // Replace with your real API key
        libraries={["places"]}
      >
        {/* Search Box */}
        <div className="mb-4">
          <StandaloneSearchBox
            onLoad={(ref) => (searchBoxRef.current = ref)}
            onPlacesChanged={handlePlacesChanged}
          >
            <input
              type="text"
              placeholder="Search your location"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none text-black"
              aria-label="Search location"
            />
          </StandaloneSearchBox>
        </div>

        {/* Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={{
            keyboardShortcuts: true, // Allow full keyboard navigation
            fullscreenControl: true,
            mapTypeControl: true,
            streetViewControl: true,
          }}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapSection;
