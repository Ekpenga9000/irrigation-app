import { AiOutlineDashboard } from "react-icons/ai";
import SensorOverviewCard from "./SensorOverviewCard";

const SensorOverviewComponent = () => {
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
          <SensorOverviewCard data={28} text="°C Temp" />
        </li>
        <li>
          <SensorOverviewCard data={28} text="% Humidity" />
        </li>
        <li> <SensorOverviewCard data={10} text="(KM/H) Wind speed" /></li>
        <li>
        <SensorOverviewCard data={37} text="% Soil moisture" />
        </li>
      </ul>
    </div>
  );
};

export default SensorOverviewComponent;
