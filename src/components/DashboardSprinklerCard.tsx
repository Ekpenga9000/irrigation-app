import { TbFountain } from "react-icons/tb";

interface IDashboardSprinklerCardProps {
  active: number;
  inactive: number;
}
const DashboardSprinklerCard = ({
  active,
  inactive,
}: IDashboardSprinklerCardProps) => {
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
            <p className="text-teal-700 text-lg">{`${active}`}</p>
          </li>
          <li className="flex items-center gap-2">
            <p className="text-sm font-semibold">Inactive Sprinklers:</p>
            <p className="text-gray-500 text-lg">{`${inactive}`}</p>
          </li>
        </ul>
        <ul className="flex flex-col items-center">
          <li className="text-4xl text-teal-700">{`${active + inactive}`}</li>
          <li className="text-sm font-semibold">Total Sprinklers</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSprinklerCard;
