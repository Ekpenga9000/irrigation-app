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
    <ul className="grid grid-cols-5 items-center text-xs font-semibold text-gray-600 py-2">
      <li>{day}</li>
      <li>
        <img src={`http://openweathermap.org/img/wn/${src}.png`} alt={alt} />{" "}
        <p>{capitalizeText(weather)}</p>
      </li>
      <li>{`${temp}`}°C</li>
      <li>{`${humidity}`}%</li>
      <li>{`${wind}`} MPH</li>
    </ul>
  );
};

export default WeatherInfo;
