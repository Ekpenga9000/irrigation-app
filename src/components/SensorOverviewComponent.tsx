import { AiOutlineDashboard } from "react-icons/ai";
import SensorOverviewCard from "./SensorOverviewCard";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";

const SensorOverviewComponent = () => {
  const {humidity, temperature, windSpeed} = useSelector(
    (state: RootState) => state.weather
  )
  return (
    <div className="card">
      <ul className="flex items-center gap-2">
        <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <AiOutlineDashboard />
        </li>
        <li className="font-semibold">Sensor overview</li>
      </ul>

      <ul className="grid grid-cols-1 md:grid-cols-2 p-4">
        <li>
          <SensorOverviewCard data={temperature} text="°C Temp" />
        </li>
        <li>
          <SensorOverviewCard data={humidity} text="% Humidity" />
        </li>
        <li> <SensorOverviewCard data={windSpeed} text="(MPH) Wind speed" /></li>
        <li>
        <SensorOverviewCard data={37} text="% Soil moisture" />
        </li>
      </ul>
    </div>
  );
};

export default SensorOverviewComponent;
