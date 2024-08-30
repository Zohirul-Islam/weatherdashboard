import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    climate: "",
    cloudPercentage: "",
    humidity: "",
    latitude: "",
    longitude: "",
    location: "",
    maxtemp: "",
    mintemp: "",
    temp: "",
    time: "",
    wind: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = "data fetching failed";
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeather = {
        ...weatherData,
        climate: data.weather[0].main,
        cloudPercentage: data.clouds.all,
        humidity: data.main.humidity,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        location: data.name,
        maxtemp: data.main.temp_max,
        mintemp: data.main.temp_min,
        temp: data.main.temp,
        time: data.dt,
        wind: data.wind.speed,
      };
      setWeatherData(updateWeather);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    loading,
    error,
  };
};
export default useWeather;
