import { useState } from "react";

const useLocationTracker = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [latlong, setLatlong] = useState<string>("");

  const success = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatlong(`${latitude},${longitude}`);
    setErrorMessage("");
  };

  const error = () => {
    setErrorMessage("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage("Geolocation is not supported by your browser ");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    handleTrackLocation,
    errorMessage,
    latlong,
  };
};

export default useLocationTracker;
