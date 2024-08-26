import { IoIosCloudOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { dateExtractor, filterDayOut } from "@/lib/utils";
import WeatherInfo from "./WeatherInfo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoLocationOutline } from "react-icons/io5";

const API_KEY = "064e46ef54fe58c854a42b2615975636";
const WeatherForest = () => {
  const [weather, setWeather] = useState<any>([]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${`calgary`}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
      );
      const weatherData = filterDayOut(response.data.list);
      setWeather([...weatherData]);
    } catch (error) {
      toast.error("Unable to fetch data.");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="card">
      <ul className="flex items-center gap-2">
        <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <IoIosCloudOutline />
        </li>
        <li className="font-semibold">Weather Forecast</li>
      </ul>

      <ul className="my-4 font-semibold flex items-center justify-center md:justify-start">
        <li><IoLocationOutline /></li>
        <li>Calgary</li>
      </ul>
      <ul className="hidden md:grid grid-cols-5 text-xs font-semibold text-gray-600 border-b py-2">
        <li>Day</li>
        <li>Weather</li>
        <li>Temp</li>
        <li>Humidity</li>
        <li>Wind speed</li>
      </ul>
      <ScrollArea className="h-[220px]">
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
