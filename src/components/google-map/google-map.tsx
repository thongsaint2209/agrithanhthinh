import React, { useState } from "react";
import {
  GoogleMap as GoogleMapLib,
  useJsApiLoader,
} from "@react-google-maps/api";
import { ENV_CONFIG } from "@/configs/url";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export const defaultCenter = {
  lat: 21.104907,
  lng: 105.786735,
};

function GoogleMap({ children, sx = containerStyle, onMapClick, center }: any) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: ENV_CONFIG.VITE_GOOGLE_API_KEY,
    libraries: ["drawing", "places"],
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center || defaultCenter);
    //map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMapLib
      mapContainerStyle={sx}
      center={center || defaultCenter}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onMapClick}
    >
      {children}
    </GoogleMapLib>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMap);
