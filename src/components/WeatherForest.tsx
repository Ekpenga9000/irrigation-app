import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { dateExtractor, filterDayOut } from "@/lib/utils";
import WeatherInfo from "./WeatherInfo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateWeather } from "@/reduxState/weatherSlice/weatherSlice";

const WeatherForest = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weather, setWeather] = useState<any>([]);
  const dispatch = useDispatch();
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${`calgary`}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
      );
      const weatherData = filterDayOut(response.data.list);
      setWeather([...weatherData]);

      dispatch(
        updateWeather({
          humidity: weatherData[0].info["main"].humidity,
          windSpeed: weatherData[0].info["wind"].speed,
          temperature: weatherData[0].info["main"].temp,
        })
      );
    } catch (error) {
      toast.error("Unable to fetch data.");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="card">
      <ul className="flex items-center gap-2 mb-4">
        <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <IoLocationOutline />
        </li>
        <li className="font-semibold">Calgary - Weather Forecast</li>
      </ul>

      <ul className="hidden md:grid grid-cols-5 text-xs font-semibold text-gray-600 border-b py-2">
        <li>Day</li>
        <li>Weather</li>
        <li>Temp</li>
        <li>Humidity</li>
        <li>Wind speed</li>
      </ul>
      <ScrollArea className="h-[250px]">
        {weather.map(({ day, info }: any) => (
          <WeatherInfo
            key={day}
            src={info["weather"][0].icon}
            alt={info["weather"][0].description}
            day={dateExtractor(info.dt_txt)}
            weather={info["weather"][0].description}
            temp={Math.ceil(info["main"].temp)}
            humidity={info["main"].humidity}
            wind={info["wind"].speed}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default WeatherForest;
