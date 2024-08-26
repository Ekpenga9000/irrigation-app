import { IoCalendarClearOutline } from "react-icons/io5";
import { FaThermometerQuarter, FaWind } from "react-icons/fa";
import { RiWaterPercentLine } from "react-icons/ri";

interface IWeatherInfoProp {
  day: string;
  src: string;
  alt: string;
  weather: string;
  temp: number;
  humidity: number;
  wind: number;
}

const WeatherInfo = (props: IWeatherInfoProp) => {
  const { day, src, alt, weather, temp, humidity, wind } = props;
  const capitalizeText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <>
      <ul className="hidden md:grid grid-cols-5 gap-4 items-center text-xs font-semibold text-gray-600 py-2">
        <li>{day}</li>
        <li>
          <img src={`http://openweathermap.org/img/wn/${src}.png`} alt={alt} />{" "}
          <p>{capitalizeText(weather)}</p>
        </li>
        <li>{`${temp}`}°C</li>
        <li>{`${humidity}`}%</li>
        <li>{`${wind}`} MPH</li>
      </ul>

      <div className="p-4 border-b md:hidden">
        <p className="flex items-center gap-2">
          <IoCalendarClearOutline /> {day}
        </p>
        <ul className="flex flex-col items-center">
          <li className="flex items-center">
            <FaThermometerQuarter />{" "}
            <span className="text-4xl semi-bold">{`${temp}`}°C</span>
          </li>
          <li className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${src}.png`}
              alt={alt}
            />{" "}
            <p>{capitalizeText(weather)}</p>
          </li>
        </ul>
        <ul className="flex justify-evenly">
          <li className="text-center">
            <p className="flex items-center text-sm gap-1">
              <RiWaterPercentLine /> Humidity
            </p>
            <span> {`${humidity}`}%</span>
          </li>
          <li className="text-center">
            <p className="flex items-center text-sm gap-1">
              <FaWind /> Wind Speed
            </p>
            <span> {`${wind}`} MPH</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherInfo;
