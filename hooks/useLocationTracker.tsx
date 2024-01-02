import { useState, useContext } from "react";
import { StoreContext } from "@/context/storeContext";

const useLocationTracker = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  // const [latlong, setLatlong] = useState<string>("");
  const [locating, setLocating] = useState<boolean>(false);

  const {state, setState} = useContext(StoreContext)

  const success = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setLatlong(`${latitude},${longitude}`);
    setState({...state, latlong: `${latitude},${longitude}`})
    setErrorMessage("");
    setLocating(false);
  };

  const error = () => {
    setErrorMessage("Unable to retrieve your location");
    setLocating(false);
  };

  const handleTrackLocation = () => {
    setLocating(true);
    if (!navigator.geolocation) {
      setErrorMessage("Geolocation is not supported by your browser ");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    handleTrackLocation,
    errorMessage,
    // latlong,
    locating,
  };
};

export default useLocationTracker;
