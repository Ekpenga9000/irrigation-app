import { TbFountain } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";

const DashboardSprinklerCard = () => {
  const {isIrrigationOn} = useSelector(
    (state: RootState) => state.irrigation
  );
  return (
    <div className="card">
      <ul className="flex items-center gap-2 mb-4">
        <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <TbFountain />
        </li>
        <li className="font-semibold">Sprinkler System</li>
      </ul>
      <div className="flex items-center justify-between">
        <ul>
          <li className="flex items-center gap-2">
            <p className="text-sm font-semibold">Active Sprinklers:</p>
            <p className="text-teal-700 text-lg">{isIrrigationOn ? `${190}` : "0"}</p>
          </li>
          <li className="flex items-center gap-2">
            <p className="text-sm font-semibold">Inactive Sprinklers:</p>
            <p className="text-gray-500 text-lg">{!isIrrigationOn ? `${190}` : "0"}</p>
          </li>
        </ul>
        <ul className="flex flex-col items-center">
          <li className="text-4xl text-teal-700">{`${190}`}</li>
          <li className="text-sm font-semibold">Total Sprinklers</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSprinklerCard;
